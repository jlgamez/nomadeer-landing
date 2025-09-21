import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import styles from "@/components/hero/css/HeadingAndCta.module.css";

export const HeadingAndCta = () => {
  return (
    <Flex direction={"column"} gap={"6"} className={styles.headingAndCtaFlex}>
      <Heading size={"9"} className={styles.heading}>
        Stop touring, start time travelling
      </Heading>
      <Text size="5" color="gray" className={styles.subHeading}>
        Private, live audio tours—anywhere, anytime. Experience the city with a personal guide, on
        your terms.
      </Text>
      <Button size={"4"} className={styles.cta}>
        Book a story
      </Button>
    </Flex>
  );
};
