import { NextResponse } from "next/server";

/** Cached briefly; client also polls for “live” feel */
export const revalidate = 45;

type FearGreedEntry = {
  value: string;
  value_classification: string;
  timestamp: string;
};

async function fetchGoldUsd(): Promise<{
  usd: number;
  changePercent24h: number;
} | null> {
  try {
    const res = await fetch(
      "https://api.binance.com/api/v3/ticker/24hr?symbol=PAXGUSDT",
      { next: { revalidate: 45 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      lastPrice?: string;
      priceChangePercent?: string;
    };
    const usd = data.lastPrice != null ? Number.parseFloat(data.lastPrice) : NaN;
    const changePercent24h =
      data.priceChangePercent != null ? Number.parseFloat(data.priceChangePercent) : NaN;
    if (!Number.isFinite(usd)) return null;
    return {
      usd,
      changePercent24h: Number.isFinite(changePercent24h) ? changePercent24h : 0,
    };
  } catch {
    return null;
  }
}

async function fetchFearGreed(): Promise<{
  value: number;
  label: string;
  updatedUnix: number;
} | null> {
  try {
    const res = await fetch("https://api.alternative.me/fng/?limit=1", {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data?: FearGreedEntry[] };
    const row = json.data?.[0];
    if (!row) return null;
    const value = Number.parseInt(row.value, 10);
    if (!Number.isFinite(value)) return null;
    return {
      value,
      label: row.value_classification,
      updatedUnix: Number.parseInt(row.timestamp, 10),
    };
  } catch {
    return null;
  }
}

async function fetchUsdEur(): Promise<{ eurPerUsd: number } | null> {
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=EUR", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { rates?: { EUR?: number } };
    const eur = json.rates?.EUR;
    if (eur == null || !Number.isFinite(eur)) return null;
    return { eurPerUsd: eur };
  } catch {
    return null;
  }
}

export async function GET() {
  const [gold, fearGreed, fx] = await Promise.all([
    fetchGoldUsd(),
    fetchFearGreed(),
    fetchUsdEur(),
  ]);

  return NextResponse.json({
    gold,
    goldNote:
      "Spot is approximated from PAXG/USDT (tokenized gold). Use a dedicated bullion feed if you need official LBMA pricing.",
    fearGreed,
    fx,
    fetchedAt: new Date().toISOString(),
  });
}
