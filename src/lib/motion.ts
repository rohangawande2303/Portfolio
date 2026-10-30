import { Transition, Variants } from "motion/react";

/**
 * Global Motion System Tokens
 */
export const easeExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const defaultSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 18,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
};

// Reveal Variants
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeExpo,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeExpo },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const textRevealItem: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easeExpo,
    },
  },
};
