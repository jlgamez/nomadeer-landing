import { Button, Flex, Heading, Text } from "@radix-ui/themes";

export const HeadingAndCtaV2 = () => {
  return (
    <Flex direction={"column"} gap={"8"} align={"center"} p={"10px"}>
      <Heading size={"9"} align={"center"}>
        Experience Immersive History in Oslo
      </Heading>
      <Text size="5" color="gray" align="center" style={{ maxWidth: 600 }}>
        Private tours with a Live Narrator and enhanced Immersion Technology.
      </Text>
      <Button size={"4"}>Book a story</Button>
    </Flex>
  );
};
