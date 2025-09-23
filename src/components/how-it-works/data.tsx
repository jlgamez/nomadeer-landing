import { CiBookmarkCheck } from "react-icons/ci";
import { BsBookmarkCheck } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { IoHeadsetOutline } from "react-icons/io5";
import { JSX } from "react";

type Step = {
  title: string;
  icon: JSX.Element;
  description: string;
};

const iconSize = 54;
const howItWorksSteps: Step[] = [
  {
    title: "Pick your story",
    icon: <BsBookmarkCheck size={iconSize} color="var(--accent-9)" />,
    description: "Choose one of the available stories",
  },
  {
    title: "Go to the starting point",
    icon: <TfiLocationPin size={iconSize} color="var(--accent-9)" />,
    description: "Head to the specific location where the story begins",
  },
  {
    title: "Join your private narrator",
    icon: <IoHeadsetOutline size={iconSize} color="var(--accent-9)" />,
    description: "Use our platform to get an immersive experience guided by your private narrator",
  },
];

export default howItWorksSteps;
