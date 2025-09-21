import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaWalking } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import styles from "@/components/value-proposition/css/ValuePropositionCard.module.css";

type Props = {
  title: string;
  bulletPoints: string[];
  positive: boolean;
};

export const ValuePropositionCard = ({ title, bulletPoints, positive }: Props) => {
  const red = "#e85d54";
  const green = "#76cf86";
  const iconColor = positive ? green : red;

  const titleIconSize = "30px";
  const bulletIconSize = "20px";

  return (
    <Box className={styles.cardBox}>
      <Card size={"3"}>
        <Flex direction={"row"} align={"start"} gap={"2"}>
          {positive ? (
            <IoHeadset color={iconColor} size={titleIconSize} />
          ) : (
            <FaWalking color={iconColor} size={titleIconSize} />
          )}
          <Heading size={"7"} style={{ color: positive ? green : red }}>
            {title}
          </Heading>
        </Flex>
        <Flex direction="column" gap="2" mt="3">
          {bulletPoints.map((point, idx) => (
            <Flex key={idx} direction="row" align="start" gap="2">
              {positive ? (
                <IoMdCheckmark color={iconColor} size={bulletIconSize} />
              ) : (
                <RxCross2 color={iconColor} size={bulletIconSize} />
              )}
              <Text size={"6"} color={"gray"}>
                {point}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Card>
    </Box>
  );
};
