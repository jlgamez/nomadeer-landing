import { HeroSectionV2 } from "@/components/hero/v2/HeroSectionV2";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Flex } from "@radix-ui/themes";
import { ValuePropositionSection } from "@/components/value-proposition/ValuePropositionSection";
import { StoriesSection } from "@/components/stories/StoriesSection";
import { DeepBenefitSection } from "@/components/DeepBenefits/DeepBenefitSection";
//import { FrequentlyAskedQuestions } from "@/components/faq/FrequentlyAskedQuestions";
import { WaitlistSection } from "@/components/waitlist/WaitlistSection";
import { FrequentlyAskedQuestions } from "@/components/faq/FrequentlyAskedQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function MyApp() {
  return (
    <Flex direction={"column"} gap={"1"}>
      <Header />
      <HeroSectionV2 />
      <ValuePropositionSection />
      <StoriesSection />
      <HowItWorks />
      <DeepBenefitSection
        benefits={[
          {
            title: "Live Narration",
            description: "Experience the city with a personal guide, on your terms.",
            imageUrl: "/caterina.webp",
          },
          {
            title: "Immersive Experience",
            description: "Experience the city with a personal guide, on your terms.",
            imageUrl: "/caterina.webp",
          },
          {
            title: "Live Narration",
            description: "Experience the city with a personal guide, on your terms.",
            imageUrl: "/caterina.webp",
          },
        ]}
      />
      <WaitlistSection />
      <FrequentlyAskedQuestions />
      <Footer />
    </Flex>
  );
}
