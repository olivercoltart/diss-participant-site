import Link from "next/link";

export default function WelcomePage() {
  return (
    <section className="card">
      <h1>Welcome to the Study</h1>
      <p>This proposed research aims to evaluate the impact of a novel gamification technique on the critical thinking skills of users in the field 
        of geographical education: an experimental study through the implementation of a web-based learning application. </p>
      <p>Instructions for Participants:</p>
      <ul>
        <li>You will be asked to complete a participation form</li>
        <li>All responses and assessment results are anonymous</li>
        <li>You are under no obligation to answer any questions. If you do not wish to answer a question, please select “Prefer not to say.”
          or close the browser window.</li>
        <li>Participation in this study is voluntary. You can opt out at any point by closing the application window before submitting your responses.</li>
        <li>You will be asked to complete a critical analysis assessment on the locations of various countries and cities. 
          You will then be taken through various learning exercises, before being prompted to complete another critical analysis assessment on the material 
          shown in the learning exercises.</li>
        <li>If you are happy with the points above you can proceed by selecting "Next Page" below:</li>
      </ul>
      <nav className="nav">
        <Link className="button" href="/participant-information">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
