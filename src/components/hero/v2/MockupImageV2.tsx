import { Box } from "@radix-ui/themes";
import styles from "./css/MockupImageV2.module.css";

export const MockupImageV2 = () => {
  return (
    <Box mt={"80px"}>
      <img
        src="/oslo_mockup.png"
        alt="Nomadeer app on iPhone"
        className={styles.fadeOutBottom}
        style={{ width: "430px", maxWidth: "100%" }}
      />
    </Box>
  );
};
