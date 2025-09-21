import { Container, Flex, Heading } from "@radix-ui/themes";
import { ValuePropositionCard } from "@/components/value-proposition/ValuePropositionCard";
import styles from "src/components/value-proposition/css/ValuePropositionSection.module.css";

export const ValuePropositionSection = () => {
  return (
    <Container mt={"8"} width={"100%"} maxHeight={"30%"}>
      <Flex direction={"column"} align={"center"} gap={"9"}>
        <Heading size={"8"} align={"center"}>
          There's a Better Way to Experience History
        </Heading>
        <Flex className={styles.cardsRow}>
          <ValuePropositionCard
            title={"The old way"}
            bulletPoints={[
              "Following a flag in a huge, noisy crowd",
              "Hearing boring dry facts",
              "Struggling to hear over traffic and chatter",
              "No connection to the place",
            ]}
            positive={false}
          />
          <ValuePropositionCard
            title={"The Nomadeer way"}
            bulletPoints={[
              "Your own private group or solo",
              "Immersive live storytelling",
              "A live, interactive story with an expert",
              "Clear audio delivered to your earphones",
            ]}
            positive={true}
          />
        </Flex>
      </Flex>
    </Container>
  );
};
