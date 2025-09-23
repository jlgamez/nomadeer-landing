import { Button, Flex, Heading, Text } from "@radix-ui/themes";

export const HeadingAndCtaV2 = () => {
  return (
    <Flex direction={"column"} gap={"8"} align={"center"}>
      <Heading size={"9"} align={"center"}>
        Experience Immersive History in Oslo
      </Heading>
      <Text size="5" color="gray" align="center" style={{ maxWidth: 600 }}>
        Private, live audio tours—anywhere, anytime.
        <br />
        Experience the city with a personal guide, on your terms.
      </Text>
      <Button size={"4"}>Book a story</Button>
    </Flex>
  );
};
