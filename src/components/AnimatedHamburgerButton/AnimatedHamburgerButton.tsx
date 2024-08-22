import { MotionConfig, motion } from "framer-motion";
import { IAnimatedHamburgerButtonProps } from "../../interfaces/interfaces";

const AnimatedHamburgerButton = ({
  active,
  setActive,
}: IAnimatedHamburgerButtonProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        onClick={() => setActive(!active)}
        initial={false}
        animate={active ? "open" : "closed"}
        className="relative md:hidden h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20 hover:dark:bg-black/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-6 bg-gray-600 dark:bg-white "
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-6 bg-gray-600 dark:bg-white "
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-3 bg-gray-600 dark:bg-white "
          style={{
            x: "-90%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedHamburgerButton;

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "56%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
