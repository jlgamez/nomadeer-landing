"use client";
import React from "react";
import { Container, Flex, Text, Link } from "@radix-ui/themes";
import { useLifecycles } from "react-use";

// Simple footer matching dark theme & amber accent. Uses only Radix Theme components & props.
export const Footer = () => {
  let year;
  useLifecycles(() => {
    year = new Date().getFullYear();
  });
  return (
    <footer>
      <Container width="100%" px="5" py="6" size="4">
        <Flex direction="column" align="center" gap="2">
          <Flex align="center" gap="3" wrap="wrap" justify="center">
            <Text size="2" color="gray">
              © {year} Nomadeer. All rights reserved.
            </Text>
            <Text size="2" color="gray">
              •
            </Text>
            <Link href="/privacy" size="2" color="amber" underline="hover">
              Privacy Notice
            </Link>
          </Flex>
          <Text size="1" color="gray">
            Live, story-driven audio experiences anywhere.
          </Text>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
