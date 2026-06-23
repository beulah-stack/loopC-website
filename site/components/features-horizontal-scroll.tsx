"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FeatureCategory } from "@/lib/features";

type FeaturesHorizontalScrollProps = {
  categories: FeatureCategory[];
};

export function FeaturesHorizontalScroll({ categories }: FeaturesHorizontalScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const staticTrackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [useStaticScroll, setUseStaticScroll] = useState(false);

  const total = categories.length;
  const progressFromIndex = total > 1 ? activeIndex / (total - 1) : 0;

  const syncProgress = useCallback((progress: number) => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${progress})`;
    }
    const index = Math.min(total - 1, Math.round(progress * Math.max(total - 1, 0)));
    setActiveIndex(index);
  }, [total]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrow = typeof window !== "undefined" && window.innerWidth < 768;

    if (prefersReduced || isNarrow) {
      setUseStaticScroll(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            scrollTriggerRef.current = self;
            if (progress) {
              progress.style.transform = `scaleX(${self.progress})`;
            }
            const index = Math.min(
              total - 1,
              Math.round(self.progress * Math.max(total - 1, 0)),
            );
            setActiveIndex(index);
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger ?? null;

      const panels = gsap.utils.toArray<HTMLElement>("[data-feature-panel]", track);
      panels.forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0.88 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 70%",
              end: "right 30%",
              scrub: true,
            },
          },
        );
      });
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      scrollTriggerRef.current = null;
      ctx.revert();
    };
  }, [total]);

  const goToIndex = useCallback(
    (index: number) => {
      const clamped = Math.min(total - 1, Math.max(0, index));

      if (useStaticScroll) {
        const container = staticTrackRef.current;
        const panel = container?.querySelectorAll("[data-feature-panel]")[clamped] as
          | HTMLElement
          | undefined;
        panel?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        syncProgress(clamped / Math.max(total - 1, 1));
        return;
      }

      const st = scrollTriggerRef.current;
      if (!st) return;

      const progress = clamped / Math.max(total - 1, 1);
      const scrollY = st.start + (st.end - st.start) * progress;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    },
    [syncProgress, total, useStaticScroll],
  );

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  if (useStaticScroll) {
    return (
      <section className="relative bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ModuleNavHeader
            activeIndex={activeIndex}
            total={total}
            progressRef={progressRef}
            onPrev={goPrev}
            onNext={goNext}
            progressOverride={progressFromIndex}
          />
        </div>
        <div
          ref={staticTrackRef}
          className="mx-auto mt-8 flex max-w-7xl snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:px-6 [scrollbar-width:thin]"
          onScroll={(e) => {
            const el = e.currentTarget;
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (maxScroll <= 0) return;
            syncProgress(el.scrollLeft / maxScroll);
          }}
        >
          {categories.map((category, i) => (
            <FeaturePanel key={category.slug} category={category} index={i} className="snap-center" />
          ))}
        </div>
        <ModuleNavFooter activeIndex={activeIndex} total={total} />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-white"
      aria-label="ERP feature modules"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_10%_0%,rgba(204,251,241,0.45),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_95%_100%,rgba(237,233,254,0.35),transparent_50%)]" />

      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-rows-[auto_minmax(0,1fr)_auto] px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="relative z-30 shrink-0 bg-white/95 pb-4 backdrop-blur-sm">
          <ModuleNavHeader
            activeIndex={activeIndex}
            total={total}
            progressRef={progressRef}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <div className="relative z-0 min-h-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center overflow-hidden py-2">
            <div
              ref={trackRef}
              className="flex h-full max-h-full items-center gap-5 pr-[8vw] will-change-transform sm:gap-6"
            >
              {categories.map((category, i) => (
                <FeaturePanel
                  key={category.slug}
                  category={category}
                  index={i}
                  data-feature-panel=""
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-30 shrink-0 bg-white/95 backdrop-blur-sm">
          <ModuleNavFooter activeIndex={activeIndex} total={total} />
        </div>
      </div>
    </section>
  );
}

function ModuleNavHeader({
  activeIndex,
  total,
  progressRef,
  onPrev,
  onNext,
  progressOverride,
}: {
  activeIndex: number;
  total: number;
  progressRef: React.RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
  progressOverride?: number;
}) {
  const atStart = activeIndex <= 0;
  const atEnd = activeIndex >= total - 1;

  useEffect(() => {
    if (progressOverride === undefined || !progressRef.current) return;
    progressRef.current.style.transform = `scaleX(${progressOverride})`;
  }, [progressOverride, progressRef]);

  return (
    <div className="shrink-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          Explore every module
        </h2>

        <div className="flex items-center gap-2 sm:gap-3">
          <ModuleArrow direction="prev" onClick={onPrev} disabled={atStart} />
          <p className="min-w-[4.5rem] text-center text-sm font-semibold text-slate-500 tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <ModuleArrow direction="next" onClick={onNext} disabled={atEnd} />
        </div>
      </div>

      <div className="mt-4 h-px w-full overflow-hidden bg-slate-200" aria-hidden>
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-400"
        />
      </div>
    </div>
  );
}

function ModuleNavFooter({ activeIndex, total }: { activeIndex: number; total: number }) {
  return (
    <p className="pt-2 pb-6 text-center text-xs tracking-[0.2em] text-slate-500 uppercase sm:pb-8">
      Scroll to explore · {String(activeIndex + 1).padStart(2, "0")} /{" "}
      {String(total).padStart(2, "0")}
    </p>
  );
}

function ModuleArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const label = direction === "prev" ? "Previous module" : "Next module";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-700 shadow-sm transition hover:border-teal-400 hover:bg-teal-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300 disabled:shadow-none disabled:hover:bg-white"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

function FeaturePanel({
  category,
  index,
  className = "",
  ...rest
}: {
  category: FeatureCategory;
  index: number;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <article
      id={category.slug}
      className={`feature-panel relative w-[min(82vw,340px)] max-h-full shrink-0 scroll-mt-28 sm:w-[380px] ${className}`}
      {...rest}
    >
      <div className="glass-panel group relative flex max-h-[min(58vh,520px)] flex-col overflow-hidden rounded-2xl border border-teal-100/80 bg-gradient-to-br from-white to-teal-50/25 p-6 shadow-md transition duration-500 hover:border-teal-200/90 hover:shadow-xl sm:p-7">
        <span className="inline-block h-1.5 w-12 shrink-0 rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-400" />

        <div className="mt-5 flex shrink-0 items-center justify-between gap-3">
          <p className="font-display text-3xl font-bold leading-none text-teal-100">
            {String(index + 1).padStart(2, "0")}
          </p>
          <span className="rounded-full border border-teal-200/80 bg-white/80 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-teal-800 uppercase">
            Module
          </span>
        </div>

        <h2 className="font-display mt-4 shrink-0 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {category.title}
        </h2>
        <p className="mt-2 shrink-0 text-sm leading-relaxed text-slate-600">{category.description}</p>

        <ul className="mt-5 min-h-0 flex-1 space-y-2 overflow-y-auto border-t border-slate-200/80 pt-4 [scrollbar-width:thin]">
          {category.features.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-white/70 px-3 py-2.5 text-sm text-slate-700"
            >
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100 text-[9px] font-bold text-teal-700"
                aria-hidden
              >
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
