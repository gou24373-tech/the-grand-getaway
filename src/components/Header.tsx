import { useEffect, useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Guides', href: '#guides' },
  { label: 'Offers', href: '#offers' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'About', href: '#about' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            aria-label="The Grand Getaway home"
          >
            <Compass className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
            <span className="font-display text-white">
              The Grand <span className="text-gold-gradient">Getaway</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-navy-100 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#offers"
            className="hidden rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30 lg:inline-block"
          >
            Book Now
          </a>

          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div
          className={`absolute inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-navy-900 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy-700 px-6 py-4">
            <span className="font-display text-lg text-white">
              The Grand <span className="text-gold-gradient">Getaway</span>
            </span>
            <button
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-navy-100 transition-colors hover:bg-navy-800 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#offers"
                onClick={handleNavClick}
                className="block rounded-full bg-gold-400 px-6 py-3 text-center text-sm font-semibold text-navy-950 transition-all hover:bg-gold-300"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
