import { Box } from "@radix-ui/themes";
import styles from "./css/MockupImageV2.module.css";

export const MockupImageV2 = () => {
  return (
    <Box mt={"10%"}>
      <img
        src="/oslo_mockup.png"
        alt="Nomadeer app on iPhone"
        className={styles.fadeOutBottom}
        style={{ width: "620px", maxWidth: "100%" }}
      />
    </Box>
  );
};
