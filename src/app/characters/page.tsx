import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters Directory | Teyvat Traveler Guide",
  description: "Explore Genshin Impact character stats, elemental affinities, weapon compatibility, and talent scaling.",
};

export default function CharactersPage() {
  return (
    <main className="flex-1 bg-slate-950 py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6">
            <span>👤 Characters Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Planned Feature</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Character Directory
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Browse Genshin Impact characters, elemental attributes, weapon masteries, talent scaling ratios, and base stat growth profiles.
          </p>
        </div>

        {/* Feature Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400 mb-4">
              🔥
            </div>
            <h3 className="text-lg font-bold text-slate-100">Elemental Filtering</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Filter by Pyro, Hydro, Anemo, Electro, Dendro, Cryo, or Geo with elemental reaction synergy tags.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl text-amber-400 mb-4">
              ⚔️
            </div>
            <h3 className="text-lg font-bold text-slate-100">Weapon Synergy</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Optimal 5★ signatures, 4★ craftables, and battle pass weapon rankings for each playstyle.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xl text-purple-400 mb-4">
              💎
            </div>
            <h3 className="text-lg font-bold text-slate-100">Artifact Recommendations</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              2pc/4pc set ratings with target substat priorities (ATK%, EM, Crit Rate / Crit DMG).
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl text-emerald-400 mb-4">
              📜
            </div>
            <h3 className="text-lg font-bold text-slate-100">Talent Scaling</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Exact Level 1-13 skill percentages, ICD rules, and energy particle generation mechanics.
            </p>
          </div>
        </div>

        {/* Coming Soon Box */}
        <div className="rounded-2xl glass-panel p-8 text-center max-w-3xl mx-auto border border-cyan-500/20">
          <h3 className="text-xl font-bold text-slate-100">Character Database Integration Next</h3>
          <p className="mt-2 text-sm text-slate-400">
            Character profiles will soon be integrated with our standardized formula engine for real-time stat calculations.
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
