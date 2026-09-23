import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Builder & Rotations | Teyvat Traveler Guide",
  description: "Assemble 4-character team compositions, optimize elemental resonances, and visualize combat rotations.",
};

export default function TeamsPage() {
  return (
    <main className="flex-1 bg-slate-950 py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-6">
            <span>👥 Team Synergy Matrix</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Planned Feature</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Team Builder & Rotations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Assemble 4-character party compositions, map rotation timelines, calculate energy particle funneling, and maximize team dps.
          </p>
        </div>

        {/* Feature Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xl text-purple-400 mb-4">
              🌀
            </div>
            <h3 className="text-lg font-bold text-slate-100">Elemental Resonance</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Automatic calculation of Pyro (25% ATK), Hydro (25% HP), Dendro (EM), and Anemo (CD & Move Speed) resonances.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl text-amber-400 mb-4">
              ⏱️
            </div>
            <h3 className="text-lg font-bold text-slate-100">Rotation Visualizer</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Timeline editor for skill usage, burst triggers, normal attack weaves, and field uptime distribution.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400 mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-slate-100">Energy Funneling</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Energy recharge requirements per character based on Favonius weapons and same-element particle generation.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl text-emerald-400 mb-4">
              🔄
            </div>
            <h3 className="text-lg font-bold text-slate-100">Reaction Coverage</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Analyze forward vs reverse reactions, aura application rates, and hyperbloom / burgeon trigger frequencies.
            </p>
          </div>
        </div>

        {/* Coming Soon Box */}
        <div className="rounded-2xl glass-panel p-8 text-center max-w-3xl mx-auto border border-purple-500/20">
          <h3 className="text-xl font-bold text-slate-100">Interactive Team Builder Coming Soon</h3>
          <p className="mt-2 text-sm text-slate-400">
            Save custom team compositions, share rotation strings, and run full-party rotational damage simulations.
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
