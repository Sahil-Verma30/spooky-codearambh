import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logos from "../components/assests/log.gif"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate(`/#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setMobileMenuOpen(false); // Close mobile menu when clicking a link
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 pt-2 z-50 transition-all duration-300 ease-in-out bg-halloween-darkPurple/90",
        isScrolled
          ? "py-2 bg-halloween-darkPurple/90 backdrop-blur-lg shadow-lg"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-halloween-ghostWhite flex items-center"
          >
            <img src={logos} className='w-30 h-14'></img>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <nav className="flex space-x-6">
              {["about", "timeline", "tracks", "prizes", "faq"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <Link
                to="/contact-us"
                className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <Link to="/register" className="ghost-btn orange-glow">
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-halloween-ghostWhite"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen) */}
      <div
        className={cn(
          "fixed inset-0 bg-halloween-darkPurple/95 flex flex-col items-center justify-center z-50 transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close Button (Fixed at the Top Right) */}
        <button
          className="absolute top-6 right-6 text-halloween-ghostWhite text-3xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 items-center text-xl mt-8">
          {["about", "timeline", "tracks", "prizes", "faq"].map((item) => (
            <a
              key={item}
              href={`/#${item}`}
              className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Link
            to="/contact-us"
            className="text-halloween-ghostWhite hover:text-halloween-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/register"
            className="ghost-btn orange-glow mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
