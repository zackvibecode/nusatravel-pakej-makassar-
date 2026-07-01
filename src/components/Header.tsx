"use client";

import { useState } from "react";
import Icon from "./ui/Icon";
import Logo from "./Logo";
import { WHATSAPP_URL } from "@/data/content";

const NAV_LINKS = [
  { href: "#tempat-lawatan", label: "Lawatan" },
  { href: "#itinerary", label: "Itinerary" },
  { href: "#galeri", label: "Galeri" },
  { href: "#tarikh-pelepasan", label: "Tarikh" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#" className="flex items-center" onClick={closeMenu}>
          <Logo size={40} priority />
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-gray-500 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-brand-charcoal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-3.5 !py-1.5 !text-2xs"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Semak Seat</span>
            <span className="sm:hidden">Seat</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50 md:hidden"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <div className="container-x flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand-charcoal"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
