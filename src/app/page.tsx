import { HeroSection } from "@/components/hero/HeroSection";
import { ValuePropositionSection } from "@/components/value-proposition/ValuePropositionSection";
import { ValuePropositionCard } from "@/components/value-proposition/ValuePropositionCard";
import { StoryCard } from "@/components/stories/StoryCard";
import { StoriesSection } from "@/components/stories/StoriesSection";
import { Box, Flex } from "@radix-ui/themes";

export default function MyApp() {
  return (
    <Flex direction={"column"}>
      <HeroSection />
      <ValuePropositionSection />
      <StoriesSection />
    </Flex>
  );
}
