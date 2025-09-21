import { Container, Flex } from "@radix-ui/themes";
import { HeadingAndCta } from "@/components/hero/HeadingAndCta";
import { MockupImage } from "@/components/hero/MockupImage";

export const HeroSection = () => {
  return (
    <Container pt={"130px"} width={"100%"}>
      <Flex direction={"row"} align={"center"} p={"5%"}>
        <HeadingAndCta />
        <MockupImage />
      </Flex>
    </Container>
  );
};
