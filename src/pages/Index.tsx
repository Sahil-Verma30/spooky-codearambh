
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Tracks from '@/components/Tracks';
import Prizes from '@/components/Prizes';
import FAQ from '@/components/FAQ';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  useEffect(() => {
    // Initialize animations
    const hiddenElements = document.querySelectorAll('.fade-in-up');
    hiddenElements.forEach((el) => {
      el.classList.add('opacity-0');
    });

    // Animate hero elements on load
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.fade-in-up');
      heroElements.forEach((el) => {
        el.classList.remove('opacity-0');
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-halloween-purple">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Prizes />
        <FAQ />
        <Registration />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Index;
