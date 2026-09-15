import { useState, useEffect } from 'react';
import { Clock, ArrowRight, X, MapPin } from 'lucide-react';
import { guides, type Guide } from '@/data/guides';
import { Reveal } from '@/components/Reveal';

export function Guides() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  return (
    <section id="guides" className="scroll-mt-20 bg-navy-950 py-20 lg:py-28" aria-label="Travel guides">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-400">Travel Guides</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Stories to Inspire Your Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-200">
            Expert-written guides from seasoned travelers who have walked the paths before you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {guides.map((guide, i) => (
            <Reveal
              key={guide.id}
              delay={i * 100}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-navy-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/50"
            >
              <article onClick={() => setSelectedGuide(guide)}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-950">
                    {guide.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-navy-300">
                    <span>{guide.author}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-gold-300">
                    {guide.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-300">{guide.excerpt}</p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 transition-all hover:gap-3"
                    aria-label={`Read more about ${guide.title}`}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedGuide && <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />}
    </section>
  );
}

interface GuideModalProps {
  guide: Guide;
  onClose: () => void;
}

function GuideModal({ guide, onClose }: GuideModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={guide.title}
    >
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-navy-900 shadow-2xl"
        style={{ animation: 'scale-in 0.3s ease-out forwards' }}
      >
        <div className="relative h-56 overflow-hidden">
          <img src={guide.image} alt={guide.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:scale-110 active:scale-90"
            aria-label="Close article"
          >
            <X className="h-5 w-5 text-navy-900" />
          </button>
          <span className="absolute bottom-3 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950">
            {guide.category}
          </span>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2 text-xs text-navy-300">
            <span>{guide.author}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {guide.readTime}
            </span>
          </div>
          <h2 className="text-2xl font-bold leading-tight text-white">{guide.title}</h2>

          <div className="mt-5 space-y-4">
            {guide.content.map((paragraph, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-navy-200">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href="#offers"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-300 active:scale-95"
          >
            <MapPin className="h-4 w-4" />
            Explore Related Deals
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
