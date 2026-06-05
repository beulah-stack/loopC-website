"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Subtle dual-ring cursor for fine pointers only (desktop).
 * Disabled when user prefers reduced motion.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const innerX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const innerY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });
  const outerX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const outerY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    if (reduceMotion || !enabled) return;

    const root = document.documentElement;
    root.dataset.cursorPremium = "true";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!el?.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    const down = () => setPressing(true);
    const up = () => setPressing(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      delete root.dataset.cursorPremium;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [reduceMotion, enabled, x, y]);

  if (reduceMotion || !enabled) return null;

  const ringHover = hovering || pressing;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
        style={{ x: outerX, y: outerY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.span
            className="block rounded-full border border-teal-400/50 bg-teal-500/10 shadow-[0_0_28px_rgba(20,184,166,0.2)] backdrop-blur-[2px]"
            animate={{
              width: ringHover ? 52 : 38,
              height: ringHover ? 52 : 38,
              opacity: ringHover ? 0.95 : 0.55,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 26 }}
          />
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10001]"
        style={{ x: innerX, y: innerY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.span
            className="block h-2 w-2 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-500/50"
            animate={{ scale: pressing ? 0.75 : hovering ? 0.9 : 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          />
        </div>
      </motion.div>
    </>
  );
}
