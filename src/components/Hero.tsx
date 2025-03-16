import React, { useEffect, useRef } from "react";
import { Skull, Ghost, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;

      const icons = heroRef.current.querySelectorAll(".floating-icon");

      icons.forEach((icon, index) => {
        const speed = index % 2 === 0 ? 20 : -20;
        const iconElement = icon as HTMLElement;
        iconElement.style.transform = `translate(${x * speed}px, ${
          y * speed
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(26, 31, 44, 0) 70%)`,
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img src='/codearambh-hackathon.jpg' className="bg-cover w-full" />
        {/* <Ghost
          className="absolute top-1/4 left-1/5 text-halloween-ghostWhite/5 floating-icon animate-float"
          size={80}
        />
        <Skull
          className="absolute bottom-1/4 right-1/5 text-halloween-ghostWhite/5 floating-icon animate-float"
          style={{ animationDelay: "1s" }}
          size={70}
        />
        <Code
          className="absolute top-1/2 right-1/4 text-halloween-ghostWhite/5 floating-icon animate-float"
          style={{ animationDelay: "2s" }}
          size={60}
        />
        <Ghost
          className="absolute bottom-1/3 left-1/4 text-halloween-ghostWhite/5 floating-icon animate-float"
          style={{ animationDelay: "3s" }}
          size={50}
        /> */}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* <div className="opacity-0 fade-in-up">
          <div className="inline-block px-3 py-1 rounded-full bg-halloween-orange/20 text-halloween-orange mb-4 border border-halloween-orange/30">
            <span className="text-sm font-medium">March 28-29, 2025</span>
          </div>
        </div> */}

        {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 fade-in-up delay-100">
          <span className="text-halloween-ghostWhite">CODE</span>
          <span className="text-halloween-orange">ARAMBH</span>
        </h1> */}

        {/* <div className="max-w-3xl mx-auto opacity-0 fade-in-up delay-200">
          <p className="text-xl md:text-2xl text-halloween-ghostWhite/80 mb-8">
            Unleash your coding powers at the spookiest hackathon of the year.
            Build, collaborate, and innovate with a Halloween twist.
          </p>
        </div> */}

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-up delay-300">
          <Link
            to="/register"
            className="ghost-btn orange-glow text-lg px-8 py-4"
          >
            Register Now
          </Link>
          <a
            href="#about"
            className="ghost-btn text-lg px-8 py-4 border-halloween-lavender hover:bg-halloween-lavender/20"
          >
            Learn More
          </a>
        </div> */}

        {/* <div className="mt-12 flex justify-center items-center space-x-8 opacity-0 fade-in-up delay-400">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-halloween-ghostWhite">
              24
            </div>
            <div className="text-sm text-halloween-ghostWhite/60">Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-halloween-ghostWhite">
              4
            </div>
            <div className="text-sm text-halloween-ghostWhite/60">Tracks</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-halloween-orange">
              {" "}
              ₹15 K
            </div>
            <div className="text-sm text-halloween-ghostWhite/60">
              In Prizes
            </div>
          </div>
        </div> */}

        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 fade-in-up delay-500">
          <a
            href="#about"
            className="text-halloween-ghostWhite/60 hover:text-halloween-ghostWhite transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
