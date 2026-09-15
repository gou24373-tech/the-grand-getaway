export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  image: string;
  alt: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
}

export const destinations: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    image: 'https://images.pexels.com/photos/13900614/pexels-photo-13900614.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of Santorini white architecture and blue sea',
    price: 2850,
    duration: '7 days',
    rating: 4.9,
    reviews: 1243,
    description: 'Sun-drenched cliffs, whitewashed villages, and the caldera views that make Santorini unforgettable.',
    tags: ['Beach', 'Culture', 'Romance'],
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/2259226/pexels-photo-2259226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tropical pool at a luxurious resort in Bali with palm trees',
    price: 1950,
    duration: '10 days',
    rating: 4.8,
    reviews: 2156,
    description: 'Emerald rice terraces, sacred temples, and beachfront resorts in the Island of the Gods.',
    tags: ['Beach', 'Adventure', 'Wellness'],
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    image: 'https://images.pexels.com/photos/17501700/pexels-photo-17501700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Paris cityscape with Eiffel Tower framed by Haussmann buildings',
    price: 2200,
    duration: '5 days',
    rating: 4.7,
    reviews: 3421,
    description: 'The City of Light: world-class museums, haute cuisine, and timeless romance on every boulevard.',
    tags: ['City', 'Culture', 'Food'],
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/20378132/pexels-photo-20378132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of Tokyo skyline with Tokyo Skytree',
    price: 3100,
    duration: '8 days',
    rating: 4.9,
    reviews: 1876,
    description: 'Where ancient tradition meets neon future — the most fascinating city on the planet.',
    tags: ['City', 'Culture', 'Food'],
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/9394274/pexels-photo-9394274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Overwater bungalows with thatched roofs on turquoise ocean in the Maldives',
    price: 4500,
    duration: '6 days',
    rating: 5.0,
    reviews: 892,
    description: 'Overwater villas, coral reefs, and the clearest turquoise water on Earth.',
    tags: ['Beach', 'Romance', 'Wellness'],
  },
  {
    id: 'kenya',
    name: 'Kenya Safari',
    country: 'Kenya',
    continent: 'Africa',
    image: 'https://images.pexels.com/photos/17981749/pexels-photo-17981749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Lioness roaming the vast plains near Mombasa, Kenya',
    price: 3800,
    duration: '9 days',
    rating: 4.8,
    reviews: 654,
    description: 'Witness the great migration, luxury tented camps, and the wild heart of Africa.',
    tags: ['Adventure', 'Nature', 'Wildlife'],
  },
];

export const heroImage = 'https://images.pexels.com/photos/17000396/pexels-photo-17000396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const continents = ['All', 'Europe', 'Asia', 'Africa'];
