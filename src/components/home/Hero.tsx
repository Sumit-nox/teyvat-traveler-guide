import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-slate-950">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-cyan-500/10 to-purple-500/15 blur-[120px] rounded-full opacity-70" />
      <div className="pointer-events-none absolute top-12 left-10 w-72 h-72 bg-amber-500/10 blur-[90px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />

      {/* Subtle grid pattern background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs sm:text-sm font-medium text-amber-300 shadow-lg shadow-amber-500/5 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Standardized Theorycrafting & Damage Engine</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
            Master Your Journey{" "}
            <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
              Through Teyvat
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            Build smarter teams, understand game mechanics, and calculate your character&apos;s real damage.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
            >
              <span>DPS Calculator</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/characters"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-500/40 backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
            >
              <span>Explore Characters</span>
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </Link>
          </div>

          {/* Quick Metrics Bar / Companion Preview Card */}
          <div className="mt-16 w-full max-w-4xl rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl relative border border-slate-800/80">
            <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left border-b border-slate-800/80 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg">
                  🎯
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Standardized Formula Engine</h3>
                  <p className="text-xs text-slate-400">Includes Elemental ICD, Defense Multiplier & Reaction Scaling</p>
                </div>
              </div>

              <Link
                href="/calculator"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-semibold text-amber-300 transition-colors"
              >
                <span>Launch Calculator</span>
                <span>→</span>
              </Link>
            </div>

            {/* Visual metric grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium">Elemental Reactions</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">Vaporize / Melt</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Gauge Theory & ICD</div>
              </div>
              
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium">Rotation Length</div>
                <div className="text-lg font-bold text-amber-400 mt-1">20s Cycles</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Energy & Cooldowns</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium">Target Defense</div>
                <div className="text-lg font-bold text-purple-400 mt-1">Lvl 90 (50% DR)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">10% All-RES Baseline</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium">Comparison Mode</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">F2P vs Whale</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Realistic Benchmarking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
