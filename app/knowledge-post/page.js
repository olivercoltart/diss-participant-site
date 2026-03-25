import { submitPostKnowledge } from "../actions";
import KnowledgeAssessmentForm from "../knowledge-assessment-form";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Post-Study Questions</h1>
      <h3>Baseline Knowledge</h3>
      <KnowledgeAssessmentForm action={submitPostKnowledge} />
    </section>
  );
}
