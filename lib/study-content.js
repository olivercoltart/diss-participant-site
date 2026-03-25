export const LIKERT_OPTIONS = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export const PRE_STUDY_SECTIONS = [
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

export const POST_STUDY_SECTIONS = [
  {
    title: "Enjoyment",
    questions: [
      "I enjoyed learning through this game.",
      "The game made learning about European geography more interesting.",
      "I found the learning challenges in this game interesting.",
      "I would like to use similar games for other subjects.",
    ],
  },
  {
    title: "Engagement",
    questions: [
      "I felt completely focused while playing.",
      "I lost track of time during gameplay.",
      "The challenges kept me engaged throughout.",
      "I felt immersed in the geographic scenarios the game presented.",
    ],
  },
  {
    title: "Creative Thinking & Problem-Solving",
    questions: [
      "The game encouraged me to think creatively and critically about geography-based tasks.",
      "I found myself connecting different ideas to solve problems.",
      "The game inspired me to experiment with different strategies.",
    ],
  },
  {
    title: "Motivation",
    questions: [
      "The game kept me motivated to complete each challenge.",
      "I felt excited as I progressed through the challenges.",
      "The activities stimulated my curiosity about geography.",
    ],
  },
  {
    title: "Control",
    questions: [
      "I felt in control of my actions and decisions in the game.",
      "I understood clearly how to play the game and what I had to do to succeed.",
      "I felt confident completing tasks presented in the game.",
      "The game interface was easy to use and responsive.",
    ],
  },
  {
    title: "Perceived Learning / Reflection",
    questions: [
      "I learned new information about European countries, cities, and well-known features.",
      "I can now more accurately locate European countries, cities, and features on a world map.",
      "This game helped me make connections between European features like landmarks, natural landscapes, historical sites and artistic achievements.",
    ],
  },
];

export const KNOWLEDGE_QUESTIONS = [
  {
    prompt: "What is the capital city of France?",
    options: ["Lyon", "Marseille", "Paris", "Nice"],
  },
  {
    prompt: "Bratislava is the capital of which European country?",
    options: ["Slovakia", "North Macedonia", "Serbia", "Slovenia"],
  },
  {
    prompt: "What is the capital of Latvia?",
    options: ["Daugavpils", "Liepaja", "Riga", "Jelgava"],
  },
  {
    prompt: "Zagreb is the capital of which European country?",
    options: ["Bosnia and Herzegovina", "Croatia", "Bulgaria", "Romania"],
  },
];

export const MAP_KNOWLEDGE_QUESTIONS = [
  {
    prompt: "Where is Spain?",
    answer: "Spain",
  },
  {
    prompt: "Where is Luxembourg?",
    answer: "Luxembourg",
  },
  {
    prompt: "Where is The Netherlands?",
    answer: "The Netherlands",
  },
  {
    prompt: "Where is Romania?",
    answer: "Romania",
  },
  {
    prompt: "Where is the United Kingdom?",
    answer: "United Kingdom",
  },
];
