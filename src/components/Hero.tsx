import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, MapPin } from 'lucide-react';
import { heroImage } from '@/data/destinations';

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    const section = document.getElementById('destinations');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aerial view of a tropical beach with palm tree shadows and ocean waves"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-navy-950/40 px-4 py-2 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
          <span className="text-sm font-medium text-gold-100">Rated #1 Luxury Travel Platform 2026</span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl font-bold leading-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          Discover the World's
          <br />
          Most <span className="text-gold-gradient">Extraordinary</span> Destinations
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Curated luxury travel guides, exclusive deals, and bespoke itineraries for the discerning traveler. Your next unforgettable journey begins here.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Where do you want to go?"
              className="w-full rounded-full border border-white/20 bg-white/95 py-4 pl-12 pr-4 text-base text-navy-900 shadow-xl outline-none transition-all placeholder:text-navy-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/40"
              aria-label="Search destinations"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gold-400 px-8 py-4 text-base font-semibold text-navy-950 shadow-xl transition-all hover:bg-gold-300 hover:shadow-gold-400/30 active:scale-95 sm:w-auto"
          >
            Explore
          </button>
        </motion.form>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-navy-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-400" />
            <span>120+ Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            <span>50,000+ Happy Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            <span>4.9 Average Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
