import { useMemo } from 'react';
import { Heart, Star, Clock, MapPin } from 'lucide-react';
import { destinations, continents, type Destination } from '@/data/destinations';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Reveal } from '@/components/Reveal';

interface DestinationsProps {
  searchQuery: string;
  selectedContinent: string;
  onContinentChange: (c: string) => void;
}

export function Destinations({ searchQuery, selectedContinent, onContinentChange }: DestinationsProps) {
  const [favorites, setFavorites] = useLocalStorage<string[]>('gg-favorites', []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return destinations.filter((d) => {
      const matchesContinent = selectedContinent === 'All' || d.continent === selectedContinent;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.continent.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q));
      return matchesContinent && matchesQuery;
    });
  }, [searchQuery, selectedContinent]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  return (
    <section id="destinations" className="scroll-mt-20 bg-cream py-20 lg:py-28" aria-label="Popular destinations">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-600">Popular Destinations</p>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl md:text-5xl">Where Will You Go Next?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-600">
            Handpicked destinations from every corner of the globe, each offering a uniquely unforgettable experience.
          </p>
        </Reveal>

        <Reveal delay={100} className="mb-10 flex flex-wrap justify-center gap-3">
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => onContinentChange(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedContinent === c
                  ? 'bg-navy-900 text-white shadow-lg'
                  : 'bg-white text-navy-600 hover:bg-navy-100'
              }`}
              aria-pressed={selectedContinent === c}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-navy-500">No destinations found. Try a different search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dest, i) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                delay={i * 80}
                isFavorite={favorites.includes(dest.id)}
                onToggleFavorite={() => toggleFavorite(dest.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

interface DestinationCardProps {
  dest: Destination;
  delay: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

function DestinationCard({ dest, delay, isFavorite, onToggleFavorite }: DestinationCardProps) {
  return (
    <Reveal
      delay={delay}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
        <button
          onClick={onToggleFavorite}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:scale-110 active:scale-90"
          aria-label={isFavorite ? `Remove ${dest.name} from favorites` : `Add ${dest.name} to favorites`}
          aria-pressed={isFavorite}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? 'fill-gold-400 text-gold-400' : 'text-navy-400'
            }`}
          />
        </button>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-white">
            <MapPin className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium">{dest.country}</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy-900">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            {dest.rating}
            <span className="text-navy-400">({dest.reviews})</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-navy-900">{dest.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">{dest.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {dest.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-navy-400">
              <Clock className="h-3.5 w-3.5" />
              {dest.duration}
            </div>
            <div className="mt-1 text-lg font-bold text-navy-900">
              ${dest.price.toLocaleString()}
              <span className="text-sm font-normal text-navy-400"> /person</span>
            </div>
          </div>
          <a
            href="#offers"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 active:scale-95"
          >
            View Deal
          </a>
        </div>
      </div>
    </Reveal>
  );
}
