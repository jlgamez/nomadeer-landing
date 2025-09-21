import { Box } from "@radix-ui/themes";
import styles from "@/components/hero/css/HeroSection.module.css";

export const MockupImage = () => {
  return (
    <Box className={styles.imageBox}>
      <img
        src="/iphone_mockup.png"
        alt="Nomadeer app on iPhone"
        style={{ width: "320px", maxWidth: "100%", height: "auto", borderRadius: "16px" }}
      />
    </Box>
  );
};
