import React, { useEffect, useRef } from "react";
import { MapPin, PhoneCall, Mail, Ghost, Skull, Code, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!contactRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;

      const icons = contactRef.current.querySelectorAll(".floating-icon");

      icons.forEach((icon, index) => {
        const speed = index % 2 === 0 ? 20 : -20;
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
      ref={contactRef}
      className="relative min-h-screen my-6 flex flex-col justify-center items-center overflow-hidden px-6 pt-20"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(26, 31, 44, 0) 70%)`,
      }}
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Phone
          className="absolute top-1/4 left-1/5 text-halloween-ghostWhite/5 floating-icon"
          size={80}
        />
        <Skull
          className="absolute bottom-1/4 right-1/5 text-halloween-ghostWhite/5 floating-icon"
          size={70}
        />
        <Code
          className="absolute top-1/2 right-1/4 text-halloween-ghostWhite/5 floating-icon"
          size={60}
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-4xl font-bold text-halloween-ghostWhite opacity-0 fade-in-up delay-100">
          Get in <span className="text-halloween-orange">Touch</span>
        </h2>

        <p className="text-xl md:text-2xl text-halloween-ghostWhite/80 mt-4 opacity-0 fade-in-up delay-200">
          Have questions or need assistance? We're here to help!
        </p>

        {/* Contact Details */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="flex flex-col items-center opacity-0 fade-in-up delay-300">
            <MapPin size={40} className="text-halloween-orange" />
            <h3 className="text-2xl font-semibold text-halloween-ghostWhite mt-2">
              Address
            </h3>
            <p className="text-lg text-halloween-ghostWhite/80 text-center">
              Hi-Tech Institute of Engineering & Technology, Ghaziabad, UP –
              201015
            </p>
          </div>

          <div className="flex flex-col items-center opacity-0 fade-in-up delay-400">
            <PhoneCall size={40} className="text-halloween-orange" />
            <h3 className="text-2xl font-semibold text-halloween-ghostWhite mt-2">
              Phone
            </h3>
            <p className="text-lg text-halloween-ghostWhite/80">
              <a
                href="tel:+911234567890"
                className="hover:text-halloween-orange transition"
              >
                +91 12345 67890
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center opacity-0 fade-in-up delay-500">
            <Mail size={40} className="text-halloween-orange" />
            <h3 className="text-2xl font-semibold text-halloween-ghostWhite mt-2">
              Email
            </h3>
            <p className="text-lg text-halloween-ghostWhite/80">
              <a
                href="mailto:info@hitech.edu.in"
                className="hover:text-halloween-orange transition"
              >
                info@hitech.edu.in
              </a>
            </p>
          </div>
        </div>

        {/* Google Maps & Coordinators */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Google Maps */}
          <div className="w-full h-[350px] opacity-0 fade-in-up delay-600">
            <iframe
              title="Hi-Tech Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5454092294053!2d77.49128877550228!3d28.673327175642513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf2c4cac27f99%3A0xd9961659aee6d5b2!2sHi-Tech%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1741631212223!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-2xl"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

          {/* Coordinators */}
          <div className="text-center md:text-left opacity-0 fade-in-up delay-700">
            <h2 className="text-3xl font-semibold text-halloween-ghostWhite">
              Student Coordinators
            </h2>
            <ul className="text-xl text-halloween-ghostWhite/80 mt-4 space-y-2">
              <li>
                Name:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-halloween-orange hover:underline"
                >
                  +91 12345 67890
                </a>
              </li>
              <li>
                Name:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-halloween-orange hover:underline"
                >
                  +91 12345 67890
                </a>
              </li>
            </ul>

            <h2 className="text-3xl font-semibold text-halloween-ghostWhite mt-8">
              Faculty Coordinators
            </h2>
            <ul className="text-xl text-halloween-ghostWhite/80 mt-4 space-y-2">
              <li>
                Name:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-halloween-orange hover:underline"
                >
                  +91 12345 67890
                </a>
              </li>
              <li>
                Name:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-halloween-orange hover:underline"
                >
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
