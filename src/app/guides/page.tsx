import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Guides & Theorycrafting | Teyvat Traveler Guide",
  description: "Learn Genshin Impact combat mechanics: elemental reactions, energy particle generation, ICD rules, and gauge theory.",
};

export default function GuidesPage() {
  return (
    <main className="flex-1 bg-slate-950 py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-6">
            <span>📖 Theorycrafting Knowledge Base</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Planned Feature</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Game Mechanics & Guides
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Master the core combat mechanics of Teyvat: elemental gauge theory, internal cooldowns (ICD), energy particle generation, and defense scaling.
          </p>
        </div>

        {/* Guides Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400 mb-4">
              🧪
            </div>
            <h3 className="text-lg font-bold text-slate-100">Elemental Gauge Theory</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Understand 1U, 2U, and 4U elemental application, decay rates, tax deductions, and aura permanence.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl text-amber-400 mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-slate-100">ICD (Internal Cooldown)</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Learn standard 3-hit / 2.5-second elemental application rules, special ICDs, and non-ICD abilities.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xl text-purple-400 mb-4">
              🔋
            </div>
            <h3 className="text-lg font-bold text-slate-100">Energy & Particles</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Particle vs Orb energy values, on-field vs off-field multipliers, and weapon procs (Favonius / Sacrificial).
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl text-emerald-400 mb-4">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-slate-100">DEF & RES Shred Formulas</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              How enemy defense reduction, Viridescent Venerer RES shred, and resistance thresholds below 0% work mathematically.
            </p>
          </div>
        </div>

        {/* Coming Soon Box */}
        <div className="rounded-2xl glass-panel p-8 text-center max-w-3xl mx-auto border border-emerald-500/20">
          <h3 className="text-xl font-bold text-slate-100">Interactive Mechanics Library Coming Soon</h3>
          <p className="mt-2 text-sm text-slate-400">
            In-depth visual articles, formula spreadsheets, and interactive reaction simulators will be published here.
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
