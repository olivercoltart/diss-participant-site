export const LIKERT_OPTIONS = [
  "Strongly Agree",
  "Agree",
  "Neutral",
  "Disagree",
  "Strongly Disagree",
];

export const PRE_STUDY_SECTIONS = [
  {
    title: "Pre-Study Questions",
    questions: [
      "I usually enjoy learning new things through digital games.",
      "I think playing this game will be an enjoyable way to learn about European geography.",
      "I expect to find the learning challenges in this game interesting.",
      "I enjoy solving geography related problems.",
      "I think a game about geography can encourage critical thinking and problem solving.",
      "I believe the game will encourage me to explore different strategies.",
      "I feel motivated to test my existing knowledge of European geography.",
      "I am excited to see how this game applies geography.",
      "I expect this game to be easy to play.",
      "I expect the games interface to be clear and easy to use.",
      "I feel motivated to play a game that practices geography.",
      "I think this game can improve my knowledge in geography.",
    ],
  },
];

export const POST_STUDY_SECTIONS = [
  {
    title: "Post-Study Questions",
    questions: [
      "I enjoyed learning through this game.",
      "The game made learning about European geography more enjoyable.",
      "I found the learning challenges in this game interesting.",
      "I enjoyed solving geography challenges in this game.",
      "The game encouraged me to think creatively and critically about geography-based tasks.",
      "The game inspired me to experiment with different strategies.",
      "The game kept me motivated to complete each challenge.",
      "I felt excited when learning geography from the game play.",
      "I found this game easy to play.",
      "I found the games user interface clear and easy to use.",
      "Having played the game, I feel motivated that I practiced geography.",
      "I think this game improved my knowledge in geography.",
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
