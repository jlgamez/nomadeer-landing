import { Container, Flex, Heading, Text, Box } from "@radix-ui/themes";
import React from "react";
import { BenefitCard } from "@/components/DeepBenefits/BenefitCard";

type benefitData = {
  title: string;
  description: string;
  imageUrl: string;
};

export type DeepBenefitSectionProps = {
  benefits: benefitData[];
  reverse?: boolean;
};

export const DeepBenefitSection: React.FC<DeepBenefitSectionProps> = ({ benefits }) => {
  return (
    <Box
      style={{
        background: "var(--color-panel-solid, #23262f)",
        borderRadius: 24,
        overflow: "visible",
        marginBottom: 32,
      }}
    >
      {benefits.map((benefit, index) => {
        const shouldReverse = index % 2 === 1;

        return (
          <Container
            key={index}
            size="3"
            px={{ initial: "4", md: "6" }}
            py={{ initial: "6", md: "8" }}
          >
            <Flex
              align="center"
              gap={{ initial: "6", md: "8" }}
              direction={{ initial: "column", md: shouldReverse ? "row-reverse" : "row" }}
            >
              <Flex direction="column" gap="4" flexGrow="1" style={{ minWidth: 0 }}>
                <Heading size={{ initial: "7", md: "8" }} align={{ initial: "center", md: "left" }}>
                  {benefit.title}
                </Heading>
                <Text
                  as="p"
                  size={{ initial: "4", md: "5" }}
                  color="gray"
                  align={{ initial: "center", md: "left" }}
                >
                  {benefit.description}
                </Text>
              </Flex>
              <BenefitCard imageUrl={benefit.imageUrl} />
            </Flex>
          </Container>
        );
      })}
    </Box>
  );
};
