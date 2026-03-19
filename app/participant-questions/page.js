import { submitParticipantQuestions } from "../actions";
import ParticipantQuestionsForm from "./participant-questions-form";

export default function ParticipantQuestionsPage() {
  return (
    <section className="card">
      <h1>Participant Questions</h1>
      <ParticipantQuestionsForm action={submitParticipantQuestions} />
    </section>
  );
}
