import { Compass, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Destinations: ['Santorini', 'Bali', 'Paris', 'Tokyo', 'Maldives', 'Kenya Safari'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press Kit', 'Contact'],
  Support: ['Help Center', 'Booking Policy', 'Cancellation', 'Travel Insurance', 'FAQs'],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 py-16" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="The Grand Getaway home">
              <Compass className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
              <span className="font-display text-xl text-white">
                The Grand <span className="text-gold-gradient">Getaway</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Curated luxury travel experiences for the discerning traveler. Discover the world's most extraordinary destinations with us.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-200 transition-all hover:bg-gold-400 hover:text-navy-950"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-sm text-navy-300 transition-colors hover:text-gold-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-navy-400">
              &copy; {new Date().getFullYear()} The Grand Getaway. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-navy-400 transition-colors hover:text-gold-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
