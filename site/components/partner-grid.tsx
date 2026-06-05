"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";

const tiles = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=360&fit=crop&q=85",
    label: "Team delivery",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=360&fit=crop&q=85",
    label: "Sprint & scope",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=360&fit=crop&q=85",
    label: "Workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=360&fit=crop&q=85",
    label: "Operations",
  },
] as const;

function SpotlightTile({
  src,
  label,
  index,
}: {
  src: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  const move = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  }, []);

  const leave = useCallback(() => {
    setGlow((g) => ({ ...g, active: false }));
  }, []);

  return (
    <FadeIn delay={0.06 * index}>
      <motion.div
        ref={ref}
        onMouseMove={move}
        onMouseLeave={leave}
        whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
        whileTap={{ scale: 0.98 }}
        className="group relative aspect-[5/3] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/80 bg-white shadow-lg shadow-teal-900/10 ring-2 ring-teal-500/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-teal-500/20"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover saturate-[1.08] transition duration-500 group-hover:saturate-[1.2] group-hover:scale-110"
        />
        {/* Colour-first: no grayscale — interactive teal spotlight on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: glow.active
              ? `radial-gradient(circle 55% at ${glow.x}% ${glow.y}%, rgba(45,212,191,0.35), transparent 70%)`
              : undefined,
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent p-3 pt-12">
          <span className="text-xs font-bold uppercase tracking-wide text-teal-200 drop-shadow-sm">
            {label}
          </span>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export function PartnerColorGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {tiles.map((tile, i) => (
        <SpotlightTile key={tile.label} src={tile.src} label={tile.label} index={i} />
      ))}
    </div>
  );
}
