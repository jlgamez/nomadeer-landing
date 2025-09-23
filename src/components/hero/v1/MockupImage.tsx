import { Box } from "@radix-ui/themes";
import styles from "@/components/hero/v1/css/ImageBox.module.css";

export const MockupImage = () => {
  return (
    <Box className={styles.imageBox}>
      <img
        src="/iphone_3.png"
        alt="Nomadeer app on iPhone"
        style={{ width: "220px", maxWidth: "100%", height: "auto", borderRadius: "16px" }}
      />
    </Box>
  );
};
