import React, { useEffect, useRef, useState } from "react";
import { Skull, Ghost, Code } from "lucide-react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { FaDiscord } from "react-icons/fa";

const targetDate = new Date("2025-04-11T00:00:00").getTime(); // Set the hackathon start date

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div
      id="home"
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
      </div>

      {/* Halloween decorations */}
      <div className="absolute top-16 right-10 text-purple-500 text-5xl">🦇</div>
      <div className="absolute bottom-5 left-10 text-gray-500 text-6xl">🕷️</div> 

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="opacity-0 fade-in-up flex justify-center items-center gap-3 animate-float">
          <span className="text-orange-500 text-3xl animate-bounce">🎃</span>
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-orange-700 to-orange-500 text-black mb-4 border border-orange-300 shadow-lg shadow-orange-500/50 neon-glow">
            <span className="text-lg font-bold tracking-widest spooky-text">
              👻 April 11-12, 2025 👻
            </span>
          </div>
          <span className="text-orange-500 text-2xl animate-float-slow">🦇</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 fade-in-up delay-100 spooky-text">
          <span className="text-orange-500">CODE</span>
          <span className="text-purple-400">ARAMBH</span>
        </h1>

        {/* Countdown Timer */}
        <div className="bg-black/50 p-6 rounded-lg border border-purple-500 shadow-md shadow-purple-500/50 max-w-md mx-auto mt-4">
          <h2 className="text-3xl font-bold text-orange-500 spooky-text mb-4">
            Registration Ends In
          </h2>
          <div className="flex justify-center gap-2 text-center spooky-text text-2xl text-orange-400 ">
            <div className="p-4 border border-purple-500 rounded-md bg-black/30">
              <span className="text-4xl font-extrabold">{timeLeft.days}</span>
              <div className="text-sm">Days</div>
            </div>
            <div className="p-4 border border-purple-500 rounded-md bg-black/30">
              <span className="text-4xl font-extrabold">{timeLeft.hours}</span>
              <div className="text-sm">Hours</div>
            </div>
            <div className="p-3 md:p-4 border border-purple-500 rounded-md bg-black/30">
              <span className="text-4xl font-extrabold">{timeLeft.minutes}</span>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="p-2 md:p-4 border border-purple-500 rounded-md bg-black/30">
              <span className="text-4xl font-extrabold ">{timeLeft.seconds}</span>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 fade-in-up delay-300 mt-6">
          <Link
            to="/register"
            className="ghost-btn flex items-center bg-orange-600 text-black text-lg px-8 py-4 border border-orange-400"
          >
            Register Now
          </Link>
          <Link
            to="https://discord.gg/CGdZTSPkJE"
            className="ghost-btn flex items-center text-lg px-8 py-4 border-purple-500 hover:bg-purple-600/20"
          >
          <FaDiscord size={40} className="text-purple-500 mr-2" /> 
           Join Discord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
