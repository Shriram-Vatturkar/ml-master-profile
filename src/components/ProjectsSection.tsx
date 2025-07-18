
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: "legal-search-engine",
      title: "Legal Search Engine: RAG and GraphRAG-based Legal Document Retrieval",
      description: "Developed a deep learning-powered legal search engine for corporate law using RAG and GraphRAG for precise document retrieval and summarization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      tags: ["RAG", "GraphRAG", "Deep Learning", "NLP", "Legal Tech"],
      githubUrl: "#"
    },
    {
      id: "cognitive-disorder-identification",
      title: "Cognitive Disorder Identification: Dementia Stages using Deep Learning",
      description: "Developed a model which classifies MRI of brain scans into dementia stages using machine learning and deep learning techniques.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      tags: ["Deep Learning", "CNN", "Medical AI", "MRI Analysis", "Classification"],
      githubUrl: "#"
    },
    {
      id: "stock-price-predictor",
      title: "Stock Price Predictor",
      description: "Machine learning model that predicts stock prices using LSTM networks and historical market data.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "LSTM", "Python", "TensorFlow"],
      githubUrl: "#"
    },
    {
      id: "real-time-object-detection",
      title: "Real-time Object Detection",
      description: "Computer vision application that detects and tracks objects in real-time using YOLO and OpenCV.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Computer Vision", "OpenCV", "YOLO", "Python"],
      githubUrl: "#"
    },
    {
      id: "stock-watch",
      title: "Stock Watch: Realtime Stock Market Analysis using Machine Learning",
      description: "Created a Web Application which analyzes real time sentiment of news headlines related to stock market and implemented as a Machine Learning model.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "Flask", "ReactJS", "Google API", "Sentiment Analysis"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "face-shape-analyzer",
      title: "Face Shape Analyzer: Find out your Face Shape",
      description: "Developed an offline model which inputs facial images and classifies face shape based on different categories using OpenCV and Haar Cascade.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      tags: ["Computer Vision", "OpenCV", "Haar Cascade", "Image Processing", "Classification"],
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
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
