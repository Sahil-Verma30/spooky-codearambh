
import React from 'react';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-halloween-darkPurple py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-bold text-halloween-ghostWhite flex items-center">
              <span className="text-halloween-orange">CODE</span>ARAMBH
            </a>
            <p className="text-halloween-ghostWhite/60 mt-4 max-w-md">
              The spookiest hackathon of the year, bringing together the most talented 
              developers to build innovative projects with a Halloween twist.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-halloween-ghostWhite hover:bg-halloween-orange/20 hover:text-halloween-orange transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-halloween-ghostWhite hover:bg-halloween-orange/20 hover:text-halloween-orange transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-halloween-ghostWhite hover:bg-halloween-orange/20 hover:text-halloween-orange transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-halloween-ghostWhite hover:bg-halloween-orange/20 hover:text-halloween-orange transition-colors">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-halloween-ghostWhite font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">About</a>
              </li>
              <li>
                <a href="#timeline" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Timeline</a>
              </li>
              <li>
                <a href="#tracks" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Tracks</a>
              </li>
              <li>
                <a href="#prizes" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#faq" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#register" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-halloween-ghostWhite font-bold mb-6">More Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Code of Conduct</a>
              </li>
              <li>
                <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Sponsorship</a>
              </li>
              <li>
                <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-halloween-ghostWhite/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CODEARAMBH. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors text-sm">Privacy</a>
            <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors text-sm">Terms</a>
            <a href="#" className="text-halloween-ghostWhite/60 hover:text-halloween-orange transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
