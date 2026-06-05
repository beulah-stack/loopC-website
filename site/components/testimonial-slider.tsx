"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/testimonials";

type Props = {
  items: Testimonial[];
};

export function TestimonialSlider({ items }: Props) {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps" },
    [Autoplay({ delay: 7000, stopOnInteraction: true, stopOnMouseEnter: true })],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setTimeout(() => onSelect(), 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      window.clearTimeout(id);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className="relative px-1">
      <div className="overflow-hidden rounded-3xl pb-1" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((t, index) => (
            <div
              key={t.id}
              className="min-w-0 shrink-0 grow-0 pl-2 pr-2"
              style={{ flex: "0 0 100%" }}
            >
              <motion.article
                initial={false}
                animate={{
                  opacity: selected === index ? 1 : 0.78,
                  scale: selected === index ? 1 : 0.985,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel mx-auto flex min-h-[260px] max-w-3xl flex-col gap-6 rounded-3xl p-8 shadow-xl sm:min-h-[220px] sm:flex-row sm:p-10"
              >
                <div className="relative mx-auto h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-teal-500/25 sm:mx-0 sm:h-24 sm:w-24">
                  <Image src={t.imageSrc} alt="" fill sizes="96px" className="object-cover saturate-110" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center text-center sm:text-left">
                  <blockquote className="text-base font-medium leading-relaxed text-slate-800 sm:text-lg">
                    <span className="font-display text-2xl leading-none text-teal-600/90">&ldquo;</span>
                    {t.quote}
                    <span className="font-display text-2xl leading-none text-teal-600/90">&rdquo;</span>
                  </blockquote>
                  <footer className="mt-6 border-t border-slate-200/80 pt-5">
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-600">
                      {t.role} · {t.company}
                    </p>
                  </footer>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-8 bg-teal-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-800"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-800"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
