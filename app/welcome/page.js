import { submitConsent } from "../actions";
import ConsentForm from "./consent-form";

export default function WelcomePage({ searchParams }) {
  const hasDeclined = searchParams?.status === "declined";

  return (
    <section className="card">
      <h1>Study Consent Form</h1>
      <p>Welcome and thank you for taking part in this study.</p>
      <p>Please read the information below before agreeing to participate.</p>

      {hasDeclined ? (
        <p className="warning">
          You selected that you do not agree to the consent form. The survey has been exited and
          you cannot proceed unless you return and provide consent.
        </p>
      ) : null}

      <div className="question">
        <h3>Study Title</h3>
        <p>
          The Impact of a Novel Gamification Technique on the Development of Critical Thinking
          Skills in Geographical Education
        </p>
      </div>

      <div className="question">
        <h3>What You Will Do</h3>
        <ul>
          <li>Complete a short survey about your attitudes toward games.</li>
          <li>Complete a brief knowledge test on European countries and capital cities.</li>
          <li>Play a short educational geography game.</li>
          <li>Complete a final survey about your experience.</li>
          <li>Complete a final knowledge test on European countries and capital cities.</li>
        </ul>
      </div>

      <div className="question">
        <h3>Purpose of the Study</h3>
        <p>
          This research aims to evaluate user experience and knowledge gain from a geography
          education game, and to assess the effectiveness of using a game to teach the locations of
          European countries and capital cities.
        </p>
      </div>

      <div className="question">
        <h3>Data Collection and Confidentiality</h3>
        <p>
          All data collected will be used for research and analysis only. Your responses will
          remain confidential, will not be shared with third parties, and will be analysed
          anonymously alongside other participants&apos; responses.
        </p>
      </div>

      <div className="question">
        <h3>Your Rights</h3>
        <ul>
          <li>Participation is voluntary.</li>
          <li>You may skip any question by selecting &quot;Prefer not to say.&quot;</li>
          <li>You may withdraw at any time by closing the survey before submission.</li>
          <li>
            Only the researchers (Oliver Coltart and Dr. Cain Kazimoglu) will have access to the
            data, and no attempt will be made to identify you.
          </li>
        </ul>
      </div>

      <div className="question">
        <h3>Contact</h3>
        <p>If you have any questions or concerns, please contact:</p>
        <p>
          <a href="mailto:34115793@student.uwl.ac.uk">34115793@student.uwl.ac.uk</a>
        </p>
      </div>

      <div className="question">
        <h3>Consent</h3>
        <p>
          By continuing with the survey, you confirm that you have read this information and agree
          to voluntarily participate in this study and allow your data to be used for research
          purposes.
        </p>
      </div>

      <ConsentForm action={submitConsent} />
    </section>
  );
}
