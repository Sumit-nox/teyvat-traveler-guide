export default function F2PvsPremium() {
  return (
    <section id="tier-list" className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 mb-4">
            <span>⚖️ Standardized Benchmarking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            F2P vs Premium Combat Scenarios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Compare expected rotational performance across realistic investment levels under strictly controlled conditions.
          </p>
        </div>

        {/* Example Data Disclaimer Notice */}
        <div className="mb-10 max-w-4xl mx-auto rounded-xl bg-slate-900/80 border border-amber-500/30 p-3.5 sm:p-4 flex items-center justify-center gap-3 text-center text-xs sm:text-sm text-amber-200/90 shadow-md">
          <span className="text-lg">💡</span>
          <span>
            <strong className="font-semibold text-amber-300">Demo Simulation Preview:</strong> The values below represent sample calculations from our upcoming formula engine.
          </span>
        </div>

        {/* Controlled Setup Card */}
        <div className="mb-12 max-w-5xl mx-auto rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                Controlled Setup Baseline
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Standardized parameters applied to ensure fair, reproducible calculations
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">Target: Lvl 90 Enemy</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">DEF: 50% DR</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">RES: 10% All-Elemental</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">Rotation: 20s Cycle</span>
            </div>
          </div>

          {/* Grid comparison: F2P vs Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* F2P Scenario Card */}
            <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    F2P Weapon + F2P Team
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Baseline Investment</span>
                </div>

                <div className="space-y-3 my-4">
                  <div className="flex justify-between text-sm py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Weapon</span>
                    <span className="font-medium text-slate-200">4★ R5 Craftable / Event</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Team Supports</span>
                    <span className="font-medium text-slate-200">4★ Supports (C0-C6)</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Artifact Quality</span>
                    <span className="font-medium text-slate-200">Standard 25 Substat Rolls</span>
                  </div>
                  <div className="flex justify-between text-sm py-1">
                    <span className="text-slate-400">Crit Ratio</span>
                    <span className="font-mono text-cyan-300">55% / 120%</span>
                  </div>
                </div>
              </div>

              {/* Simulated Output */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Simulated Rotational DPS</span>
                  <span className="text-2xl font-extrabold text-cyan-400 font-mono">38,500 <span className="text-xs font-normal text-slate-400">dps</span></span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full" style={{ width: "52%" }} />
                </div>
                <p className="text-[11px] text-slate-500 mt-2 text-right">Example Benchmark Calculation</p>
              </div>
            </div>

            {/* Premium Scenario Card */}
            <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Premium Weapon + Premium Team
                  </span>
                  <span className="text-xs text-slate-400 font-mono">High Investment</span>
                </div>

                <div className="space-y-3 my-4">
                  <div className="flex justify-between text-sm py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Weapon</span>
                    <span className="font-medium text-slate-200">5★ R1 Signature</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Team Supports</span>
                    <span className="font-medium text-slate-200">5★ Supports (C0 - C2)</span>
                  </div>
                  <div className="flex justify-between text-sm py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Artifact Quality</span>
                    <span className="font-medium text-slate-200">Optimal 35 Substat Rolls</span>
                  </div>
                  <div className="flex justify-between text-sm py-1">
                    <span className="text-slate-400">Crit Ratio</span>
                    <span className="font-mono text-amber-300">75% / 190%</span>
                  </div>
                </div>
              </div>

              {/* Simulated Output */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Simulated Rotational DPS</span>
                  <span className="text-2xl font-extrabold text-amber-400 font-mono">74,200 <span className="text-xs font-normal text-slate-400">dps</span></span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 rounded-full" style={{ width: "100%" }} />
                </div>
                <p className="text-[11px] text-slate-500 mt-2 text-right">Example Benchmark Calculation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
