import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  exit: { opacity: 0, y: 20 },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const shutter: Variants = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { scaleY: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

export const textReveal: Variants = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};
