"use client";

import { Button, Card, Container, Flex, Heading, Text, TextField } from "@radix-ui/themes";

export const WaitlistSection = () => {
  return (
    <Container id="waitlist" p="8" align="center" width="100%">
      <Card
        size="4"
        style={{
          padding: "30px",
          boxShadow:
            "10px 10px 30px rgba(255, 193, 7, 0.1), 0 0 40px rgba(255, 193, 7, 0.2), 0 0 60px rgba(255, 193, 7, 0.1)",
          border: "1px solid rgba(255, 193, 7, 0.2)",
        }}
        variant={"classic"}
      >
        <Flex direction="column" align="center" gap="4" style={{ width: "100%" }}>
          <Heading size="7" align="center">
            Join the waitlist
          </Heading>
          <Text size="4" color="gray" align="center" style={{ maxWidth: 700 }}>
            We’re validating the concept now. Share your email to get early access and help us pick
            cities and stories. No spam, unsubscribe anytime.
          </Text>
          <Flex gap="3" align="center" wrap="wrap" justify="center" style={{ width: "40%" }}>
            <TextField.Root
              placeholder="you@example.com"
              size="3"
              style={{ minWidth: 260, flex: 1 }}
            />
            <Button size="3">Notify me</Button>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
};
