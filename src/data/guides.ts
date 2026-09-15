export interface Guide {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  alt: string;
  readTime: string;
  author: string;
}

export const guides: Guide[] = [
  {
    id: 'european-grand-tour',
    category: 'Europe',
    title: 'The Modern Grand Tour: Reimagining Europe\'s Classic Itinerary',
    excerpt: 'From the canals of Venice to the Colosseum at dusk — how to craft the ultimate European journey with today\'s best stays.',
    content: [
      'The Grand Tour was once a rite of passage for European aristocracy — a months-long journey through the cultural capitals of the continent. Today, the concept endures, but the experience has been reimagined for the modern luxury traveler.',
      'Begin in Venice, where a private water taxi whisks you from the airport to your canal-side hotel. Spend two days exploring the Doge\'s Palace, the Peggy Guggenheim Collection, and the quieter backstreets of Cannaregio. A sunset gondola ride through the lesser canals avoids the Rialto crowds.',
      'Board the high-speed train to Rome, checking into a boutique hotel near the Spanish Steps. Three days allows for the Vatican at dawn, the Colosseum with an archaeologist guide, and an evening food tour through Trastevere. The key is private after-hours access — no queues, no crowds.',
      'Continue to Florence for two nights of Renaissance masterpieces and Tuscan wine. The Uffizi private tour before opening hours is worth every penny. End your journey in Paris with three days of museum visits, Michelin dining, and a sunset cruise on the Seine.',
      'The modern Grand Tour is not about seeing everything — it is about seeing the right things, at the right time, with the right people.',
    ],
    image: 'https://images.pexels.com/photos/39533459/pexels-photo-39533459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rialto Bridge on the Grand Canal in Venice, Italy',
    readTime: '12 min read',
    author: 'Isabella Laurent',
  },
  {
    id: 'island-hopping-guide',
    category: 'Islands',
    title: 'Island Hopping: Finding Paradise Beyond the Postcard',
    excerpt: 'The Maldives, Bali, and beyond — our insider guide to choosing the perfect tropical escape.',
    content: [
      'Not all islands are created equal. The art of island hopping lies in matching the right destination to the right traveler — and knowing when to go beyond the brochure.',
      'The Maldives remains the gold standard for overwater luxury. Choose a resort in the North Malé Atoll for proximity to the airport, or venture to the southern atolls for pristine reefs and fewer neighbors. The secret: book a villa with a house reef, so you can snorkel from your doorstep.',
      'Bali offers something the Maldives cannot — culture. The rice terraces of Tegallalang, the temples of Uluwatu, and the artistic community of Ubud make this an island for both relaxation and exploration. Stay in a cliffside villa in Uluwatu for sunset views over the Indian Ocean.',
      'Beyond the classics, consider Palawan in the Philippines for limestone karst formations and hidden lagoons, or the Seychelles for granite boulders and giant tortoises. Each offers a distinctly different tropical experience.',
      'The best island trips combine three elements: a world-class resort, authentic local culture, and access to pristine nature. Choose two of the three, and you will have a memorable trip. Find all three, and you will have the journey of a lifetime.',
    ],
    image: 'https://images.pexels.com/photos/29901885/pexels-photo-29901885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of tropical beach with palm trees and turquoise waters',
    readTime: '8 min read',
    author: 'Marcus Chen',
  },
  {
    id: 'mountain-adventure-guide',
    category: 'Adventure',
    title: 'Above the Clouds: Europe\'s Most Spectacular Mountain Trails',
    excerpt: 'Lace up your boots for the most breathtaking high-altitude hikes from the Alps to the Carpathians.',
    content: [
      'Europe\'s mountain trails offer something for every level of hiker — from gentle alpine meadows to challenging via ferrata routes. The key is choosing the trail that matches your ambition and your fitness.',
      'The Tour du Mont Blanc remains the ultimate alpine trek — a 170-kilometer circuit through France, Italy, and Switzerland. Ten days of mountain huts, glacier views, and the best food of any long-distance trail in the world. Book huts well in advance for summer departures.',
      'For a shorter adventure, the Julian Alps in Slovenia offer jaw-dropping scenery in a compact package. The Triglav Seven Lakes Valley can be done as a day hike from Kranjska Gora, with turquoise mountain lakes and dramatic limestone peaks.',
      'The Carpathians of Romania remain Europe\'s last great wilderness. The King\'s Trail in the Fagaras Mountains crosses the highest peaks in the range, with chances to spot bears, wolves, and chamois. Go with a guide — the trails are remote and navigation is challenging.',
      'Whatever you choose, pack for changing weather. Mountain conditions can shift from sunny to stormy in minutes. A good rule: if you can see your destination, you have time to get there. If you cannot, wait until you can.',
    ],
    image: 'https://images.pexels.com/photos/17317399/pexels-photo-17317399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hikers exploring mountain trails of Montenegro',
    readTime: '10 min read',
    author: 'Elena Vasquez',
  },
];
