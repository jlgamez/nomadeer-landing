import { Badge } from "@radix-ui/themes";
import * as motion from "motion/react-client";

export const HeroTopBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
      <Badge size="2" variant="solid" color="gray" mb="4">
        Stories That Move You
      </Badge>
    </motion.div>
  );
};
