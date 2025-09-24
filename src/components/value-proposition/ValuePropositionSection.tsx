import { Container, Flex, Heading } from "@radix-ui/themes";
import { ValuePropositionCard } from "@/components/value-proposition/ValuePropositionCard";
import styles from "src/components/value-proposition/css/ValuePropositionSection.module.css";
import valuePropositionData from "@/components/value-proposition/data";

export const ValuePropositionSection = () => {
  return (
    <Container width={"100%"} maxHeight={"30%"} p={"10px"}>
      <Flex direction={"column"} align={"center"} gap={"9"}>
        <Heading size={"9"} align={"center"}>
          There's a Better Way to Experience History
        </Heading>
        <Flex className={styles.cardsRow}>
          {valuePropositionData.map((data, index) => (
            <ValuePropositionCard
              key={index}
              title={data.title}
              bulletPoints={data.bulletPoints}
              positive={data.isPositive}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
