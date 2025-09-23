import { HeroSectionV2 } from "@/components/hero/v2/HeroSectionV2";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Flex } from "@radix-ui/themes";
import { ValuePropositionSection } from "@/components/value-proposition/ValuePropositionSection";
import { StoriesSection } from "@/components/stories/StoriesSection";

export default function MyApp() {
  return (
    <Flex direction={"column"} gap={"6"}>
      <HeroSectionV2 />
      <ValuePropositionSection />
      <StoriesSection />
      <HowItWorks />
    </Flex>
  );
}
