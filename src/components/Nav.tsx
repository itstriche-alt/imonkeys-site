import { useState, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../img/logo_alt.webp';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Repair', href: '#estimate' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Find Us', href: '#find-us' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Custom handler to ensure perfect scrolling offset even on mobile browsers
  const handleNavClick = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const isMobile = window.innerWidth < 768;

        // Per-section offsets: #estimate needs a larger offset because the
        // section has tall top-padding (py-16/py-24) above the actual card.
        // We subtract that padding so the card sits right below the nav.
        const offsetMap: Record<string, { mobile: number; desktop: number }> = {
          '#estimate': { mobile: 10, desktop: 20 },   // Show card right below nav
        };
        const defaults = { mobile: 90, desktop: 100 };
        const offsets = offsetMap[href] ?? defaults;
        const navHeight = isMobile ? offsets.mobile : offsets.desktop;

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 animate-nav-in"
      >
        <div className="max-w-7xl mx-auto glass-panel rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="transition-transform hover:scale-105">
              <img
                src={logo}
                alt="iMonkeys Logo"
                className="h-8 sm:h-10 w-auto object-contain"
                fetchPriority="high"
                width="400"
                height="148"
              />
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="tel:+15024435435"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            (502) 443-5435
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown - CSS animated */}
      {menuOpen && (
        <div
          className="fixed top-[76px] left-4 right-4 z-40 glass-panel rounded-2xl px-4 py-4 flex flex-col gap-1 md:hidden animate-fade-in"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-white/10">
            <a
              href="tel:+15024435435"
              onClick={closeMenu}
              className="flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 transition-all"
            >
              (502) 443-5435
            </a>
          </div>
        </div>
      )}
    </>
  );
}
