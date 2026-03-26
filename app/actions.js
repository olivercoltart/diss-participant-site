"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSql } from "../lib/db";
import {
  KNOWLEDGE_QUESTIONS,
  MAP_KNOWLEDGE_QUESTIONS,
  POST_STUDY_SECTIONS,
  PRE_STUDY_SECTIONS,
} from "../lib/study-content";

const PARTICIPANT_COOKIE = "participant_id";

function enumerateQuestions(sections, pageKey) {
  let questionNumber = 0;

  return sections.flatMap((section) =>
    section.questions.map((questionText) => {
      questionNumber += 1;

      return {
        pageKey,
        sectionTitle: section.title,
        questionNumber,
        questionText,
      };
    }),
  );
}

const PRE_STUDY_QUESTIONS = enumerateQuestions(PRE_STUDY_SECTIONS, "questions_pre");
const POST_STUDY_QUESTIONS = enumerateQuestions(POST_STUDY_SECTIONS, "questions_post");

function enumerateKnowledgeQuestions(pageKey) {
  const multipleChoiceQuestions = KNOWLEDGE_QUESTIONS.map((question, index) => ({
    pageKey,
    sectionTitle: "Baseline Knowledge",
    questionNumber: index + 1,
    questionText: question.prompt,
  }));

  const mapQuestions = MAP_KNOWLEDGE_QUESTIONS.map((question, index) => ({
    pageKey,
    sectionTitle: "Map Knowledge",
    questionNumber: KNOWLEDGE_QUESTIONS.length + index + 1,
    questionText: question.prompt,
  }));

  return [...multipleChoiceQuestions, ...mapQuestions];
}

const PRE_KNOWLEDGE_QUESTIONS = enumerateKnowledgeQuestions("knowledge_pre");
const POST_KNOWLEDGE_QUESTIONS = enumerateKnowledgeQuestions("knowledge_post");
const PARTICIPANT_QUESTIONS = [
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 1,
    questionText: "I am over the age of 18",
    fieldName: "age_confirmation",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 2,
    questionText: "What is your age?",
    fieldName: "age",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 3,
    questionText: "Which of the following best represents your gender identity?",
    fieldName: "gender",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 4,
    questionText:
      "Have you completed a higher education degree? (e.g. Bachelors, Masters, PhD, etc.)",
    fieldName: "higher_education",
  },
];

function getParticipantId() {
  const participantId = cookies().get(PARTICIPANT_COOKIE)?.value;

  if (!participantId) {
    redirect("/welcome");
  }

  return participantId;
}

async function saveResponses(questionSet, formData) {
  const sql = getSql();
  const participantId = getParticipantId();

  for (const question of questionSet) {
    const answer = formData.get(`q${question.questionNumber}`);

    if (typeof answer !== "string" || !answer) {
      throw new Error(`Missing answer for question ${question.questionNumber}.`);
    }

    await sql`
      insert into study_responses (
        participant_id,
        page_key,
        section_title,
        question_number,
        question_text,
        answer
      )
      values (
        ${participantId},
        ${question.pageKey},
        ${question.sectionTitle},
        ${question.questionNumber},
        ${question.questionText},
        ${answer}
      )
      on conflict (participant_id, page_key, question_number)
      do update set
        section_title = excluded.section_title,
        question_text = excluded.question_text,
        answer = excluded.answer,
        updated_at = now()
    `;
  }
}

export async function submitConsent() {
  const sql = getSql();
  const [participant] = await sql`
    insert into participants (consented_at)
    values (now())
    returning id
  `;

  cookies().set(PARTICIPANT_COOKIE, participant.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  redirect("/participant-questions");
}

export async function submitParticipantQuestions(formData) {
  const sql = getSql();
  const participantId = getParticipantId();

  const ageConfirmation = formData.get("age_confirmation");
  const age = formData.get("age");
  const agePreferNotToSay = formData.get("age_prefer_not_to_say");
  const gender = formData.get("gender");
  const genderSelfDescribe = formData.get("gender_self_describe");
  const higherEducation = formData.get("higher_education");

  if (ageConfirmation !== "yes") {
    throw new Error("Age confirmation is required.");
  }

  const ageAnswer =
    agePreferNotToSay === "yes" ? "Prefer not to say" : typeof age === "string" ? age : "";

  if (!ageAnswer) {
    throw new Error("Age response is required.");
  }

  if (ageAnswer !== "Prefer not to say") {
    const parsedAge = Number(ageAnswer);

    if (!Number.isInteger(parsedAge) || parsedAge < 18) {
      throw new Error("Participants must be 18 or older.");
    }
  }

  if (typeof gender !== "string" || !gender) {
    throw new Error("Gender response is required.");
  }

  const genderAnswer =
    gender === "Prefer to self-describe:"
      ? `Prefer to self-describe: ${String(genderSelfDescribe ?? "").trim()}`
      : gender;

  if (gender === "Prefer to self-describe:" && genderAnswer === "Prefer to self-describe:") {
    throw new Error("A self-described gender response is required.");
  }

  if (typeof higherEducation !== "string" || !higherEducation) {
    throw new Error("Higher education response is required.");
  }

  for (const question of PARTICIPANT_QUESTIONS) {
    const answer =
      question.fieldName === "gender"
        ? genderAnswer
        : question.fieldName === "age"
          ? ageAnswer
          : formData.get(question.fieldName);

    if (typeof answer !== "string" || !answer) {
      throw new Error(`Missing answer for participant question ${question.questionNumber}.`);
    }

    await sql`
      insert into study_responses (
        participant_id,
        page_key,
        section_title,
        question_number,
        question_text,
        answer
      )
      values (
        ${participantId},
        ${question.pageKey},
        ${question.sectionTitle},
        ${question.questionNumber},
        ${question.questionText},
        ${answer}
      )
      on conflict (participant_id, page_key, question_number)
      do update set
        section_title = excluded.section_title,
        question_text = excluded.question_text,
        answer = excluded.answer,
        updated_at = now()
    `;
  }

  redirect("/questions-pre");
}

export async function submitPreQuestions(formData) {
  await saveResponses(PRE_STUDY_QUESTIONS, formData);
  redirect("/knowledge-pre");
}

export async function submitPostQuestions(formData) {
  await saveResponses(POST_STUDY_QUESTIONS, formData);
  redirect("/knowledge-post");
}

export async function submitPreKnowledge(formData) {
  await saveResponses(PRE_KNOWLEDGE_QUESTIONS, formData);
  redirect("/game");
}

export async function submitPostKnowledge(formData) {
  const sql = getSql();
  await saveResponses(POST_KNOWLEDGE_QUESTIONS, formData);

  const participantId = getParticipantId();

  await sql`
    update participants
    set completed_at = now()
    where id = ${participantId}
  `;

  redirect("/complete");
}
