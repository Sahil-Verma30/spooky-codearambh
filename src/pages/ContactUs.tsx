
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactUs = () => {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
