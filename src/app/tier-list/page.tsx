import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardized Tier List | Teyvat Traveler Guide",
  description: "Compare Genshin Impact character combat performance across standardized F2P and Premium scenarios.",
};

export default function TierListPage() {
  return (
    <main className="flex-1 bg-slate-950 py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-6">
            <span>📊 Benchmarking System</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Planned Feature</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Standardized Tier List
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Compare character combat performance evaluated across standardized F2P (4★ weapons & teams) and Premium (5★ signature & support constellations) scenarios.
          </p>
        </div>

        {/* Evaluation Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400 mb-4">
              ⚔️
            </div>
            <h3 className="text-lg font-bold text-slate-100">F2P Standardized Setup</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Tested using R5 craftable/event 4★ weapons, accessible 4★ supports, and 25 standardized substat artifact rolls.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl text-amber-400 mb-4">
              🌟
            </div>
            <h3 className="text-lg font-bold text-slate-100">Premium High Investment</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Tested using R1 signature 5★ weapons, optimal 5★ supports (C0-C2), and 35 substat artifact rolls.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xl text-purple-400 mb-4">
              🎯
            </div>
            <h3 className="text-lg font-bold text-slate-100">Strict Controlled Baseline</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Fixed Level 90 target, 50% defense reduction, 10% all-elemental RES, and strict 20-second rotation cycles.
            </p>
          </div>
        </div>

        {/* Coming Soon Box */}
        <div className="rounded-2xl glass-panel p-8 text-center max-w-3xl mx-auto border border-purple-500/20">
          <h3 className="text-xl font-bold text-slate-100">Tier List Calculation System Coming Soon</h3>
          <p className="mt-2 text-sm text-slate-400">
            Characters will be ranked by role (Main DPS, Off-Field Sub-DPS, Elemental Buffer, Defensive Utility) based on verified simulation outputs.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 transition-colors"
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
