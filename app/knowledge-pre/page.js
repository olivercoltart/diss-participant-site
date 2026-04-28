import { submitPreKnowledge } from "../actions";
import KnowledgeAssessmentForm from "../knowledge-assessment-form";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Pre-Study Geography Knowledge Check</h1>
      <p>
        Proceeding to the next page will open the game in your browser. Please allow the game a
        few seconds to load. Once you complete the game select "Finish" to
        load the next page.<br></br> <b>You can quit the game at any point through the pause menu.</b>
      </p>
      <h3>Baseline Knowledge</h3>
      <KnowledgeAssessmentForm action={submitPreKnowledge} />
    </section>
  );
}
