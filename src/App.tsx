import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Destinations } from '@/components/Destinations';
import { Guides } from '@/components/Guides';
import { Deals } from '@/components/Deals';
import { Inspiration } from '@/components/Inspiration';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedContinent('All');
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Destinations
          searchQuery={searchQuery}
          selectedContinent={selectedContinent}
          onContinentChange={setSelectedContinent}
        />
        <Guides />
        <Deals />
        <Inspiration />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
