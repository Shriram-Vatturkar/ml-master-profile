
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Shriram-Vatturkar", "_blank", "noopener noreferrer");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/shriram-vatturkar-32a40a26b/", "_blank", "noopener noreferrer");
  };

  const handleEmailClick = () => {
    window.open("mailto:shriram.vatturkar@gmail.com", "_blank", "noopener noreferrer");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center animate-float">
              <img
                src="/lovable-uploads/fd29f6a1-e9c1-4913-a2fe-2d2fe1dc09b0.png"
                alt="Profile"
                className="w-30 h-30 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Shriram Vatturkar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
            AI & ML Enthusiast | Developer | Problem Solver
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Artificial Intelligence and Machine Learning student passionate about pushing the boundaries of technology 
              and aiming to solve real-world problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:scale-110 transition-transform"
              onClick={handleGithubClick}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:scale-110 transition-transform"
              onClick={handleLinkedinClick}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:scale-110 transition-transform"
              onClick={handleEmailClick}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full hover:scale-105 transition-all"
          >
            View My Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
