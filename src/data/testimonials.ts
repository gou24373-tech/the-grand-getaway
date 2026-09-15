export interface Experience {
  id: string;
  traveler: string;
  destination: string;
  title: string;
  experience: string;
  date: string;
  image: string;
  alt: string;
  layout: 'wide' | 'tall';
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    traveler: 'Aarav Mehta',
    destination: 'Goa, India',
    title: 'Slow mornings by the sea',
    experience:
      'Three days of beaches, local food, and quiet sunsets. The itinerary gave us enough structure without making the trip feel rushed.',
    date: 'February 2026',
    image: 'https://images.pexels.com/photos/28159570/pexels-photo-28159570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A man with a camera gazing at a serene sunset on a peaceful Goa beach',
    layout: 'wide',
  },
  {
    id: 'e2',
    traveler: 'Claire Dubois',
    destination: 'Bali, Indonesia',
    title: 'Beyond the usual itinerary',
    experience:
      'From early mornings in Ubud to evenings along the coast, every day felt different without being overwhelming.',
    date: 'November 2025',
    image: 'https://images.pexels.com/photos/38868370/pexels-photo-38868370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of lush green rice terraces in Ubud, Bali',
    layout: 'tall',
  },
  {
    id: 'e3',
    traveler: 'Marcus Hale',
    destination: 'Paris, France',
    title: 'A weekend to remember',
    experience:
      'Walking through the city without a strict schedule turned out to be the highlight of the trip. We found corners of Paris we would have missed otherwise.',
    date: 'October 2025',
    image: 'https://images.pexels.com/photos/11213243/pexels-photo-11213243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Person walking on a city street near a classic Parisian cafe under a blue awning',
    layout: 'wide',
  },
  {
    id: 'e4',
    traveler: 'Yuki Tanaka',
    destination: 'Kyoto, Japan',
    title: 'Temples before the crowds',
    experience:
      'Arriving at the temple just after dawn meant we had the place almost to ourselves. The rest of the day unfolded at its own pace after that.',
    date: 'March 2026',
    image: 'https://images.pexels.com/photos/37165545/pexels-photo-37165545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Yasaka Pagoda in Kyoto at sunrise with traditional architecture',
    layout: 'tall',
  },
];
