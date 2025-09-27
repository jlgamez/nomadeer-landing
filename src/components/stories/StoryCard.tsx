import { Box, Card, Flex, Heading, Inset, Text, Badge } from "@radix-ui/themes";
import * as motion from "motion/react-client";

const cardContainerStyle = {
  width: "360px",
  height: "570px",
  flexShrink: 0,
  display: "flex",
  alignItems: "stretch",
};

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  badgeText?: string;
  animationIndex?: number;
};

export const StoryCard = (props: Props) => {
  const { title, description, imageUrl, badgeText, animationIndex = 0 } = props;
  const transitionDuration = 0.6;
  return (
    <motion.div
      style={cardContainerStyle}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{
        once: true,
        margin: "-50px 0px -100px 0px",
      }}
      transition={{
        duration: transitionDuration,
        delay: animationIndex * 0.15, // Staggered delay based on card position
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth effect
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <Card size={"3"} style={{ width: "100%", height: "100%" }}>
        <Inset clip={"padding-box"} side={"top"}>
          <Box position={"relative"}>
            <motion.img
              src={imageUrl}
              alt={"Story image"}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 290,
              }}
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: transitionDuration,
                delay: animationIndex * 0.15 + 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            />
            {badgeText && (
              <motion.div
                style={{ position: "absolute", top: 12, left: 12, zIndex: 1 }}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: transitionDuration,
                  delay: animationIndex * 0.15 + 0.4,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
              >
                <Badge size="3" variant={"solid"}>
                  {badgeText}
                </Badge>
              </motion.div>
            )}
          </Box>
        </Inset>
        <Flex direction={"column"} gap={"3"} mt={"3"}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: transitionDuration,
              delay: animationIndex * 0.15 + 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Heading size={"6"} align={"left"}>
              {title}
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: transitionDuration,
              delay: animationIndex * 0.15 + 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Text as={"p"} size={"3"} color={"gray"}>
              {description}
            </Text>
          </motion.div>
        </Flex>
      </Card>
    </motion.div>
  );
};
