
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data - in a real app this would come from an API or database
  const projects = [
    {
      id: "legal-search-engine",
      title: "Legal Search Engine: RAG and GraphRAG-based Legal Document Retrieval",
      description: "Developed a deep learning-powered legal search engine for corporate law using RAG and GraphRAG for precise document retrieval and summarization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      tags: ["RAG", "GraphRAG", "Deep Learning", "NLP", "Legal Tech"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "This project implements a sophisticated legal document retrieval system combining Retrieval-Augmented Generation (RAG) with GraphRAG for corporate law applications. The system enables precise document retrieval and automatic summarization, making complex legal research more efficient and accessible for legal professionals.",
      features: [
        "RAG-based document retrieval with semantic search",
        "GraphRAG implementation for relationship-based querying",
        "Neo4j-based knowledge graphs for legal document relationships",
        "Pinecone vector search for hybrid retrieval combining semantic and relationship-based querying",
        "Interactive Gradio-powered UI for intuitive querying and graph visualization",
        "Automated legal document summarization"
      ],
      technologies: [
        "Python for core development",
        "RAG and GraphRAG frameworks",
        "Neo4j for knowledge graph storage",
        "Pinecone for vector database",
        "Gradio for user interface",
        "Deep learning models for document processing"
      ]
    },
    {
      id: "cognitive-disorder-identification",
      title: "Cognitive Disorder Identification: Dementia Stages using Deep Learning",
      description: "Developed a model which classifies MRI of brain scans into dementia stages using machine learning and deep learning techniques.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      tags: ["Deep Learning", "CNN", "Medical AI", "MRI Analysis", "Classification"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "This medical AI project focuses on the early identification and classification of dementia stages using advanced machine learning and deep learning techniques. The system analyzes MRI brain scans to classify different stages of dementia, addressing critical challenges in medical diagnosis including class imbalance and subtle image differences between dementia stages.",
      features: [
        "Multi-model approach with CNN, VGG11, VGG16, SVM, KNN, Decision Trees, and Random Forests",
        "MRI image classification for dementia stage identification",
        "Advanced preprocessing to handle class imbalance issues",
        "Analysis of 6400 MRI brain scans dataset",
        "Comparative model performance evaluation",
        "Medical-grade accuracy for clinical applications"
      ],
      technologies: [
        "Python for machine learning implementation",
        "TensorFlow/Keras for deep learning models",
        "OpenCV for medical image processing",
        "Scikit-learn for traditional ML algorithms",
        "NumPy and Pandas for data processing",
        "Medical imaging libraries for MRI analysis"
      ]
    },
    {
      id: "3d-reconstruction-nerf",
      title: "3D Reconstruction using Neural Radiance Fields",
      description: "Investigated Neural Radiance Fields (NeRF) as a novel technique for high-fidelity 3D scene reconstruction and novel view synthesis from 2D image collections.",
      image: "/src/assets/3d-reconstruction.jpg",
      tags: ["PyTorch", "NeRF", "Computer Vision", "3D Reconstruction", "Deep Learning"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "This project explores Neural Radiance Fields (NeRF) as a cutting-edge technique for high-fidelity 3D scene reconstruction and novel view synthesis. The research involved a comprehensive literature review of the NeRF ecosystem, analyzing advancements in implicit neural representations, volume rendering techniques, and comparison to traditional photogrammetry methods. The project demonstrates how multi-view 2D images can be transformed into continuous volumetric scene representations using NeRF models.",
      features: [
        "Neural Radiance Fields implementation for 3D reconstruction",
        "Novel view synthesis from 2D image collections", 
        "Comprehensive literature review of NeRF ecosystem",
        "Analysis of implicit neural representations",
        "Volume rendering technique optimization",
        "Comparison with traditional photogrammetry methods",
        "Multi-view image processing and alignment",
        "High-fidelity 3D scene representation"
      ],
      technologies: [
        "PyTorch for deep learning framework",
        "NeRStudio for NeRF implementation",
        "NumPy for numerical computations",
        "Matplotlib for visualization and plotting",
        "OpenCV for image processing and computer vision",
        "COLMAP for structure-from-motion and multi-view stereo"
      ]
    },
    {
      id: "humanoid-walking-simulator",
      title: "Humanoid Walking Simulator",
      description: "Taught a humanoid to walk using reinforcement learning in the MuJoCo environment. Used algorithms such as SAC, PPO to validate and compare results across various model free learning environments.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Python", "Reinforcement Learning", "MuJoCo", "PyTorch", "OpenAI Gym"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "This project focuses on teaching a humanoid robot to walk using advanced reinforcement learning techniques in the MuJoCo physics simulation environment. The research involved implementing and comparing various model-free reinforcement learning algorithms, specifically Soft Actor-Critic (SAC) and Proximal Policy Optimization (PPO), to achieve stable and efficient bipedal locomotion. The project demonstrates the application of modern RL algorithms to complex robotics control problems.",
      features: [
        "Humanoid walking simulation in MuJoCo environment",
        "Implementation of Soft Actor-Critic (SAC) algorithm",
        "Proximal Policy Optimization (PPO) implementation",
        "Comparative analysis of model-free learning algorithms",
        "Stable bipedal locomotion achievement",
        "Physics-based simulation environment setup",
        "Policy gradient optimization for continuous control",
        "Performance metrics and reward function design"
      ],
      technologies: [
        "Python for core development and scripting",
        "OpenAI Gym for reinforcement learning environments",
        "MuJoCo for physics simulation and robotics modeling",
        "Stable-Baselines3 for RL algorithm implementations",
        "PyTorch for deep learning and neural networks",
        "NumPy for numerical computations and array operations",
        "Matplotlib for data visualization and performance plotting"
      ]
    },
    {
      id: "stock-watch",
      title: "Stock Watch: Realtime Stock Market Analysis using Machine Learning",
      description: "Created a Web Application which analyzes real time sentiment of news headlines related to stock market and implemented as a Machine Learning model.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "Flask", "ReactJS", "Google API", "Sentiment Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      fullDescription: "Stock Watch is a comprehensive web application that combines real-time sentiment analysis of financial news with machine learning to provide insights into stock market trends. The system analyzes news headlines and applies sentiment analysis to help predict market movements and provide valuable insights for traders and investors.",
      features: [
        "Real-time news headline sentiment analysis",
        "Machine learning model for stock market prediction",
        "Integration with Google API for news data",
        "Interactive web interface for market analysis",
        "Real-time sentiment scoring and visualization",
        "Historical sentiment trend tracking"
      ],
      technologies: [
        "Python Flask for backend development",
        "ReactJS for frontend interface",
        "Google API for news data retrieval",
        "Machine learning libraries for sentiment analysis",
        "Natural language processing for text analysis",
        "Real-time data processing systems"
      ]
    },
    {
      id: "face-shape-analyzer",
      title: "Face Shape Analyzer: Find out your Face Shape",
      description: "Developed an offline model which inputs facial images and classifies face shape based on different categories using OpenCV and Haar Cascade.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      tags: ["Computer Vision", "OpenCV", "Haar Cascade", "Image Processing", "Classification"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "The Face Shape Analyzer is an offline computer vision application that automatically identifies and classifies facial shapes from input images. Using advanced image processing techniques with OpenCV and Haar Cascade classifiers, the system can accurately determine face shape categories, making it useful for applications in beauty, fashion, and personal styling.",
      features: [
        "Offline facial image processing",
        "Automatic face shape classification",
        "Multiple face shape category support",
        "Real-time image analysis",
        "High accuracy shape detection",
        "User-friendly interface for image input"
      ],
      technologies: [
        "Python for core development",
        "OpenCV for computer vision and image processing",
        "Haar Cascade classifiers for face detection",
        "NumPy for numerical computations",
        "Image processing libraries",
        "Machine learning for classification algorithms"
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
            
            {/* Action buttons */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Full description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <ul className="space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
