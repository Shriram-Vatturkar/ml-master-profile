
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

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
      id: "3d-reconstruction-nerf",
      title: "3D Reconstruction using Neural Radiance Fields",
      description: "Investigated Neural Radiance Fields (NeRF) as a novel technique for high-fidelity 3D scene reconstruction and novel view synthesis from 2D image collections.",
      image: "/src/assets/3d-reconstruction.jpg",
      tags: ["PyTorch", "NeRF", "Computer Vision", "3D Reconstruction", "Deep Learning"],
      githubUrl: "#"
    },
    {
      id: "humanoid-walking-simulator",
      title: "Humanoid Walking Simulator",
      description: "Taught a humanoid to walk using reinforcement learning in the MuJoCo environment. Used algorithms such as SAC, PPO to validate and compare results across various model free learning environments.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Python", "Reinforcement Learning", "MuJoCo", "PyTorch", "OpenAI Gym"],
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

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

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
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="transition-all hover:scale-105"
            >
              {showAll ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
