import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-100">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 text-sm">
                ⚔️
              </span>
              <span className="bg-gradient-to-r from-amber-200 via-slate-100 to-amber-100 bg-clip-text text-transparent">
                Teyvat Traveler Guide
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              An independent community companion for Genshin Impact players. Calculate exact rotational damage, build optimal party compositions, and master elemental theorycrafting.
            </p>
            {/* Version Note */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 italic">
                * Note: Game data, scaling ratios, and formulas may change with game versions.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/characters" className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:underline">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:underline">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:underline">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/tier-list" className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:underline">
                  Tier List
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:underline">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Open Source Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Community
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright divider */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Teyvat Traveler Guide. All rights reserved.</p>
          <p>Not affiliated with or endorsed by Genshin Impact game publishers.</p>
        </div>
      </div>
    </footer>
  );
}
