import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { StoryCard } from "@/components/stories/StoryCard";
import storiesData from "@/components/data/storiesData";
import styles from "src/components/stories/css/StoriesSection.module.css";

export const StoriesSection = () => {
  return (
    <Container id="stories" pt={"9"}>
      <Flex direction={"column"} align={"center"} gap={"9"}>
        <Heading size={"9"} align={"center"}>
          Live the Legend: Book Your Story
        </Heading>
      </Flex>
      <Box p={"5%"}>
        <Flex className={styles.cardsRow}>
          {storiesData.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              description={story.description}
              imageUrl={story.imageUrl}
              badgeText={story.badgeText}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};
