import Link from "next/link";

const sections = [
  {
    heading: "Project purpose",
    body: "This proposed research aims to evaluate the impact of a novel gamification technique on the critical thinking skills of users in the field of geographical education: an experimental study through the implementation of a web-based learning application.",
  },
  {
    heading: "Why have you been chosen?",
    body: "You are over the age of 18 and responded positively to taking part in the study when asked.",
  },
  {
    heading: "Do I have to take part?",
    body: "No, you are under no obligation to take part in this study.",
  },
  {
    heading: "What will happen to me if I take part?",
    body: "Your responses will be anonymously recorded and analysed.",
  },
  {
    heading: "What do I have to do?",
    body: "Complete 2 critical thinking tests and the tasks associated with the assigned learning environment through a web-based application.",
  },
  {
    heading: "What are the possible disadvantages and risks of taking part?",
    body: "Increased stress levels due to the tests.",
  },
  {
    heading: "What are the possible benefits of taking part?",
    body: "Sense of achievement for contributing towards an emerging area of research.",
  },
  {
    heading: "What happens if the research study stops earlier than expected?",
    body: "N/A",
  },
  {
    heading: "What if something goes wrong?",
    body: "You can get in touch with the research supervisor if you have any problem with the study, you can also contact the UWL Research Ethics Committee to pursue your complaints if you do not feel it has been resolved to your satisfaction.",
  },
  {
    heading: "Will my taking part in this project be kept confidential?",
    body: "We will keep all information we learn about you during the study project anonymous. You won't be able to identify any studies or articles that come after. Any information about you that is gathered through the online questionnaire will be saved online and secured using passwords and other appropriate security procedures and technology.",
  },
  {
    heading: "Will I be recorded, and how will the recorded media be used?",
    body: "You will not be recorded.",
  },
  {
    heading:
      "What type of information will be sought from me and why is the collection of this information relevant for achieving the research project's objectives?",
    body: "Your age, gender, and whether you have completed a higher education course. This is collected to see if the novel gamification technique has more or less of an impact on these factors.",
  },
  {
    heading: "What will happen to the results of the research project?",
    body: "The study's findings will be published. You won't be mentioned by name in any document or publication. Please request to be included in our distribution list if you would want a copy of any publications that come out of the project.",
  },
];

export default function ParticipantInformationPage() {
  return (
    <section className="card">
      <h1>Participant Information Sheet</h1>
      <p>
        <b>Title of Study:</b> The Impact of a Novel Gamification Technique on the Development
        of Critical Thinking Skills in Geographical Education
      </p>

      {sections.map((section) => (
        <div className="question" key={section.heading}>
          <p>
            <b>{section.heading}</b>
          </p>
          <p>{section.body}</p>
        </div>
      ))}

      <div className="question">
        <p>
          <b>Further information</b>
        </p>
        <p>
          If you need any further information, you can contact me: Oliver Coltart (
          <a href="mailto:34115793@student.uwl.ac.uk">34115793@student.uwl.ac.uk</a>)
        </p>
        <p>You can also contact my primary supervisor: Dr. Cain Kazimoglu</p>
        <p>You can also contact UWL Research Ethics Committee</p>
      </div>

      <p>
        If you agree to take part in the study, please sign the consent form on the next page.
      </p>

      <nav className="nav">
        <Link className="button" href="/consent-form">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
