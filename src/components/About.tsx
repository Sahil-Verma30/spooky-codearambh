
import React, { useEffect, useRef } from 'react';
import { Ghost, Code, Skull } from 'lucide-react';
import Hell from "../components/assests/hell.jpg"

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = sectionRef.current?.querySelectorAll('.hidden-element');
    hiddenElements?.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding py-28"
       style={{
      backgroundImage: `linear-gradient(to bottom, rgba(26, 31, 44, 0.95), rgba(26, 31, 44, 0.8)), url(${Hell})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-halloween-lavender/20 text-halloween-lavender mb-4 border border-halloween-lavender/30 hidden-element opacity-0">
              <span className="text-sm font-medium">About The Event</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hidden-element opacity-0">
              <span className="text-halloween-ghostWhite">The Spookiest </span>
              <span className="text-halloween-orange">Hackathon</span>
              <span className="text-halloween-ghostWhite"> of the Year</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden-element opacity-0">
              <div className="glass-card relative p-6 overflow-hidden orange-glow">
                <div className="absolute -top-10 -right-10 text-halloween-orange/10">
                  <Skull size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-halloween-orange relative z-10">What is CODEARAMBH?</h3>
                <p className="text-halloween-ghostWhite/80 mb-4 relative z-10">
                  CODEARAMBH is a 24-hour hackathon where participants come together to solve 
                  challenging problems, build innovative projects, and showcase their technical skills - 
                  all with a Halloween twist!
                </p>
                <p className="text-halloween-ghostWhite/80 relative z-10">
                  Whether you're a seasoned developer or just starting your coding journey, 
                  CODEARAMBH provides a platform to learn, collaborate, and create something extraordinary.
                </p>
              </div>
            </div>
            
            <div className="hidden-element opacity-0">
              <div className="glass-card relative p-6 overflow-hidden purple-glow">
                <div className="absolute -top-10 -right-10 text-halloween-lavender/10">
                  <Code size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-halloween-lavender relative z-10">Why Participate?</h3>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start space-x-3">
                    <Ghost className="text-halloween-lavender flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-halloween-ghostWhite/80">Build impressive projects for your portfolio</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Ghost className="text-halloween-lavender flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-halloween-ghostWhite/80">Connect with industry professionals and mentors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Ghost className="text-halloween-lavender flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-halloween-ghostWhite/80">Win amazing prizes worth over ₹15,000</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Ghost className="text-halloween-lavender flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-halloween-ghostWhite/80">Learn new technologies through workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Ghost className="text-halloween-lavender flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-halloween-ghostWhite/80">Experience a unique Halloween-themed event</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 glass-card p-8 hidden-element opacity-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-halloween-orange/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-orange">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-halloween-ghostWhite mb-2">100+</h4>
                <p className="text-halloween-ghostWhite/60">Participants</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-halloween-lavender/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-lavender">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-halloween-ghostWhite mb-2">10+</h4>
                <p className="text-halloween-ghostWhite/60">Colleges</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-halloween-orange/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-orange">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-halloween-ghostWhite mb-2">2+</h4>
                <p className="text-halloween-ghostWhite/60">Workshops</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-halloween-lavender/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-lavender">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-halloween-ghostWhite mb-2">10+</h4>
                <p className="text-halloween-ghostWhite/60">Mentors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
