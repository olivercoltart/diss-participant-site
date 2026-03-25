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
      "I enjoyed playing this game.",
      "I enjoyed learning through this game.",
      "The game made learning about European geography more interesting than traditional methods.",
      "I would like to use similar games to learn other topics.",
    ],
  },
  {
    title: "Absorption",
    questions: [
      "I felt completely focused while playing the game.",
      "I lost track of time while playing.",
      "The game kept my attention from start to finish.",
      "I felt immersed in the game while identifying countries and capital cities.",
      "I would have liked to continue playing the game longer.",
    ],
  },
  {
    title: "Creative Thinking",
    questions: [
      "The game encouraged me to think about geography in different ways.",
      "I used different strategies to remember countries and capital cities.",
      "I tried to improve my performance by changing my approach.",
    ],
  },
  {
    title: "Activation",
    questions: [
      "The game motivated me to complete all the challenges.",
      "I felt excited as I progressed through the challenges.",
      "The game made me curious to learn more about European countries and capital cities.",
    ],
  },
  {
    title: "Absence of Negative Affect",
    questions: [
      "I felt frustrated while playing the game.",
      "I found parts of the game confusing.",
      "I found the game boring at times.",
    ],
  },
  {
    title: "Dominance",
    questions: [
      "I felt in control of my actions while playing the game.",
      "I understood how to play the game and what I needed to do to succeed.",
      "I felt confident completing tasks presented in the game.",
      "The game interface was easy to use.",
    ],
  },
  {
    title: "Perceived Learning",
    questions: [
      "I learned new European countries from this game.",
      "I learned new European capital cities from this game.",
      "The game improved my ability to match countries with their capital cities.",
      "I feel more confident locating European countries on a map.",
      "The game helped me remember European capital cities.",
      "The game was an effective way to learn European geography.",
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
