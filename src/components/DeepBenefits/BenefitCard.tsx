import { Box, Card } from "@radix-ui/themes";

export const BenefitCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Box
      width={"300px"}
      m={"-1"}
      overflow={"hidden"}
      style={{ borderRadius: "16px", boxShadow: "var(--shadow-3)" }}
    >
      <img
        src={imageUrl}
        loading={"lazy"}
        alt="benefitImg"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
};
