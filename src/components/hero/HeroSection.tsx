import { Container, Flex } from "@radix-ui/themes";
import { HeadingAndCta } from "@/components/hero/HeadingAndCta";
import { MockupImage } from "@/components/hero/MockupImage";
import styles from "./css/HeroSection.module.css";

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
