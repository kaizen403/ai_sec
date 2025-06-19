'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#060A17] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}