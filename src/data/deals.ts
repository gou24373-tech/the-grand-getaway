export interface Deal {
  id: string;
  title: string;
  destination: string;
  image: string;
  alt: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  dates: string;
  includes: string[];
  description: string;
  badge: string;
}

export const deals: Deal[] = [
  {
    id: 'santorini-luxury',
    title: 'Santorini Luxury Escape',
    destination: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/32302617/pexels-photo-32302617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Whitewashed architecture and sea view from Imerovigli, Santorini at sunset',
    originalPrice: 3400,
    salePrice: 2850,
    discount: 16,
    dates: 'Jun 15 – Jun 22, 2026',
    includes: ['7 nights cliffside suite', 'Private caldera cruise', 'Daily gourmet breakfast', 'Wine tasting experience'],
    description: 'Stay in a premium cliffside suite in Oia with unobstructed caldera views. Includes a private sunset cruise and a guided wine tasting at a centuries-old volcanic vineyard.',
    badge: 'Best Seller',
  },
  {
    id: 'maldives-overwater',
    title: 'Maldives Overwater Villa',
    destination: 'North Malé Atoll, Maldives',
    image: 'https://images.pexels.com/photos/3155696/pexels-photo-3155696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Beachfront resort with overwater bungalows and turquoise waters in the Maldives',
    originalPrice: 5800,
    salePrice: 4500,
    discount: 22,
    dates: 'Jul 1 – Jul 7, 2026',
    includes: ['6 nights overwater villa', 'All-inclusive dining', 'Snorkeling & diving excursions', 'Spa credit $200'],
    description: 'Wake up to the Indian Ocean beneath your feet in a private overwater villa. All meals included, plus daily snorkeling excursions to pristine coral reefs and a $200 spa credit.',
    badge: 'Limited',
  },
  {
    id: 'tokyo-cultural',
    title: 'Tokyo Cultural Immersion',
    destination: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/15275312/pexels-photo-15275312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Panoramic view of Tokyo cityscape with Mount Fuji in the background',
    originalPrice: 3800,
    salePrice: 3100,
    discount: 18,
    dates: 'Sep 10 – Sep 18, 2026',
    includes: ['8 nights boutique hotel', 'Private tea ceremony', 'Michelin-starred dinner', 'Day trip to Hakone'],
    description: 'Dive deep into Tokyo\'s rich traditions with a private tea ceremony in a century-old teahouse, a Michelin-starred kaiseki dinner, and a guided day trip to the hot springs of Hakone with Mount Fuji views.',
    badge: 'New',
  },
];
