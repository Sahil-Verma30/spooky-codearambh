
import React, { useEffect, useRef, useState } from 'react';
import { Ghost } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Registration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    theme: '',
    role: 'participant',
    experience: 'beginner',
    teamStatus: 'individual',
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "Check your email for confirmation and next steps.",
        variant: "default",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        teamName: '',
        theme: '',
        role: 'participant',
        experience: 'beginner',
        teamStatus: 'individual',
        termsAccepted: false
      });
    }, 1500);
  };

  return (
    <section id="register" ref={sectionRef} className="section-padding py-28 bg-halloween-darkPurple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Ghost className="absolute top-20 left-20 text-halloween-ghostWhite" size={80} />
        <Ghost className="absolute bottom-20 right-20 text-halloween-ghostWhite" size={60} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-halloween-orange opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-halloween-orange/20 text-halloween-orange mb-4 border border-halloween-orange/30 hidden-element opacity-0">
            <span className="text-sm font-medium">Join The Haunting</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hidden-element opacity-0">
            <span className="text-halloween-ghostWhite">Register for </span>
            <span className="text-halloween-orange">CODEARAMBH</span>
          </h2>
          <p className="text-halloween-ghostWhite/70 max-w-2xl mx-auto hidden-element opacity-0">
            Secure your spot in the spookiest hackathon of the year. 
            Fill out the form below to begin your Halloween coding adventure.
          </p>
        </div>

        <div className="max-w-3xl mx-auto hidden-element opacity-0">
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-halloween-ghostWhite mb-2">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-halloween-ghostWhite mb-2">Email Address</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="teamName" className="block text-halloween-ghostWhite mb-2">Team Name</label>
                  <Input
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter your team name"
                  />
                </div>
                
                <div>
                  <label htmlFor="theme" className="block text-halloween-ghostWhite mb-2">Select Theme</label>
                  <Select 
                    name="theme" 
                    value={formData.theme} 
                    onValueChange={(value) => handleSelectChange("theme", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange">
                      <SelectValue placeholder="Select a theme" />
                    </SelectTrigger>
                    <SelectContent className="bg-halloween-darkPurple border border-white/10 text-halloween-ghostWhite">
                      <SelectItem value="ai">AI & Machine Learning</SelectItem>
                      <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                      <SelectItem value="ar">AR/VR Experiences</SelectItem>
                      <SelectItem value="health">Healthcare Innovation</SelectItem>
                      <SelectItem value="social">Social Impact</SelectItem>
                      <SelectItem value="gamedev">Game Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-halloween-ghostWhite mb-2">Your Role</label>
                  <Select 
                    name="role" 
                    value={formData.role} 
                    onValueChange={(value) => handleSelectChange("role", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-halloween-darkPurple border border-white/10 text-halloween-ghostWhite">
                      <SelectItem value="participant">Participant</SelectItem>
                      <SelectItem value="mentor">Mentor</SelectItem>
                      <SelectItem value="sponsor">Sponsor</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-halloween-ghostWhite mb-2">Coding Experience</label>
                  <Select 
                    name="experience" 
                    value={formData.experience} 
                    onValueChange={(value) => handleSelectChange("experience", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-halloween-darkPurple border border-white/10 text-halloween-ghostWhite">
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                      <SelectItem value="expert">Expert (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="teamStatus" className="block text-halloween-ghostWhite mb-2">Team Status</label>
                  <Select 
                    name="teamStatus" 
                    value={formData.teamStatus} 
                    onValueChange={(value) => handleSelectChange("teamStatus", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange">
                      <SelectValue placeholder="Select team status" />
                    </SelectTrigger>
                    <SelectContent className="bg-halloween-darkPurple border border-white/10 text-halloween-ghostWhite">
                      <SelectItem value="individual">Registering as Individual</SelectItem>
                      <SelectItem value="team">I have a team</SelectItem>
                      <SelectItem value="lookingForTeam">Looking for team members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="termsAccepted" className="ml-3 text-halloween-ghostWhite/70">
                    I agree to the <a href="#" className="text-halloween-orange">Terms and Conditions</a> and <a href="#" className="text-halloween-orange">Code of Conduct</a> for CODEARAMBH.
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ghost-btn orange-glow px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Register Now'
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <Ghost className="mx-auto text-halloween-orange mb-4" size={28} />
              <h3 className="text-halloween-ghostWhite font-medium mb-2">Limited Spots</h3>
              <p className="text-halloween-ghostWhite/70 text-sm">Only 500 hackers can participate. Register early!</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-halloween-lavender mb-4">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <h3 className="text-halloween-ghostWhite font-medium mb-2">Mark Your Calendar</h3>
              <p className="text-halloween-ghostWhite/70 text-sm">October 29-31, 2023. Don't miss out!</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-halloween-orange mb-4">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <h3 className="text-halloween-ghostWhite font-medium mb-2">Confirmation Email</h3>
              <p className="text-halloween-ghostWhite/70 text-sm">You'll receive details after registration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
