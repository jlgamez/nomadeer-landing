export type StoryData = {
  title: string;
  description: string;
  imageUrl: string;
  badgeText: string;
};

const storiesData: StoryData[] = [
  {
    title: "Wrath of the Thunderborn: The Saga of Harald Hardrada",
    description:
      "From exile to emperor, Harald Hardrada carved his legend across continents—raider, king, and the last great Viking. Relive the battles, betrayals, and glory that shaped the fate of kingdoms",
    imageUrl: "/viking.webp",
    badgeText: "New Saga",
  },
  {
    title: "Hangaku Gozen: Lady of the Fort",
    description:
      "In 13th-century Japan, Hangaku Gozen led thousands against the Kamakura shogunate. Wounded yet unbowed in Tossakayama, her defiance became a symbol of honor and resolve",
    imageUrl: "/hangaku.webp",
    badgeText: "Limited spots",
  },
  {
    title: "Caterina Sforza: The Tigress of Forlì",
    description:
      "In the deadly courts of Renaissance Italy, Caterina Sforza—widow, countess, and warrior—outwitted assassins, conspirators, and even the Borgias. Her story is one of survival, cunning, and a woman who mastered the deadly game of power",
    imageUrl: "/caterina.webp",
    badgeText: "Most awaited",
  },
];

export default storiesData;
