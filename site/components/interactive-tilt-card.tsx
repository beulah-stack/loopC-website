"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type InteractiveTiltCardProps = {
  children: ReactNode;
  className?: string;
};

/** Subtle 3D tilt following pointer — disabled when reduced motion is on. */
export function InteractiveTiltCard({ children, className = "" }: InteractiveTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 320, damping: 28, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], reduce ? [0, 0] : [7, -7]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], reduce ? [0, 0] : [-7, 7]),
    spring,
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className={`${className}`} style={{ perspective: "1100px" }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
