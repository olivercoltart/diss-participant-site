import { submitPreKnowledge } from "../actions";
import { KNOWLEDGE_QUESTIONS } from "../../lib/study-content";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Pre-Study Questions</h1>
      <h3>Baseline Knowledge</h3>

      <form action={submitPreKnowledge}>
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
        <p>
          NB: Proceeding to the next page will open the game in your browser. 
          Please allow the game a few seconds to begin once you select "Start".
          Once you complete the game select "Finish" to load the next page. This may take a few seconds.
        </p>
        <nav className="nav">
          <button className="button" type="submit">
            Next Page
          </button>
        </nav>
      </form>
    </section>
  );
}
