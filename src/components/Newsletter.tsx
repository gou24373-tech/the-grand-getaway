import { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="about" className="scroll-mt-20 bg-cream py-20 lg:py-28" aria-label="Newsletter signup">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-12 text-center shadow-xl sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gold-400/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/20">
              <Sparkles className="h-8 w-8 text-gold-400" />
            </div>

            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Get Travel Inspiration Delivered
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-navy-200">
              Join over 50,000 travelers receiving exclusive deals, insider guides, and destination inspiration every week.
            </p>

            {submitted ? (
              <div
                className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-xl bg-green-500/20 px-6 py-4 text-green-300"
                style={{ animation: 'scale-in 0.3s ease-out forwards' }}
              >
                <CheckCircle className="h-6 w-6 shrink-0" />
                <p className="text-sm font-medium">
                  You're subscribed! Check your inbox for a welcome message.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                noValidate
              >
                <div className="relative w-full">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-white/20 bg-white/95 py-3.5 pl-12 pr-4 text-base text-navy-900 outline-none transition-all placeholder:text-navy-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/40"
                    aria-label="Email address"
                    aria-invalid={!!error}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-400 px-8 py-3.5 text-base font-semibold text-navy-950 transition-all hover:bg-gold-300 active:scale-95 sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            )}

            {error && (
              <p id="newsletter-error" className="mt-3 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}

            {!submitted && (
              <p className="mt-4 text-xs text-navy-300">
                No spam, just travel inspiration. Unsubscribe anytime.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
