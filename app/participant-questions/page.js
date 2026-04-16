import { submitParticipantQuestions } from "../actions";
import ParticipantQuestionsForm from "./participant-questions-form";

export default function ParticipantQuestionsPage() {
  return (
    <section className="card participant-questions-page">
      <h1>Participant Questions</h1>
      <h3>In this study "Geography" refers to European countries, capital cities, and locations.</h3>
      <ParticipantQuestionsForm action={submitParticipantQuestions} />
    </section>
  );
}
