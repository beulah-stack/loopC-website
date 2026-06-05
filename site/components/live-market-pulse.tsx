"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type LivePayload = {
  gold: { usd: number; changePercent24h: number } | null;
  goldNote: string;
  fearGreed: { value: number; label: string; updatedUnix: number } | null;
  fx: { eurPerUsd: number } | null;
  fetchedAt: string;
};

function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n >= 1000 ? 0 : 2,
  }).format(n);
}

function sentimentColor(value: number) {
  if (value >= 75) return "from-emerald-500 to-teal-400";
  if (value >= 55) return "from-teal-500 to-cyan-400";
  if (value >= 45) return "from-amber-400 to-yellow-300";
  if (value >= 25) return "from-orange-500 to-amber-500";
  return "from-rose-500 to-orange-500";
}

export function LiveMarketPulse() {
  const reduce = useReducedMotion();
  const [data, setData] = useState<LivePayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/live-market", { cache: "no-store" });
      if (!res.ok) throw new Error("Bad response");
      const json = (await res.json()) as LivePayload;
      setData(json);
      setError(null);
    } catch {
      setError("Live data is temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => void load(), 0);
    const id = window.setInterval(() => void load(), 45_000);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(id);
    };
  }, [load]);

  const cards = (
    <div className="grid gap-5 md:grid-cols-3">
      <PulseCard
        title="Gold (USD)"
        subtitle="Live proxy via PAXG"
        loading={loading}
        reduceMotion={!!reduce}
      >
        {data?.gold ? (
          <>
            <p className="text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
              {formatUsd(data.gold.usd)}
            </p>
            <p
              className={
                data.gold.changePercent24h >= 0 ? "text-sm font-medium text-emerald-600" : "text-sm font-medium text-rose-600"
              }
            >
              {data.gold.changePercent24h >= 0 ? "+" : ""}
              {data.gold.changePercent24h.toFixed(2)}% / 24h
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">{data.goldNote}</p>
          </>
        ) : (
          !loading && <p className="text-sm text-slate-500">No gold quote right now.</p>
        )}
      </PulseCard>

      <PulseCard
        title="Market mood"
        subtitle="Crypto Fear & Greed (global pulse)"
        loading={loading}
        reduceMotion={!!reduce}
      >
        {data?.fearGreed ? (
          <>
            <div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px] ${sentimentColor(data.fearGreed.value)}`}
            >
              <div className="rounded-2xl bg-white/95 px-4 py-4 backdrop-blur-sm">
                <p className="text-4xl font-extrabold tabular-nums text-slate-900">
                  {data.fearGreed.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-700">{data.fearGreed.label}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Widely used as a sentiment dial for risk appetite—useful context when planning
              campaigns or budgets alongside macro moves.
            </p>
          </>
        ) : (
          !loading && <p className="text-sm text-slate-500">No sentiment index right now.</p>
        )}
      </PulseCard>

      <PulseCard title="USD → EUR" subtitle="FX reference (Frankfurter)" loading={loading} reduceMotion={!!reduce}>
        {data?.fx ? (
          <>
            <p className="text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
              {data.fx.eurPerUsd.toFixed(4)}
            </p>
            <p className="text-sm text-slate-600">Euro per 1 US dollar</p>
            <p className="mt-3 text-xs text-slate-500">
              Helpful for import/export and international campaign pacing when USD and EUR
              exposure matters.
            </p>
          </>
        ) : (
          !loading && <p className="text-sm text-slate-500">No FX quote right now.</p>
        )}
      </PulseCard>
    </div>
  );

  return (
    <section className="relative">
      {error ? (
        <p className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {error}
        </p>
      ) : null}
      <AnimatePresence mode="wait">
        <motion.div
          key={data?.fetchedAt ?? "initial"}
          initial={reduce ? false : { opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {cards}
        </motion.div>
      </AnimatePresence>
      {data?.fetchedAt ? (
        <p className="mt-4 text-center text-xs text-slate-400">
          Last updated {new Date(data.fetchedAt).toLocaleString()}
        </p>
      ) : null}
    </section>
  );
}

function PulseCard({
  title,
  subtitle,
  loading,
  reduceMotion,
  children,
}: {
  title: string;
  subtitle: string;
  loading: boolean;
  reduceMotion: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      layout={!reduceMotion}
      className="glass-panel relative overflow-hidden rounded-2xl p-6"
      whileHover={reduceMotion ? undefined : { y: -3, transition: { type: "spring", stiffness: 420, damping: 28 } }}
    >
      {!reduceMotion ? <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/80 to-transparent shimmer-bar" /> : null}
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      <div className="mt-5">
        {loading ? (
          <div className="space-y-2">
            <div className="h-8 w-2/3 animate-pulse rounded-lg bg-slate-200/80" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200/80" />
          </div>
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
}
