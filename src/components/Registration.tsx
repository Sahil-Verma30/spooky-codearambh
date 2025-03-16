
import React, { useEffect, useRef, useState } from 'react';
import { Ghost, FileQuestion, AlertTriangle, FileCheck2, Clock } from 'lucide-react';
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TeamMember = {
  name: string;
  email: string;
  phone: string;
};

const Registration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    teamName: '',
    theme: '',
    teamSize: '2',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamLeaderPhone: '',
    pptLink: '',
    videoLink: '',
    termsAccepted: false
  });
  
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', email: '', phone: '' },
    { name: '', email: '', phone: '' },
    { name: '', email: '', phone: '' }
  ]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openGuidelines, setOpenGuidelines] = useState(false);

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

  useEffect(() => {
    // Adjust team members array based on team size
    const size = parseInt(formData.teamSize);
    if (size >= 2 && size <= 4) {
      // Create new array with the correct number of members (minus the team leader)
      const newTeamMembers = [...teamMembers];
      // Ensure we have the right number of members
      while (newTeamMembers.length < size - 1) {
        newTeamMembers.push({ name: '', email: '', phone: '' });
      }
      while (newTeamMembers.length > size - 1) {
        newTeamMembers.pop();
      }
      setTeamMembers(newTeamMembers);
    }
  }, [formData.teamSize]);

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

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const validateForm = (): boolean => {
    // Basic validation
    if (!formData.teamName || !formData.theme || !formData.teamLeaderName || 
        !formData.teamLeaderEmail || !formData.teamLeaderPhone || 
        !formData.pptLink || !formData.videoLink) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    // Validate team members based on team size
    const teamSize = parseInt(formData.teamSize);
    for (let i = 0; i < teamSize - 1; i++) {
      if (!teamMembers[i].name || !teamMembers[i].email || !teamMembers[i].phone) {
        toast({
          title: "Missing Team Member Information",
          description: `Please complete all fields for team member ${i + 1}.`,
          variant: "destructive",
        });
        return false;
      }
    }

    if (!formData.termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "Check your email for confirmation and next steps.",
        variant: "default",
      });
      setIsSubmitting(false);
      // Reset form data
      setFormData({
        teamName: '',
        theme: '',
        teamSize: '2',
        teamLeaderName: '',
        teamLeaderEmail: '',
        teamLeaderPhone: '',
        pptLink: '',
        videoLink: '',
        termsAccepted: false
      });
      setTeamMembers([
        { name: '', email: '', phone: '' },
        { name: '', email: '', phone: '' },
        { name: '', email: '', phone: '' }
      ]);
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
          
          {/* Guidelines Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 border border-halloween-orange/30 bg-halloween-orange/10 text-halloween-orange hover:bg-halloween-orange/20">
                <FileQuestion className="w-4 h-4 mr-2" />
                Submission Guidelines
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-halloween-darkPurple border border-white/10 text-halloween-ghostWhite max-w-2xl max-h-lvh overflow-auto">
            <DialogHeader>
                <DialogTitle className="text-halloween-orange text-xl">Submission Guidelines</DialogTitle>
                <DialogDescription className="text-halloween-ghostWhite/70">
                  Follow these guidelines for your submission to be accepted.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="space-y-2">
                  <h3 className="text-halloween-orange flex items-center text-lg">
                    <FileCheck2 className="w-5 h-5 mr-2" />
                    Submission Requirements
                  </h3>
                  <ul className="list-disc pl-6 text-halloween-ghostWhite/90 space-y-2">
                    <li><strong>Video:</strong> Max 1 minutes explaination of your unique idea</li>
                    <li><strong>PPT:</strong> Min 6 slides and Max 10 slides, PDF/PPTX format</li>
                    <li>PPT should have the problem statement</li>
                    <li>In PPT include your unique solution</li>
                    <li>How your solution impacts the real world</li>
                    <li>Future scope</li>
                    <li>Conclusion</li>
                    <li>Tech stack</li>
                    <li>File names must include team name</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-halloween-orange flex items-center text-lg">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Important Notes
                  </h3>
                  <ul className="list-disc pl-6 text-halloween-ghostWhite/90 space-y-2">
                    <li><strong>Deadline:</strong> March 25th 11:59 PM</li>
                    <li>No edits allowed after submission</li>
                    <li>Max team size: 4 members</li>
                    <li>Make sure Google Drive link is accessible</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-red-500 flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-2" />
                    Rejection Reasons
                  </h3>
                  <ul className="list-disc pl-6 text-halloween-ghostWhite/90 space-y-2">
                    <li>Invalid file formats</li>
                    <li>Missing team members info</li>
                    <li>Google Drive access denied</li>
                    <li>Late submissions</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="max-w-3xl mx-auto hidden-element opacity-0">
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Team Information */}
                <div className="md:col-span-2">
                  <h3 className="text-halloween-orange text-xl mb-4 border-b border-halloween-orange/20 pb-2">Team Information</h3>
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
                  <label htmlFor="theme" className="block text-halloween-ghostWhite mb-2">Preferred Theme</label>
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
                  <label htmlFor="teamSize" className="block text-halloween-ghostWhite mb-2">Team Size</label>
                  <Select 
                    name="teamSize" 
                    value={formData.teamSize} 
                    onValueChange={(value) => handleSelectChange("teamSize", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent className="bg-halloween-darkPurple border border-white/10 text-halloween-ghostWhite">
                      <SelectItem value="2">2 Members</SelectItem>
                      <SelectItem value="3">3 Members</SelectItem>
                      <SelectItem value="4">4 Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Team Leader Section */}
                <div className="md:col-span-2">
                  <h3 className="text-halloween-orange text-xl mb-4 border-b border-halloween-orange/20 pb-2">Team Leader Details</h3>
                </div>
                
                <div>
                  <label htmlFor="teamLeaderName" className="block text-halloween-ghostWhite mb-2">Team Leader Name</label>
                  <Input
                    id="teamLeaderName"
                    name="teamLeaderName"
                    value={formData.teamLeaderName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter team leader's name"
                  />
                </div>
                
                <div>
                  <label htmlFor="teamLeaderEmail" className="block text-halloween-ghostWhite mb-2">Email Address</label>
                  <Input
                    type="email"
                    id="teamLeaderEmail"
                    name="teamLeaderEmail"
                    value={formData.teamLeaderEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter team leader's email"
                  />
                </div>
                
                <div>
                  <label htmlFor="teamLeaderPhone" className="block text-halloween-ghostWhite mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    id="teamLeaderPhone"
                    name="teamLeaderPhone"
                    value={formData.teamLeaderPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter team leader's phone"
                  />
                </div>
                
                {/* Team Members Section - Only show if team size is selected */}
                {parseInt(formData.teamSize) > 1 && (
                  <>
                    <div className="md:col-span-2">
                      <h3 className="text-halloween-orange text-xl mb-4 border-b border-halloween-orange/20 pb-2">Team Members Details</h3>
                    </div>
                    
                    {teamMembers.slice(0, parseInt(formData.teamSize) - 1).map((member, index) => (
                      <div key={index} className="md:col-span-2 p-4 border border-white/10 rounded-lg bg-halloween-purple/30">
                        <h4 className="text-halloween-ghostWhite mb-3">Team Member {index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-halloween-ghostWhite mb-2">Name</label>
                            <Input
                              value={member.name}
                              onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                              required
                              className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                              placeholder="Enter name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-halloween-ghostWhite mb-2">Email</label>
                            <Input
                              type="email"
                              value={member.email}
                              onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                              required
                              className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                              placeholder="Enter email"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-halloween-ghostWhite mb-2">Phone</label>
                            <Input
                              type="tel"
                              value={member.phone}
                              onChange={(e) => handleTeamMemberChange(index, 'phone', e.target.value)}
                              required
                              className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                              placeholder="Enter phone"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                
                {/* Submission Section */}
                <div className="md:col-span-2">
                  <h3 className="text-halloween-orange text-xl mb-4 border-b border-halloween-orange/20 pb-2">Project Submission</h3>
                </div>
                
                <div>
                  <label htmlFor="pptLink" className="block text-halloween-ghostWhite mb-2">PPT Submission Link</label>
                  <Input
                    id="pptLink"
                    name="pptLink"
                    value={formData.pptLink}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter Google Drive link to PPT"
                  />
                </div>
                
                <div>
                  <label htmlFor="videoLink" className="block text-halloween-ghostWhite mb-2">Pitch Video Link</label>
                  <Input
                    id="videoLink"
                    name="videoLink"
                    value={formData.videoLink}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-halloween-purple/50 border border-white/10 rounded-lg text-halloween-ghostWhite focus:outline-none focus:border-halloween-orange"
                    placeholder="Enter Google Drive link to video"
                  />
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
              <p className="text-halloween-ghostWhite/70 text-sm">Only 100 hackers can participate. Register early!</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-halloween-lavender mb-4">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <h3 className="text-halloween-ghostWhite font-medium mb-2">Mark Your Calendar</h3>
              <p className="text-halloween-ghostWhite/70 text-sm">March 28-29, 2025. Don't miss out!</p>
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
