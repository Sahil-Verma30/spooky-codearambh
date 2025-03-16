
import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqItems = [
    {
      question: "Who can participate in CODEARAMBH?",
      answer: "CODEARAMBH is open to students and coding enthusiasts of all skill levels. Whether you're a beginner or an experienced developer, everyone is welcome to join the hackathon!"
    },
    {
      question: "Do I need to have a team to register?",
      answer: "Yes, you can register as an duo and Teams can have up to 4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in CODEARAMBH is completely free! We believe in making coding accessible to everyone."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you plan to use! We'll provide food, drinks, and a spooky atmosphere."
    },
    {
      question: "Will there be food and drinks?",
      answer: "Yes, we'll provide meals, snacks, and drinks throughout the event. We'll also have special Halloween-themed treats!"
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "No, all coding must be done during the 24-hour hackathon period. You can brainstorm ideas beforehand, but no pre-written code is allowed."
    },
    // {
    //   question: "Are there any hardware resources available?",
    //   answer: "Yes, we'll have a hardware lab with various sensors, microcontrollers, and other components that participants can use. However, quantities are limited, so bring your own hardware if possible."
    // },
    {
      question: "How will projects be judged?",
      answer: "Projects will be judged based on creativity, technical complexity, practicality, presentation, and how well they fit the Halloween theme. Each track will also have specific criteria relevant to its focus area."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="section-padding py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-halloween-lavender/20 text-halloween-lavender mb-4 border border-halloween-lavender/30 hidden-element opacity-0">
            <span className="text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hidden-element opacity-0">
            <span className="text-halloween-ghostWhite">Frequently Asked </span>
            <span className="text-halloween-orange">Questions</span>
          </h2>
          <p className="text-halloween-ghostWhite/70 max-w-2xl mx-auto hidden-element opacity-0">
            Find answers to common questions about CODEARAMBH. If your question isn't 
            answered below, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 hidden-element opacity-0">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  index % 2 === 0 ? 'orange-glow' : 'purple-glow'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-lg font-medium text-halloween-ghostWhite">{item.question}</span>
                  <span className={`ml-6 flex-shrink-0 ${
                    index % 2 === 0 ? 'text-halloween-orange' : 'text-halloween-lavender'
                  }`}>
                    {openItems.includes(index) ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-halloween-ghostWhite/70">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center hidden-element opacity-0">
            <p className="text-halloween-ghostWhite/70 mb-6">
              Still have questions? We're here to help!
            </p>
            <Link 
              to="/contact-us" 
              className="ghost-btn inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M5 7.5H19A2.5 2.5 0 0 1 21.5 10v10A2.5 2.5 0 0 1 19 22.5H5A2.5 2.5 0 0 1 2.5 20V10A2.5 2.5 0 0 1 5 7.5Z"></path>
                <path d="m22 10-8.35 5.5a2.5 2.5 0 0 1-3.3 0L2 10"></path>
                <path d="M14 12.5V5a2 2 0 1 0-4 0v7.5"></path>
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
