
import React, { useEffect, useRef } from 'react';

const Prizes = () => {
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
    <section id="prizes" ref={sectionRef} className="section-padding py-28 bg-halloween-darkPurple">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-halloween-orange/20 text-halloween-orange mb-4 border border-halloween-orange/30 hidden-element opacity-0">
            <span className="text-sm font-medium">Win Big</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hidden-element opacity-0">
            <span className="text-halloween-ghostWhite">Scary Good </span>
            <span className="text-halloween-orange">Prizes</span>
          </h2>
          <p className="text-halloween-ghostWhite/70 max-w-2xl mx-auto hidden-element opacity-0">
            Compete for a treasure trove of prizes worth over ₹20,000, including cash, 
            gadgets, and opportunities that will take your career to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Second Place */}
          <div className="hidden-element opacity-0 order-2 md:order-1">
            <div className="glass-card p-8 text-center purple-glow h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-halloween-lavender/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-lavender">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-halloween-ghostWhite/70">2nd Place</span>
                  <h3 className="text-2xl font-bold text-halloween-lavender">Silver Spell</h3>
                </div>
                <div className="text-3xl font-bold text-halloween-ghostWhite mb-6">₹5,000</div>
                <ul className="text-halloween-ghostWhite/70 space-y-2 mb-8">
                  <li>Cash prize</li>
                  <li>Certificates and Trophy</li>
                  <li>Exclusive Mentorship Sessions</li>
                  <li>Goddies</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* First Place */}
          <div className="hidden-element opacity-0 order-1 md:order-2 md:-mt-8">
            <div className="glass-card p-8 text-center orange-glow h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="bg-halloween-orange text-halloween-darkPurple font-bold py-1 px-4 transform rotate-45 translate-x-7 translate-y-3">
                  BEST
                </div>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto rounded-full bg-halloween-orange/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-orange">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-halloween-ghostWhite/70">1st Place</span>
                  <h3 className="text-2xl font-bold text-halloween-orange">Grand Sorcerer</h3>
                </div>
                <div className="text-4xl font-bold text-halloween-ghostWhite mb-6">₹7,000</div>
                <ul className="text-halloween-ghostWhite/70 space-y-2 mb-8">
                  <li>Cash prize</li>
                  <li>Certificates and Trophy</li>
                  <li>Exclusive Mentorship Sessions</li>
                  <li>Goddies</li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 rounded-full bg-halloween-orange/20 text-halloween-orange text-sm font-medium">
                  + Exclusive Trophy
                </span>
              </div>
            </div>
          </div>
          
          {/* Third Place */}
          <div className="hidden-element opacity-0 order-3">
            <div className="glass-card p-8 text-center purple-glow h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-halloween-lavender/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-halloween-lavender">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-halloween-ghostWhite/70">3rd Place</span>
                  <h3 className="text-2xl font-bold text-halloween-lavender">Bronze Witch</h3>
                </div>
                <div className="text-3xl font-bold text-halloween-ghostWhite mb-6">₹3,000</div>
                <ul className="text-halloween-ghostWhite/70 space-y-2 mb-8">
                <li>Cash prize</li>
                  <li>Certificates and Trophy</li>
                  <li>Exclusive Mentorship Sessions</li>
                  <li>Goddies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="hidden-element opacity-0">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-halloween-ghostWhite mb-6 text-center">Special Category Prizes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h4 className="text-lg font-bold text-halloween-orange mb-3">Best Halloween UI</h4>
                <p className="text-halloween-ghostWhite/70 mb-3">For the most haunting and beautiful user interface design</p>
                <div className="text-xl font-bold text-halloween-ghostWhite">$500</div>
              </div>
              
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h4 className="text-lg font-bold text-halloween-lavender mb-3">Most Innovative Hack</h4>
                <p className="text-halloween-ghostWhite/70 mb-3">For thinking outside the coffin with a unique solution</p>
                <div className="text-xl font-bold text-halloween-ghostWhite">$500</div>
              </div>
              
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h4 className="text-lg font-bold text-halloween-orange mb-3">Best Use of AI</h4>
                <p className="text-halloween-ghostWhite/70 mb-3">For the most impressive integration of artificial intelligence</p>
                <div className="text-xl font-bold text-halloween-ghostWhite">$500</div>
              </div>
              
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h4 className="text-lg font-bold text-halloween-lavender mb-3">Best Social Impact</h4>
                <p className="text-halloween-ghostWhite/70 mb-3">For projects that make the world a better place</p>
                <div className="text-xl font-bold text-halloween-ghostWhite">$500</div>
              </div>
              
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h4 className="text-lg font-bold text-halloween-orange mb-3">Best Hardware Hack</h4>
                <p className="text-halloween-ghostWhite/70 mb-3">For the best physical computing or IoT project</p>
                <div className="text-xl font-bold text-halloween-ghostWhite">$500</div>
              </div>
              
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <h4 className="text-lg font-bold text-halloween-lavender mb-3">People's Choice</h4>
                <p className="text-halloween-ghostWhite/70 mb-3">Voted by all participants during the demo session</p>
                <div className="text-xl font-bold text-halloween-ghostWhite">$500</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Prizes;
