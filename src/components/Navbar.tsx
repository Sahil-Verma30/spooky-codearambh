
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, GithubIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-2 bg-halloween-darkPurple/90 backdrop-blur-lg shadow-lg' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-halloween-ghostWhite flex items-center">
            <span className="text-halloween-orange">CODE</span>ARAMBH
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <nav className="flex space-x-6">
              <a href="#about" className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors">About</a>
              <a href="#timeline" className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors">Timeline</a>
              <a href="#tracks" className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors">Tracks</a>
              <a href="#prizes" className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors">Prizes</a>
              <a href="#faq" className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors">FAQ</a>
            </nav>
            
            <a 
              href="#register" 
              className="ghost-btn orange-glow"
            >
              Register Now
            </a>
          </div>
          
          <button 
            className="md:hidden text-halloween-ghostWhite" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-halloween-darkPurple/95 flex flex-col justify-center items-center z-40 transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center text-xl">
          <a 
            href="#about" 
            className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#timeline" 
            className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Timeline
          </a>
          <a 
            href="#tracks" 
            className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tracks
          </a>
          <a 
            href="#prizes" 
            className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Prizes
          </a>
          <a 
            href="#faq" 
            className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#register" 
            className="ghost-btn orange-glow mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Register Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
