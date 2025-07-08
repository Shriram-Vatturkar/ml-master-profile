
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "Neural Style Transfer",
      description: "Deep learning model that applies artistic styles to images using convolutional neural networks and PyTorch.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      tags: ["Python", "PyTorch", "Computer Vision", "AI"],
      githubUrl: "#",
      featured: true
    },
    {
      title: "Smart Chatbot Assistant",
      description: "AI-powered chatbot using natural language processing to provide intelligent responses and task automation.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      tags: ["NLP", "Python", "FastAPI", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Stock Price Predictor",
      description: "Machine learning model that predicts stock prices using LSTM networks and historical market data.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "LSTM", "Python", "TensorFlow"],
      githubUrl: "#"
    },
    {
      title: "Real-time Object Detection",
      description: "Computer vision application that detects and tracks objects in real-time using YOLO and OpenCV.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Computer Vision", "OpenCV", "YOLO", "Python"],
      githubUrl: "#",
      featured: true
    },
    {
      title: "Personal Finance Tracker",
      description: "Full-stack web application for tracking expenses and visualizing financial data with interactive charts.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "D3.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Music Recommendation System",
      description: "Collaborative filtering system that recommends music based on user preferences and listening history.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Recommendation System", "Python", "Scikit-learn", "Pandas"],
      githubUrl: "#"
    }
  ];

  const filters = ["All", "AI", "Web Dev", "Python", "Machine Learning"];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my work in artificial intelligence, machine learning, and software development. 
            Each project demonstrates different aspects of my technical skills and problem-solving approach.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className="transition-all hover:scale-105"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
