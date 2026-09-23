interface PipelineStep {
  step: number;
  title: string;
  subtext: string;
  formulaNote: string;
  icon: string;
  color: string;
  isFinal?: boolean;
}

export default function CalculationPipeline() {
  const steps: PipelineStep[] = [
    {
      step: 1,
      title: "Character Stats",
      subtext: "Base ATK, Base HP, Base DEF",
      formulaNote: "Level & Ascension scaling",
      icon: "👤",
      color: "border-slate-700 text-slate-200",
    },
    {
      step: 2,
      title: "Weapon",
      subtext: "Base Weapon ATK & Substat",
      formulaNote: "Passive skill modifiers",
      icon: "🗡️",
      color: "border-slate-700 text-slate-200",
    },
    {
      step: 3,
      title: "Artifacts",
      subtext: "Main Stat + Substat Rolls",
      formulaNote: "2pc & 4pc Set Bonuses",
      icon: "💎",
      color: "border-slate-700 text-slate-200",
    },
    {
      step: 4,
      title: "Talent Scaling",
      subtext: "Skill % / Burst % Multipliers",
      formulaNote: "Talent Lvl 1-13 Scaling",
      icon: "📜",
      color: "border-cyan-500/40 text-cyan-300",
    },
    {
      step: 5,
      title: "Bonuses",
      subtext: "Elemental & Skill DMG%",
      formulaNote: "Flat DMG + DMG% Buffs",
      icon: "✨",
      color: "border-cyan-500/40 text-cyan-300",
    },
    {
      step: 6,
      title: "Crit",
      subtext: "Crit Rate vs Crit DMG Factor",
      formulaNote: "1 + (Crit Rate × Crit DMG)",
      icon: "⚡",
      color: "border-purple-500/40 text-purple-300",
    },
    {
      step: 7,
      title: "Defense",
      subtext: "Target Lvl & DEF Reductions",
      formulaNote: "Enemy Level DR Multiplier",
      icon: "🛡️",
      color: "border-purple-500/40 text-purple-300",
    },
    {
      step: 8,
      title: "Resistance",
      subtext: "Enemy Elemental RES %",
      formulaNote: "RES Shred (VV / Deepwood)",
      icon: "🌀",
      color: "border-emerald-500/40 text-emerald-300",
    },
    {
      step: 9,
      title: "Reaction",
      subtext: "Melt, Vaporize, Aggravate, etc.",
      formulaNote: "EM Scaling & Reaction Multipliers",
      icon: "🔥",
      color: "border-amber-500/40 text-amber-300",
    },
    {
      step: 10,
      title: "Final Damage",
      subtext: "Actual Damage Dealt to Target",
      formulaNote: "Net Damage Output per Hit / Cycle",
      icon: "💥",
      color: "border-amber-500 bg-amber-500/10 text-amber-400 glow-amber",
      isFinal: true,
    },
  ];

  return (
    <section id="dps-calculator" className="py-16 sm:py-24 bg-slate-950/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            Formula Matrix
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Damage Calculation Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Every hit follows a strict mathematical pipeline from base attributes to final combat numbers.
          </p>
        </div>

        {/* Visual Pipeline Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => (
            <div key={item.step} className="flex flex-col items-center">
              <div
                className={`w-full rounded-xl glass-panel p-4 flex flex-col justify-between border transition-all duration-200 hover:-translate-y-1 ${item.color} ${
                  item.isFinal ? "ring-2 ring-amber-500/50 shadow-lg shadow-amber-500/20" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    Step {item.step}
                  </span>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-100 mt-1">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.subtext}</p>
                <div className="mt-3 pt-2 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                  {item.formulaNote}
                </div>
              </div>

              {/* Arrow Connector (horizontal except end of row) */}
              {idx < steps.length - 1 && (
                <div className="my-2 text-slate-400 text-sm font-bold animate-pulse">
                  {idx === 4 ? "↓" : "→"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Pipeline Mobile & Tablet Stack */}
        <div className="lg:hidden flex flex-col items-center max-w-xl mx-auto space-y-3">
          {steps.map((item, idx) => (
            <div key={item.step} className="w-full flex flex-col items-center">
              <div
                className={`w-full rounded-xl glass-panel p-4 sm:p-5 flex items-center justify-between border transition-colors ${item.color} ${
                  item.isFinal ? "ring-2 ring-amber-500/50 shadow-lg shadow-amber-500/20" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-amber-400 font-semibold">Step {item.step}</span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-100">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{item.subtext}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {item.formulaNote}
                  </span>
                </div>
              </div>

              {/* Down Arrow Connector */}
              {idx < steps.length - 1 && (
                <div className="py-1 text-slate-400 font-bold text-lg">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
