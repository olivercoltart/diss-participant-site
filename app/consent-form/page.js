import Link from "next/link";

export default function WelcomePage() {
  return (
    <section className="card">
      <h1>Consent Form</h1>
      <p><b>Title of Project:</b> The Impact of a Novel Gamification Technique on the Critical Thinking Skills of
      Users in the Field of Geographical Education</p>
      <p><b>Name of Researcher:</b> Oliver Coltart</p>
      <p>Please tick the box if you agree:</p>
      <ul>
        <li>I confirm that I have read the information sheet for the above study. I have had the opportunity to 
          consider the information, ask questions and have had these answered satisfactorily.</li>
        <li>I understand that my participation is voluntary and that I am free to withdraw at any time 
          without giving any reason, without my medical care or legal rights being affected.</li>
        <li>I understand that the information collected about me will be used to support
          other research in the future and may be shared anonymously with other researchers </li>
        <li>I understand that the information held and maintained by the University of West London may be
          used to help contact me or provide information about my progression status.</li>
        <li>I agree to take part in the above study.</li>
      </ul>
      <nav className="nav">
        <Link className="button" href="/questions">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
