
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingHero from './PricingHero';
import PricingPlans from './PricingPlans';
import PricingFAQ from './PricingFAQ';
import PricingFeatures from './PricingFeatures';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingHero />
      <PricingPlans isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <PricingFeatures />
      <PricingFAQ />
      <Footer />
    </div>
  );
}
