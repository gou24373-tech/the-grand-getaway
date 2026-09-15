import { useState, useEffect } from 'react';
import { X, Check, Calendar, MapPin, ArrowRight, CheckCircle, User, Mail } from 'lucide-react';
import { deals, type Deal } from '@/data/deals';
import { Reveal } from '@/components/Reveal';

export function Deals() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  return (
    <section id="offers" className="scroll-mt-20 bg-cream py-20 lg:py-28" aria-label="Exclusive offers">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-600">Exclusive Offers</p>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl md:text-5xl">Limited-Time Luxury Deals</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-600">
            Save on handpicked luxury experiences. These exclusive offers won't last long.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal, i) => (
            <Reveal
              key={deal.id}
              delay={i * 100}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950">
                  {deal.badge}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                  {deal.discount}% OFF
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-1.5 text-xs text-navy-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {deal.destination}
                </div>
                <h3 className="text-lg font-bold text-navy-900">{deal.title}</h3>
                <div className="mb-4 mt-2 flex items-center gap-1.5 text-xs text-navy-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {deal.dates}
                </div>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-navy-900">
                      ${deal.salePrice.toLocaleString()}
                    </span>
                    <span className="text-base text-navy-400 line-through">
                      ${deal.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedDeal(deal)}
                    className="mt-4 w-full rounded-full bg-navy-900 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedDeal && <DealModal deal={selectedDeal} onClose={() => setSelectedDeal(null)} />}
    </section>
  );
}

interface DealModalProps {
  deal: Deal;
  onClose: () => void;
}

function DealModal({ deal, onClose }: DealModalProps) {
  const [booking, setBooking] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (booking) return;
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, booking]);

  const handleClose = () => {
    if (booking) {
      setBooking(false);
      setConfirmed(false);
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${deal.title} details`}
    >
      <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={handleClose} />
      <div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        style={{ animation: 'scale-in 0.3s ease-out forwards' }}
      >
        {confirmed ? (
          <BookingConfirmation deal={deal} onClose={onClose} />
        ) : booking ? (
          <BookingForm deal={deal} onBack={() => setBooking(false)} onConfirm={() => setConfirmed(true)} />
        ) : (
          <>
            <div className="relative h-48 overflow-hidden">
              <img src={deal.image} alt={deal.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              <button
                onClick={onClose}
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:scale-110 active:scale-90"
                aria-label="Close deal details"
              >
                <X className="h-5 w-5 text-navy-900" />
              </button>
              <span className="absolute bottom-3 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950">
                {deal.badge} — {deal.discount}% OFF
              </span>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-6">
              <div className="mb-1 flex items-center gap-1.5 text-xs text-navy-400">
                <MapPin className="h-3.5 w-3.5" />
                {deal.destination}
              </div>
              <h3 className="text-xl font-bold text-navy-900">{deal.title}</h3>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-navy-400">
                <Calendar className="h-3.5 w-3.5" />
                {deal.dates}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-navy-600">{deal.description}</p>

              <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-navy-500">What's Included</h4>
              <ul className="mt-3 space-y-2">
                {deal.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-navy-900">
                      ${deal.salePrice.toLocaleString()}
                    </span>
                    <span className="text-base text-navy-400 line-through">
                      ${deal.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-navy-400">per person · taxes included</p>
                </div>
                <button
                  className="flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-300 active:scale-95"
                  onClick={() => setBooking(true)}
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

interface BookingFormProps {
  deal: Deal;
  onBack: () => void;
  onConfirm: () => void;
}

function BookingForm({ deal, onBack, onConfirm }: BookingFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onConfirm();
    }
  };

  const totalPrice = deal.salePrice * travelers;

  return (
    <div className="max-h-[85vh] overflow-y-auto">
      <div className="flex items-center justify-between border-b border-navy-100 px-6 py-4">
        <h3 className="text-lg font-bold text-navy-900">Book This Trip</h3>
        <button
          onClick={onBack}
          className="rounded-lg p-2 text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-900"
          aria-label="Go back to deal details"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-navy-50 px-6 py-4">
        <p className="text-sm font-semibold text-navy-900">{deal.title}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-navy-400">
          <MapPin className="h-3.5 w-3.5" />
          {deal.destination}
          <span aria-hidden="true">·</span>
          <Calendar className="h-3.5 w-3.5" />
          {deal.dates}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-6" noValidate>
        <div>
          <label htmlFor="booking-name" className="mb-1.5 block text-sm font-medium text-navy-700">
            Full Name
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
            <input
              id="booking-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-navy-200 bg-white py-3 pl-12 pr-4 text-base text-navy-900 outline-none transition-all placeholder:text-navy-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/40"
              placeholder="Jane Doe"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
          </div>
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="booking-email" className="mb-1.5 block text-sm font-medium text-navy-700">
            Email Address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
            <input
              id="booking-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-navy-200 bg-white py-3 pl-12 pr-4 text-base text-navy-900 outline-none transition-all placeholder:text-navy-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/40"
              placeholder="jane@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="booking-travelers" className="mb-1.5 block text-sm font-medium text-navy-700">
            Number of Travelers
          </label>
          <select
            id="booking-travelers"
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="w-full rounded-xl border border-navy-200 bg-white py-3 px-4 text-base text-navy-900 outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-400/40"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Traveler' : 'Travelers'}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl bg-navy-50 p-4">
          <div className="flex items-center justify-between text-sm text-navy-600">
            <span>${deal.salePrice.toLocaleString()} × {travelers}</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-navy-200 pt-2 text-base font-bold text-navy-900">
            <span>Total</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-gold-400 py-3.5 text-base font-semibold text-navy-950 transition-all hover:bg-gold-300 active:scale-95"
        >
          Confirm Booking
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-full bg-navy-100 py-3 text-sm font-medium text-navy-600 transition-all hover:bg-navy-200"
        >
          Back to Details
        </button>
      </form>
    </div>
  );
}

interface BookingConfirmationProps {
  deal: Deal;
  onClose: () => void;
}

function BookingConfirmation({ deal, onClose }: BookingConfirmationProps) {
  return (
    <div className="p-8 text-center" style={{ animation: 'scale-in 0.3s ease-out forwards' }}>
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-navy-900">Booking Confirmed!</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-600">
        Your reservation for <span className="font-semibold text-navy-900">{deal.title}</span> in {deal.destination} has been submitted. A confirmation email with your itinerary is on its way.
      </p>
      <div className="mt-6 rounded-xl bg-navy-50 p-4 text-left">
        <div className="flex items-center justify-between text-sm">
          <span className="text-navy-500">Trip Dates</span>
          <span className="font-semibold text-navy-900">{deal.dates}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-navy-500">Status</span>
          <span className="font-semibold text-green-600">Confirmed</span>
        </div>
      </div>
      <button
        onClick={onClose}
        className="mt-6 w-full rounded-full bg-navy-900 py-3.5 text-base font-semibold text-white transition-all hover:bg-navy-800 active:scale-95"
      >
        Close
      </button>
    </div>
  );
}
