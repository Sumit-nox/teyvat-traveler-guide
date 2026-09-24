import Link from "next/link";
import type { Metadata } from "next";
import CalculationPipeline from "@/components/home/CalculationPipeline";
import F2PvsPremium from "@/components/home/F2PvsPremium";

export const metadata: Metadata = {
  title: "DPS Calculator Engine | Teyvat Traveler Guide",
  description: "Standardized Genshin Impact damage calculator engine, formula pipeline, and F2P vs Premium benchmarks.",
};

export default function CalculatorPage() {
  return (
    <main className="flex-1 bg-slate-950 py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 mb-6">
            <span>⚔️ Formula Matrix</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Calculation Engine Under Development</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            DPS Calculator Engine
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Understand exactly how your character damage is calculated step-by-step through our standardized Genshin Impact combat formula engine.
          </p>
        </div>

        {/* Feature status notice */}
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl glass-panel p-6 border border-amber-500/30 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-2xl mb-3">
            🛠️
          </div>
          <h2 className="text-lg font-bold text-slate-100">Calculator Architecture Phase</h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            The mathematical formula pipeline and benchmark standards are fully defined below. Interactive stat input forms and artifact roll optimization tools will be connected in upcoming updates.
          </p>
        </div>

        {/* 10-Step Formula Calculation Pipeline Section */}
        <div className="mb-16">
          <CalculationPipeline />
        </div>

        {/* F2P vs Premium Benchmark Section */}
        <div className="mb-16">
          <F2PvsPremium />
        </div>

        {/* Return Button */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 transition-colors"
          >
            <span>← Return to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
