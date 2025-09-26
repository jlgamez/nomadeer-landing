"use client";

import { Container, Flex, Heading, Link, Button } from "@radix-ui/themes";
import React from "react";
import { useMedia } from "react-use";

/**
 * Header
 * - Uses only Radix Theme components
 * - Sticky positioning (stays at top on scroll)
 * - Simple, clean, dark themed with amber accent (matching Theme in layout)
 * - Emphasizes single primary CTA (Join Waitlist)
 */
export const Header: React.FC = () => {
  // use react-use for responsive breakpoint detection
  const isMobile = useMedia("(max-width: 600px)", false);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(5px)",
      }}
    >
      <Container width="100%" pt="4" pb="3" px="5" size="4">
        <Flex align="center" justify="between" wrap="wrap" gap="5">
          {/* Brand */}
          <Heading size="5" style={{ letterSpacing: "0.5px" }}>
            Nomadeer
          </Heading>
          {/* Navigation (hidden on mobile) */}
          {!isMobile && (
            <Flex align="center" gap="6" wrap="wrap" style={{ flexGrow: 1 }} justify="center">
              <Link href="#stories" size="2" color="amber" underline="hover">
                Stories
              </Link>
              <Link href="#how-it-works" size="2" color="amber" underline="hover">
                How it works
              </Link>
            </Flex>
          )}
          {/* CTA always at end */}
          <Button size="2" variant="solid" asChild>
            <Link href="#waitlist" underline="none">
              Join Waitlist →
            </Link>
          </Button>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
