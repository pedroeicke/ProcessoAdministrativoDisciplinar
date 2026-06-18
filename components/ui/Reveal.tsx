"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  /** deslocamento vertical inicial (px) */
  y?: number;
  /** atraso da animação (s) */
  delay?: number;
};

// Reveal on-scroll: opacity 0→1, y 34→0, ease-out-expo, dispara uma vez.
export default function Reveal({ children, y = 34, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
