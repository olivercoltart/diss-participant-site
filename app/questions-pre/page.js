import { submitPreQuestions } from "../actions";
import { LIKERT_OPTIONS, PRE_STUDY_SECTIONS } from "../../lib/study-content";

export default function QuestionsPage() {
  const questions = PRE_STUDY_SECTIONS.flatMap((section) => section.questions);

  return (
    <section className="card likert-page">
      <h3>Pre-Study Questions</h3>

      <form action={submitPreQuestions} className="likert-grid-form">
        <div className="likert-grid-scroll">
          <div className="likert-grid" role="table" aria-label="Pre-study Likert scale questions">
            <div className="likert-grid-header" role="row">
              <div className="likert-grid-header-question" role="columnheader">
                Question
              </div>
              {LIKERT_OPTIONS.map((option, index) => (
                <div className="likert-grid-header-option" key={option} role="columnheader">
                  <span className="likert-grid-header-score">{LIKERT_OPTIONS.length - index}</span>
                  <span className="likert-grid-header-label">{option}</span>
                </div>
              ))}
            </div>

            {questions.map((question, index) => {
              const questionNumber = index + 1;

              return (
                <div className="likert-grid-row" key={`q${questionNumber}`} role="row">
                  <h3 className="likert-grid-question" role="rowheader">
                    {questionNumber}. {question}
                  </h3>
                  {LIKERT_OPTIONS.map((option) => (
                    <label className="likert-grid-option" key={option}>
                      <input
                        aria-label={`${questionNumber}. ${question} - ${option}`}
                        required
                        type="radio"
                        name={`q${questionNumber}`}
                        value={option}
                      />
                    </label>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <nav className="nav">
          <button className="button" type="submit">
            Next Page
          </button>
        </nav>
      </form>
    </section>
  );
}
