import Link from "next/link";

export default function QuestionsPage() {
  const sections = [
    {
      title: "Enjoyment",
      questions: [
        "I usually enjoy learning new things through digital games.",
        "I think playing this game will be an enjoyable way to learn about European geography.",
        "I expect to find the learning challenges in this game interesting.",
        "I believe a game can make complex topics like geographical information systems fun to explore.",
      ],
    },
    {
      title: "Anticipated Engagement",
      questions: [
        "I expect that this game will keep me focused on its tasks.",
        "I think the game's activities will be immersive and interactive.",
        "I anticipate feeling engaged when solving geography-related problems.",
        "I believe I'll lose track of time while completing the game's missions.",
      ],
    },
    {
      title: "Creative Thinking & Problem-Solving",
      questions: [
        "I expect to use my creativity and ability to think critically to complete geography-based tasks in the game.",
        "I expect to link maps and personal geographical knowledge in a critical way.",
        "I believe the game will encourage me to explore different strategies.",
      ],
    },
    {
      title: "Motivation",
      questions: [
        "I feel motivated to test my existing knowledge of European geography.",
        "I'm eager to see how geographic information system principles are applied in an interactive way.",
        "I expect to feel energised when tackling game challenges.",
      ],
    },
    {
      title: "Control",
      questions: [
        "I believe I'll be able to control my decisions effectively in the game.",
        "I expect to understand how to navigate the game's interface easily.",
        "I feel confident that I can succeed in the tasks the game presents.",
      ],
    },
    {
      title: "Perceived Learning / Baseline Perception",
      questions: [
        "I already know some basics about European countries, capitals and their respective locations.",
        "I am confident in my ability to locate European countries and capitals on a world map.",
        "I feel confident in my ability to identify the locations of European features like landmarks, natural landscapes, historical sites and artistic achievements.",
        "I expect this game to help me strengthen my ability to make connections between locations and various European features.",
      ],
    },
  ];

  const options = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  return (
    <section className="card">
      <h1>Pre-Study Questions</h1>

      {sections.map((section, sectionIndex) => {
        const questionOffset = sections
          .slice(0, sectionIndex)
          .reduce((total, currentSection) => total + currentSection.questions.length, 0);

        return (
          <div key={section.title}>
            <h3>{section.title}</h3>

            {section.questions.map((question, index) => {
              const questionNumber = questionOffset + index + 1;

              return (
                <div className="question" key={`q${questionNumber}`}>
                  <h3>{questionNumber}. {question}</h3>
                  <div className="options">
                    {options.map((option) => (
                      <label key={option}>
                        <input type="radio" name={`q${questionNumber}`} value={option} /> {option}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <nav className="nav">
        <Link className="button" href="/knowledge-pre">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
