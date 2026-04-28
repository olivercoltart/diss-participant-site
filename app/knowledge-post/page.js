import { submitPostKnowledge } from "../actions";
import KnowledgeAssessmentForm from "../knowledge-assessment-form";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Post-Study Geography Knowledge Check</h1>
      <h3>Baseline Knowledge</h3>
      <KnowledgeAssessmentForm
        action={submitPostKnowledge}
        additionalQuestion="Do you have any additional thoughts on the game?"
      />
    </section>
  );
}
