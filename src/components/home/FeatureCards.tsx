import Link from "next/link";

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
  accentGlow: string;
  borderAccent: string;
  iconBg: string;
  iconColor: string;
  href: string;
}

export default function FeatureCards() {
  const features: FeatureItem[] = [
    {
      id: "dps-calculator",
      icon: "⚔️",
      title: "DPS Calculator",
      description: "Understand exactly how your damage is calculated.",
      badge: "Core Engine",
      accentGlow: "group-hover:shadow-amber-500/10",
      borderAccent: "group-hover:border-amber-500/50",
      iconBg: "bg-amber-500/10 border-amber-500/30",
      iconColor: "text-amber-400",
      href: "/calculator",
    },
    {
      id: "team-builder",
      icon: "👥",
      title: "Team Builder",
      description: "Build teams and visualize character rotations.",
      badge: "Synergy & Energy",
      accentGlow: "group-hover:shadow-cyan-500/10",
      borderAccent: "group-hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10 border-cyan-500/30",
      iconColor: "text-cyan-400",
      href: "/teams",
    },
    {
      id: "tier-list",
      icon: "📊",
      title: "Tier List",
      description: "Compare character performance across standardized F2P and Premium scenarios.",
      badge: "Standardized",
      accentGlow: "group-hover:shadow-purple-500/10",
      borderAccent: "group-hover:border-purple-500/50",
      iconBg: "bg-purple-500/10 border-purple-500/30",
      iconColor: "text-purple-400",
      href: "/tier-list",
    },
    {
      id: "game-guides",
      icon: "📖",
      title: "Game Guides",
      description: "Learn elemental reactions, energy, ICD, gauge theory, and more.",
      badge: "Theorycrafting",
      accentGlow: "group-hover:shadow-emerald-500/10",
      borderAccent: "group-hover:border-emerald-500/50",
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      iconColor: "text-emerald-400",
      href: "/guides",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-950/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Comprehensive Toolkit
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Everything You Need To Optimize Builds
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Designed for travelers who want precise, formula-backed insights into combat performance.
          </p>
        </div>

        {/* Grid of 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className={`group relative rounded-2xl glass-panel p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 border border-slate-800/80 ${feature.borderAccent} ${feature.accentGlow} shadow-xl block focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none`}
            >
              <div className="flex items-start justify-between">
                {/* Feature Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${feature.iconBg} ${feature.iconColor} shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                {/* Category Badge */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-amber-300 transition-colors">
                  {feature.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <span>{feature.title}</span>
                <svg
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </h3>

              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-medium group-hover:text-slate-300">
                <span>Open Feature Module</span>
                <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
