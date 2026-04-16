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
const CONSENT_QUESTION = {
  pageKey: "welcome",
  sectionTitle: "Study Consent Form",
  questionNumber: 1,
  questionText:
    "Do you agree to voluntarily participate in this study and allow your data to be used for research purposes?",
};

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
    questionText: "What is your age?",
    fieldName: "age",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 2,
    questionText: "What is your gender?",
    fieldName: "gender",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 3,
    questionText: "What is your highest level of education?",
    fieldName: "higher_education",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 4,
    questionText: "Have you played educational/serious games before?",
    fieldName: "serious_games_experience",
  },
  {
    pageKey: "participant_questions",
    sectionTitle: "Participant Questions",
    questionNumber: 5,
    questionText: "If you have played educational/serious games, how often do you play them?",
    fieldName: "serious_games_frequency",
  },
];

function getParticipantId() {
  const participantId = cookies().get(PARTICIPANT_COOKIE)?.value;

  if (!participantId) {
    redirect("/welcome");
  }

  return participantId;
}

async function participantsHasConsentResponseColumn(sql) {
  const [column] = await sql`
    select 1
    from information_schema.columns
    where table_name = 'participants'
      and column_name = 'consent_response'
    limit 1
  `;

  return Boolean(column);
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

export async function submitConsent(formData) {
  const sql = getSql();
  const consentResponse = formData.get("consent_response");

  if (consentResponse !== "agree" && consentResponse !== "disagree") {
    throw new Error("Consent response is required.");
  }

  const hasConsentResponseColumn = await participantsHasConsentResponseColumn(sql);

  const [participant] = hasConsentResponseColumn
    ? await sql`
        insert into participants (consent_response, consented_at)
        values (${consentResponse}, ${consentResponse === "agree" ? new Date() : null})
        returning id
      `
    : await sql`
        insert into participants default values
        returning id
      `;

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
      ${participant.id},
      ${CONSENT_QUESTION.pageKey},
      ${CONSENT_QUESTION.sectionTitle},
      ${CONSENT_QUESTION.questionNumber},
      ${CONSENT_QUESTION.questionText},
      ${consentResponse === "agree"
        ? "I agree to voluntarily take part in this study"
        : "I do not agree to this consent form"}
    )
    on conflict (participant_id, page_key, question_number)
    do update set
      section_title = excluded.section_title,
      question_text = excluded.question_text,
      answer = excluded.answer,
      updated_at = now()
  `;

  if (consentResponse !== "agree") {
    cookies().delete(PARTICIPANT_COOKIE);
    redirect("/welcome?status=declined");
  }

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

  const age = formData.get("age");
  const gender = formData.get("gender");
  const higherEducation = formData.get("higher_education");
  const higherEducationOther = String(formData.get("higher_education_other") ?? "").trim();
  const seriousGamesExperience = formData.get("serious_games_experience");
  const seriousGamesFrequency = formData.get("serious_games_frequency");

  const ageAnswer = typeof age === "string" ? age : "";

  if (!ageAnswer) {
    throw new Error("Age response is required.");
  }

  if (typeof gender !== "string" || !gender) {
    throw new Error("Gender response is required.");
  }

  if (typeof higherEducation !== "string" || !higherEducation) {
    throw new Error("Higher education response is required.");
  }

  const higherEducationAnswer =
    higherEducation === "Other" ? `Other: ${higherEducationOther}` : higherEducation;

  if (higherEducation === "Other" && !higherEducationOther) {
    throw new Error("An education response is required when Other is selected.");
  }

  if (typeof seriousGamesExperience !== "string" || !seriousGamesExperience) {
    throw new Error("Serious games experience response is required.");
  }

  if (seriousGamesExperience === "Yes") {
    if (typeof seriousGamesFrequency !== "string" || !seriousGamesFrequency) {
      throw new Error("Serious games frequency response is required when Yes is selected.");
    }
  }

  const seriousGamesFrequencyAnswer =
    seriousGamesExperience === "Yes" ? seriousGamesFrequency : "Not applicable";

  for (const question of PARTICIPANT_QUESTIONS) {
    const answer =
      question.fieldName === "gender"
        ? gender
        : question.fieldName === "age"
          ? ageAnswer
          : question.fieldName === "higher_education"
            ? higherEducationAnswer
            : question.fieldName === "serious_games_experience"
              ? seriousGamesExperience
              : question.fieldName === "serious_games_frequency"
                ? seriousGamesFrequencyAnswer
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
