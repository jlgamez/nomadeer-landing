type ValuePropositionData = { title: string; bulletPoints: string[]; isPositive: boolean };

const valuePropositionData: ValuePropositionData[] = [
  {
    title: "The old way",
    bulletPoints: [
      "Following a flag in a huge, noisy crowd",
      "Hearing boring dry facts",
      "Struggling to hear over traffic and chatter",
      "No connection to the place",
    ],
    isPositive: false,
  },
  {
    title: "The Nomadeer way",
    bulletPoints: [
      "Your own private group or solo",
      "Immersive live storytelling",
      "A live, interactive story with an expert",
      "Clear audio delivered to your earphones",
    ],
    isPositive: true,
  },
];

export default valuePropositionData;
