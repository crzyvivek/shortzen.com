
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import AboutMission from './AboutMission';
import AboutTeam from './AboutTeam';
import AboutStats from './AboutStats';
import AboutValues from './AboutValues';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </div>
  );
}
