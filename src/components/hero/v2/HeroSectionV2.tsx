import { Container, Flex } from "@radix-ui/themes";
import { HeadingAndCtaV2 } from "@/components/hero/v2/HeadingAndCtaV2";
import { MockupImageV2 } from "@/components/hero/v2/MockupImageV2";

export const HeroSectionV2 = () => {
  return (
    <Container pt={"120px"} width={"100%"} align={"center"}>
      <Flex direction={"column"} align={"center"}>
        <HeadingAndCtaV2 />
        <MockupImageV2 />
      </Flex>
    </Container>
  );
};
