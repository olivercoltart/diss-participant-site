"use client";

import { useState } from "react";
import KnowledgeMapQuestion from "./knowledge-map-question";
import { KNOWLEDGE_QUESTIONS, MAP_KNOWLEDGE_QUESTIONS } from "../lib/study-content";

export default function KnowledgeAssessmentForm({ action, showPreStudyNotice = false }) {
  const [validationMessage, setValidationMessage] = useState("");

  function handleSubmit(event) {
    const formData = new FormData(event.currentTarget);
    const unansweredMapQuestions = MAP_KNOWLEDGE_QUESTIONS.filter((question, index) => {
      const questionNumber = KNOWLEDGE_QUESTIONS.length + index + 1;
      const answer = formData.get(`q${questionNumber}`);

      return typeof answer !== "string" || !answer.trim();
    });

    if (unansweredMapQuestions.length > 0) {
      event.preventDefault();
      setValidationMessage(
        `Please answer all map questions before continuing. Missing: ${unansweredMapQuestions
          .map((question) => question.prompt)
          .join(" ")}`,
      );
      return;
    }

    setValidationMessage("");
  }

  return (
    <form action={action} onSubmit={handleSubmit}>
      {KNOWLEDGE_QUESTIONS.map((question, index) => {
        const questionNumber = index + 1;

        return (
          <div className="question" key={`q${questionNumber}`}>
            <h3>
              {questionNumber}. {question.prompt}
            </h3>
            <div className="options">
              {question.options.map((option) => (
                <label key={option}>
                  <input required type="radio" name={`q${questionNumber}`} value={option} />{" "}
                  {option}
                </label>
              ))}
            </div>
          </div>
        );
      })}

      {MAP_KNOWLEDGE_QUESTIONS.map((question, index) => {
        const questionNumber = KNOWLEDGE_QUESTIONS.length + index + 1;

        return (
          <KnowledgeMapQuestion
            key={`q${questionNumber}`}
            questionNumber={questionNumber}
            prompt={question.prompt}
          />
        );
      })}

      {showPreStudyNotice ? (
        <p>
          NB: Proceeding to the next page will open the game in your browser. Please allow the
          game a few seconds to begin once you select "Start". Once you complete the game select
          "Finish" to load the next page. This may take a few seconds.
        </p>
      ) : null}

      {validationMessage ? <p className="warning">{validationMessage}</p> : null}

      <nav className="nav">
        <button className="button" type="submit">
          Next Page
        </button>
      </nav>
    </form>
  );
}
