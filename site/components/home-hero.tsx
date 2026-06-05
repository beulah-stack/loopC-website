"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { ScrollRevealWords } from "@/components/scroll-reveal-text";
import { siteConfig } from "@/lib/site-config";

const HERO_VISUAL = "/loopc-hero-art.svg";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 100]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-90" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-teal-400/15 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-400/12 blur-3xl animate-float-soft [animation-delay:-2s]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <motion.div className="order-2 lg:order-1" style={{ y: contentY }}>
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-800 shadow-sm backdrop-blur-md">
              ERP we build · ERP we sell
            </p>
          </FadeIn>
          <h1 className="font-display mt-6 max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.12]">
            <span className="block text-slate-900">
              <ScrollRevealWords
                className="font-display"
                text="ERP software built in-house—"
                staggerMs={36}
                animateOnMount
              />
            </span>
            <span className="mt-1 block overflow-hidden sm:mt-2">
              {reduce ? (
                <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  sold at a fair price.
                </span>
              ) : (
                <motion.span
                  className="inline-block bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 bg-clip-text font-display text-transparent"
                  initial={{ y: "110%", opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  sold at a fair price.
                </motion.span>
              )}
            </span>
          </h1>
          <FadeIn delay={0.08} className="mt-6 max-w-lg space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              {siteConfig.name} develops its own ERP application and sells it to businesses that
              need one honest system for finance, stock, and operations.
            </p>
            <p className="text-base text-slate-600">{siteConfig.erpSalesLine}</p>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/services"
              className="interactive-shine relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:shadow-xl hover:shadow-teal-500/35"
            >
              Explore ERP & products
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal-200/90 bg-white/95 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-md backdrop-blur transition hover:border-teal-400 hover:bg-white hover:shadow-lg"
            >
              Book a sales demo
            </Link>
          </FadeIn>
          <FadeIn delay={0.18} className="mt-4">
            <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              Live market pulse on the blog →
            </Link>
          </FadeIn>
        </motion.div>

        <motion.div
          className="relative order-1 min-h-[260px] sm:min-h-[320px] lg:order-2 lg:min-h-[420px]"
          style={{ y: imgY, scale: imgScale }}
        >
          <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20 ring-2 ring-teal-500/20 ring-offset-2 ring-offset-slate-50 lg:max-w-none">
            <Image
              src={HERO_VISUAL}
              alt="Stylised ERP dashboards and analytics"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-teal-900/15" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <motion.div
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-slate-950/40 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                Product + delivery
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Buy LoopC ERP · add CRM dashboards · rollout with our team
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
