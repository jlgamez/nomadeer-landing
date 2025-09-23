import { Container, Flex } from "@radix-ui/themes";
import { HeadingAndCta } from "@/components/hero/v1/HeadingAndCta";
import { MockupImage } from "@/components/hero/v1/MockupImage";
import styles from "src/components/hero/v1/css/HeroSection.module.css";

export const HeroSection = () => {
  return (
    <Container pt={"130px"} width={"100%"} align={"center"}>
      <Flex direction={"row"} align={"center"} p={"5%"} className={styles.heroFlex}>
        <HeadingAndCta />
        <MockupImage />
      </Flex>
    </Container>
  );
};
