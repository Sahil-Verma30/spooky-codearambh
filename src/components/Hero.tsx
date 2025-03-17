import React, { useEffect, useRef } from "react";
import { Skull, Ghost, Code } from "lucide-react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

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
        const speed = index % 2 === 0 ? 15 : -15;
        const iconElement = icon as HTMLElement;
        iconElement.style.transform = `translate(${x * speed}px, ${
          y * speed
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 bg-black"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(255, 136, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 80%)`,
      }}
    >
      {/* Floating spooky elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Ghost
          className="absolute top-1/4 left-1/5 text-orange-300/10 floating-icon animate-float"
          size={80}
        />
        <Skull
          className="absolute bottom-1/4 right-1/5 text-orange-300/10 floating-icon animate-float"
          size={70}
          style={{ animationDelay: "1s" }}
        />
        <Code
          className="absolute top-1/2 right-1/4 text-orange-300/10 floating-icon animate-float"
          size={60}
          style={{ animationDelay: "2s" }}
        />
        <Code
          className="absolute top-2/3 right-2/4 text-orange-300/10 floating-icon animate-float"
          size={60}
          style={{ animationDelay: "2s" }}
        />
        <Skull
          className="absolute top-1/4 right-1/3 text-orange-300/10 floating-icon animate-float"
          size={70}
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Halloween decorations */}
{/*       <div className="absolute top-14 left-10 text-orange-500 text-6xl">🎃</div> */}
      <div className="absolute top-16 right-10 text-purple-500 text-5xl">🦇</div>
      <div className="absolute bottom-5 left-10 text-gray-500 text-6xl">🕷️</div>
      /* <div className="absolute bottom-5 right-10 text-red-500 text-6xl">🕸️</div> */

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* <div className="opacity-0 fade-in-up">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-600/30 text-orange-400 mb-4 border border-orange-500">
            <span className="text-sm font-medium">March 28-29, 2025</span>
          </div>
        </div> */}
        <div className="opacity-0 fade-in-up flex justify-center items-center gap-3 animate-float">
          {/* Spooky Pumpkin Icon */}
          <span className="text-orange-500 text-3xl animate-bounce">🎃</span>

          {/* Date with Haunted Glow */}
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-orange-700 to-orange-500 text-black mb-4 border border-orange-300 shadow-lg shadow-orange-500/50 neon-glow">
            <span className="text-lg  font-bold tracking-widest spooky-text">
              👻 March 28-29, 2025 👻
            </span>
          </div>

          {/* Flying Bat Icon */}
          <span className="text-orange-500 text-2xl animate-float-slow">
            🦇
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 fade-in-up delay-100">
          <span className="text-orange-500 font-spooky">CODE</span>
          <span className="text-purple-400 font-spooky">ARAMBH</span>
        </h1>

        <div className="max-w-3xl mx-auto opacity-0 fade-in-up delay-200">
          <p className="text-xl md:text-2xl text-orange-300 mb-8">
            Unleash your coding powers at the spookiest hackathon of the year.
            Build, collaborate, and innovate with a Halloween twist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-up delay-300">
          <Link
            to="/register"
            className="ghost-btn bg-orange-600 text-black text-lg px-8 py-4 border border-orange-400"
          >
            Register Now
          </Link>
          <a
            href="#about"
            className="ghost-btn text-lg px-8 py-4 border-purple-500 hover:bg-purple-600/20"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
