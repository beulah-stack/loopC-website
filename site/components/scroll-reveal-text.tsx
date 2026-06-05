"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type ScrollRevealWordsProps = {
  text: string;
  className?: string;
  delayStart?: number;
  /** ms between each word */
  staggerMs?: number;
  /**
   * Hero / above-the-fold: reveal on mount without waiting for scroll
   * (still uses the same container-based trigger as other blocks).
   */
  animateOnMount?: boolean;
};

const hidden = { y: "115%", opacity: 0, filter: "blur(8px)" } as const;
const visible = { y: 0, opacity: 1, filter: "blur(0px)" } as const;

/**
 * Word-by-word reveal. Uses one `useInView` on the wrapper — per-word
 * `whileInView` fails when words sit inside overflow clips (0% intersection).
 */
export function ScrollRevealWords({
  text,
  className = "",
  delayStart = 0,
  staggerMs = 42,
  animateOnMount = false,
}: ScrollRevealWordsProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, {
    once: true,
    amount: "some",
    margin: "0px 0px 100px 0px",
  });
  const words = text.trim().split(/\s+/);
  const active = animateOnMount || inView;

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={hidden}
            animate={active ? visible : hidden}
            transition={{
              delay: delayStart + i * (staggerMs / 1000),
              duration: 0.58,
              ease,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
