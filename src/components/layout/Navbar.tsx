"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Characters", href: "/characters" },
    { name: "Teams", href: "/teams" },
    { name: "DPS Calculator", href: "/calculator", isBadge: true },
    { name: "Tier List", href: "/tier-list" },
    { name: "Guides", href: "/guides" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-slate-100 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded-lg px-1 py-0.5"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/30 border border-amber-500/40 text-amber-400 shadow-sm shadow-amber-500/20">
            ⚔️
          </span>
          <span className="bg-gradient-to-r from-amber-200 via-slate-100 to-amber-100 bg-clip-text text-transparent">
            Teyvat Traveler
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                  isActive
                    ? "text-amber-300 bg-slate-900/80"
                    : "text-slate-300 hover:text-amber-300"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.name}
                  {link.isBadge && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Calc
                    </span>
                  )}
                </span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 transition-transform duration-200 ease-out rounded-full ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
          >
            <span>Launch Calculator</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-amber-300 bg-slate-900"
                      : "text-slate-200 hover:text-amber-300 hover:bg-slate-900"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isBadge && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Calc
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-800/80">
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20"
            >
              <span>Launch Calculator</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
