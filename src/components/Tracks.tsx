
import React, { useEffect, useRef } from 'react';
import { Ghost, Skull, Code, FlameKindling, Beaker } from 'lucide-react';

const Tracks = () => {
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

  const trackItems = [
    {
      icon: <Ghost className="h-10 w-10 text-halloween-orange" />,
      title: "Haunted AI",
      description: "Build AI-powered applications with a spooky twist. From ghost detection to horror story generation.",
      color: "orange"
    },
    {
      icon: <Skull className="h-10 w-10 text-halloween-lavender" />,
      title: "Crypto Crypt",
      description: "Create blockchain and Web3 applications that bring the spirit of Halloween to the decentralized world.",
      color: "lavender"
    },
    {
      icon: <FlameKindling className="h-10 w-10 text-halloween-orange" />,
      title: "Smart Education",
      description: "Revolutionize learning with technology! Smart Education focuses on creating innovative solutions that make education more accessible and engaging.",
      color: "orange"
    },
    // {
    //   icon: <Code className="h-10 w-10 text-halloween-lavender" />,
    //   title: "Monster Mobile",
    //   description: "Summon mobile applications that transform the way users interact with their devices during spooky season.",
    //   color: "lavender"
    // },
    {
      icon: <Beaker className="h-10 w-10 text-halloween-orange" />,
      title: "Open Innovation",
      description: "Break the boundaries of traditional problem-solving! Open Innovation encourages creative minds to develop impactful solutions across any domain.",
      color: "orange"
    }
  ];

  return (
    <section 
      id="tracks" 
      ref={sectionRef} 
      className="section-padding py-28 relative"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(26, 31, 44, 0.95), rgba(26, 31, 44, 0.8)), 
          url('/lovable-uploads/824de581-d495-4db3-8517-b11841933452.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-halloween-purple to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-halloween-purple to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-halloween-lavender/20 text-halloween-lavender mb-4 border border-halloween-lavender/30 hidden-element opacity-0">
            <span className="text-sm font-medium">Hackathon Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hidden-element opacity-0">
            <span className="text-halloween-ghostWhite">Spooky </span>
            <span className="text-halloween-orange">Tracks</span>
          </h2>
          <p className="text-halloween-ghostWhite/70 max-w-2xl mx-auto hidden-element opacity-0">
            Choose your haunted path for the hackathon. Each track offers unique challenges 
            and opportunities to showcase your technical wizardry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trackItems.map((track, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300 ${
                track.color === "orange" ? "orange-glow" : "purple-glow"
              } hidden-element opacity-0`}
            >
              <div className="flex items-center mb-6">
                <div 
                  className={`p-3 rounded-lg ${
                    track.color === "orange" 
                      ? "bg-halloween-orange/20" 
                      : "bg-halloween-lavender/20"
                  }`}
                >
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold ml-4 text-halloween-ghostWhite">{track.title}</h3>
              </div>
              <p className="text-halloween-ghostWhite/70">{track.description}</p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center text-sm">
                  <div 
                    className={`w-2 h-2 rounded-full ${
                      track.color === "orange" 
                        ? "bg-halloween-orange" 
                        : "bg-halloween-lavender"
                    } mr-2`}
                  ></div>
                  <span className="text-halloween-ghostWhite/60">Special prizes available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
