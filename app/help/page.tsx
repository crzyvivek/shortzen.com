'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HelpHero from './HelpHero';
import HelpCategories from './HelpCategories';
import HelpFAQ from './HelpFAQ';
import HelpSearch from './HelpSearch';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HelpHero />
      <HelpSearch />
      <HelpCategories />
      <HelpFAQ />
      <Footer />
    </div>
  );
}