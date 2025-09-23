import { Box } from "@radix-ui/themes";
import styles from "./css/MockupImageV2.module.css";

export const MockupImageV2 = () => {
  return (
    <Box pt={"1" + "0%"}>
      <img
        src="/raw_iphone.png"
        alt="Nomadeer app on iPhone"
        className={styles.fadeOutBottom}
        style={{ width: "420px", maxWidth: "100%" }}
      />
    </Box>
  );
};
