import { Box, Button, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import howItWorksSteps from "@/components/how-it-works/data";

export const HowItWorks = () => {
  return (
    <Container pb="7" width="100%" align="center">
      <Flex direction="column" align="center" gap="7" width={"100%"}>
        <Flex direction="column" align="center" gap="3" maxWidth={"100%"}>
          <Heading size="9" align="center">
            How it works
          </Heading>
          <Text size="4" color="gray" align="center">
            Live, private audio-guided tours in four simple steps.
          </Text>
        </Flex>

        <Box style={{ width: "100%" }} p={"3%"}>
          <Flex wrap="wrap" direction={"row"} gap="6">
            {howItWorksSteps.map((step, idx) => (
              <Card key={idx} style={{ flex: "1 1 0", minWidth: "250px" }}>
                <Flex align="center" direction={"column"} gap="3" p={"3"}>
                  {step.icon}
                  <Heading size="5">{step.title}</Heading>
                  <Text size="3" color="gray" align={"center"} style={{ maxWidth: "70%" }}>
                    {step.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Box>

        <Button size="4">Book a story</Button>
      </Flex>
    </Container>
  );
};
