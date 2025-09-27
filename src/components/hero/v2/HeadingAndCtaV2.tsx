import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import * as motion from "motion/react-client";

export const HeadingAndCtaV2 = () => {
  return (
    <Flex direction={"column"} gap={"8"} align={"center"} p={"10px"}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        style={{ width: "100%" }}
      >
        <Heading size={"9"} align={"center"}>
          Experience Immersive History in Oslo
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{ maxWidth: 600, width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Text size="5" color="gray" align="center">
          Private tours with a Live Narrator and enhanced Immersion Technology.
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.5,
          default: { duration: 0.15, ease: "easeOut" },
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1, ease: "easeOut" },
        }}
        style={{
          filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
        }}
        layout
        layoutRoot
      >
        <Button
          size={"4"}
          style={{
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Book a story
        </Button>
      </motion.div>
    </Flex>
  );
};
