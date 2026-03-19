import { submitPostQuestions } from "../actions";
import { LIKERT_OPTIONS, POST_STUDY_SECTIONS } from "../../lib/study-content";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Post-Study Questions</h1>

      <form action={submitPostQuestions}>
        {POST_STUDY_SECTIONS.map((section, sectionIndex) => {
          const questionOffset = POST_STUDY_SECTIONS
            .slice(0, sectionIndex)
            .reduce((total, currentSection) => total + currentSection.questions.length, 0);

          return (
            <div key={section.title}>
              <h3>{section.title}</h3>

              {section.questions.map((question, index) => {
                const questionNumber = questionOffset + index + 1;

                return (
                  <div className="question" key={`q${questionNumber}`}>
                    <h3>
                      {questionNumber}. {question}
                    </h3>
                    <div className="options">
                      {LIKERT_OPTIONS.map((option) => (
                        <label key={option}>
                          <input
                            required
                            type="radio"
                            name={`q${questionNumber}`}
                            value={option}
                          />{" "}
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        <nav className="nav">
          <button className="button" type="submit">
            Next Page
          </button>
        </nav>
      </form>
    </section>
  );
}
