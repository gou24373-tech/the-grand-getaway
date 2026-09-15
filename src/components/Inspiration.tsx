import { MapPin } from 'lucide-react';
import { experiences } from '@/data/testimonials';
import { Reveal } from '@/components/Reveal';

export function Inspiration() {
  const wideCards = experiences.filter((e) => e.layout === 'wide');
  const tallCards = experiences.filter((e) => e.layout === 'tall');

  return (
    <section
      id="inspiration"
      className="scroll-mt-20 bg-gradient-to-b from-navy-950 to-navy-900 py-20 lg:py-28"
      aria-label="Traveler experiences"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Traveler Experiences
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Real journeys, memorable places, and experiences worth sharing.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {wideCards.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 120}>
              <ExperienceCardLarge exp={exp} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 lg:gap-8">
          {tallCards.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 120}>
              <ExperienceCardTall exp={exp} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCardLarge({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-navy-800/40 transition-all duration-500 hover:bg-navy-800/60">
      <div className="relative h-64 overflow-hidden sm:h-72">
        <img
          src={exp.image}
          alt={exp.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="p-7 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-400">
          <MapPin className="h-3.5 w-3.5" />
          {exp.destination}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
          {exp.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-200">{exp.experience}</p>
        <div className="mt-6 flex items-center justify-between border-t border-navy-700/60 pt-4">
          <span className="text-sm font-medium text-navy-100">{exp.traveler}</span>
          <span className="text-xs text-navy-400">{exp.date}</span>
        </div>
      </div>
    </article>
  );
}

function ExperienceCardTall({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <article className="group relative flex h-[28rem] flex-col justify-end overflow-hidden rounded-2xl">
      <img
        src={exp.image}
        alt={exp.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-7 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-400">
          <MapPin className="h-3.5 w-3.5" />
          {exp.destination}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
          {exp.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-200">{exp.experience}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-medium text-navy-100">{exp.traveler}</span>
          <span className="text-xs text-navy-300">{exp.date}</span>
        </div>
      </div>
    </article>
  );
}
