import { Box } from "@radix-ui/themes";
import * as motion from "motion/react-client";
import styles from "./css/MockupImageV2.module.css";

export const MockupImageV2 = () => {
  return (
    <Box mt={"80px"}>
      <motion.img
        src="/oslo_mockup.png"
        alt="app mockup on phone"
        className={styles.fadeOutBottom}
        style={{ width: "430px", maxWidth: "100%" }}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.6,
        }}
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      />
    </Box>
  );
};
