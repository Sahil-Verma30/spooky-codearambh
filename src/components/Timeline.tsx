
import React, { useEffect, useRef } from 'react';

const Timeline = () => {
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

  const timelineItems = [
    {
      date: "March 31",
      title: "Registration Opens",
      description: "Register to secure your spot in the hackathon"
    },
    {
      date: "April 5",
      title: "Team Formation",
      description: "Finalize your team of up to 4 members"
    },
    {
      date: "April 11",
      title: "Opening Ceremony (10:00 - 11:00 AM)",
      description: "Join us for the kickoff event with special guests"
    },
    {
      date: "April 11-12",
      title: "Hackathon Begins(11:00 AM - 2:00 PM)",
      description: "Start coding! The clock starts ticking"
    },
    {
      date: "April 11-12",
      title: "Mid-Hackathon Check-in(3 Rounds)",
      description: `Progress review and mentorship sessions `
      
    },
    {
      date: "April 12",
      title: "Final Submissions",
      description: "Submit your project by 6 AM"
    },
    {
      date: "April 12",
      title: "Halloween Demos & Judging",
      description: "Present your project to the judges!"
    },
    {
      date: "April 12",
      title: "Winners Announced",
      description: "Awards ceremony and closing celebrations"
    }
  ];

  return (
    <section id="timeline" ref={sectionRef} className="section-padding py-28 bg-halloween-darkPurple">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-halloween-orange/20 text-halloween-orange mb-4 border border-halloween-orange/30 hidden-element opacity-0">
            <span className="text-sm font-medium">Key Dates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hidden-element opacity-0">
            <span className="text-halloween-ghostWhite">Event </span>
            <span className="text-halloween-orange">Timeline</span>
          </h2>
          <p className="text-halloween-ghostWhite/70 max-w-2xl mx-auto hidden-element opacity-0">
            Mark your calendar with these important dates. From registration to the final award ceremony, 
            here's everything you need to know about CODEARAMBH.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-halloween-orange via-halloween-lavender to-halloween-blue"></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 hidden-element opacity-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div 
                  className={`glass-card p-6 ${
                    index % 2 === 0 ? 'orange-glow' : 'purple-glow'
                  }`}
                >
                  <div 
                    className={`inline-block px-3 py-1 rounded-full mb-3 ${
                      index % 2 === 0 
                        ? 'bg-halloween-orange/20 text-halloween-orange border border-halloween-orange/30' 
                        : 'bg-halloween-lavender/20 text-halloween-lavender border border-halloween-lavender/30'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-halloween-ghostWhite">{item.title}</h3>
                  <p className="text-halloween-ghostWhite/70">{item.description}</p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full ${index % 2 === 0 ? 'bg-halloween-orange' : 'bg-halloween-lavender'} z-10`}></div>
              </div>
              
              <div className="flex-1 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
