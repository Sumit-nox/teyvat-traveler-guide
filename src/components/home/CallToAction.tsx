import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Radial background glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-cyan-500/15 blur-[140px] rounded-full opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 lg:p-16 border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-cyan-400 to-amber-500" />

          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Symbol badge */}
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mb-6 text-amber-400 shadow-lg shadow-amber-500/10">
              ⚔️
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Build. Calculate. Optimize.
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium">
              Your journey starts here.
            </p>

            {/* Primary Action Button */}
            <div className="mt-8">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/45 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              >
                <span>Start Building</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
