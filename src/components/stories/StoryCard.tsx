import { Box, Card, Flex, Heading, Inset, Text, Badge } from "@radix-ui/themes";

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
};
export const StoryCard = (props: Props) => {
  const { title, description, imageUrl, badgeText } = props;

  return (
    <Box style={cardContainerStyle}>
      <Card size={"3"} style={{ width: "100%", height: "100%" }}>
        <Inset clip={"padding-box"} side={"top"}>
          <Box position={"relative"}>
            <img
              src={imageUrl}
              alt={"Story image"}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 290,
              }}
            />
            {badgeText && (
              <Box style={{ position: "absolute", top: 12, left: 12, zIndex: 1 }}>
                <Badge size="3" variant={"solid"}>
                  {badgeText}
                </Badge>
              </Box>
            )}
          </Box>
        </Inset>
        <Flex direction={"column"} gap={"3"} mt={"3"}>
          <Heading size={"6"} align={"left"}>
            {title}
          </Heading>
          <Text as={"p"} size={"3"} color={"gray"}>
            {description}
          </Text>
        </Flex>
      </Card>
    </Box>
  );
};
