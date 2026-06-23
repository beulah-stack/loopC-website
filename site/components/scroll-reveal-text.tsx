"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type ScrollRevealWordsProps = {
  text: string;
  className?: string;
  delayStart?: number;
  /** ms between each word */
  staggerMs?: number;
  /** Hero: animate on mount (no scroll observer) */
  animateOnMount?: boolean;
};

const hidden = { y: "115%", opacity: 0, filter: "blur(8px)" } as const;
const visible = { y: 0, opacity: 1, filter: "blur(0px)" } as const;

function WordSpans({
  words,
  className,
  delayStart,
  staggerMs,
  animate,
}: {
  words: string[];
  className: string;
  delayStart: number;
  staggerMs: number;
  animate: boolean | "mount";
}) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={hidden}
            {...(animate === "mount"
              ? { animate: visible }
              : { animate: animate ? visible : hidden })}
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

export function ScrollRevealWords({
  text,
  className = "",
  delayStart = 0,
  staggerMs = 42,
  animateOnMount = false,
}: ScrollRevealWordsProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    if (reduce || animateOnMount) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 100px 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnMount, reduce]);

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  if (animateOnMount) {
    return (
      <WordSpans
        words={words}
        className={className}
        delayStart={delayStart}
        staggerMs={staggerMs}
        animate="mount"
      />
    );
  }

  return (
    <span ref={containerRef}>
      <WordSpans
        words={words}
        className={className}
        delayStart={delayStart}
        staggerMs={staggerMs}
        animate={inView}
      />
    </span>
  );
}
