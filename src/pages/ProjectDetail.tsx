
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
      id: "neural-style-transfer",
      title: "Neural Style Transfer",
      description: "Deep learning model that applies artistic styles to images using convolutional neural networks and PyTorch.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      tags: ["Python", "PyTorch", "Computer Vision", "AI"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "This project implements neural style transfer using deep convolutional neural networks. The model takes two images - a content image and a style image - and produces a new image that maintains the content structure while adopting the artistic style of the reference image. Built with PyTorch, the implementation uses pre-trained VGG networks for feature extraction and gradient-based optimization to minimize the combined content and style loss functions.",
      features: [
        "Real-time style transfer with GPU acceleration",
        "Support for multiple artistic styles",
        "Batch processing capabilities",
        "Custom loss function optimization",
        "Web interface for easy interaction"
      ],
      technologies: [
        "PyTorch for deep learning framework",
        "OpenCV for image processing",
        "NumPy for numerical computations",
        "Flask for web interface",
        "CUDA for GPU acceleration"
      ]
    },
    {
      id: "smart-chatbot-assistant",
      title: "Smart Chatbot Assistant",
      description: "AI-powered chatbot using natural language processing to provide intelligent responses and task automation.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      tags: ["NLP", "Python", "FastAPI", "React"],
      githubUrl: "#",
      liveUrl: "#",
      fullDescription: "An intelligent conversational AI system built with modern NLP techniques. The chatbot can understand context, maintain conversation history, and perform various tasks through natural language commands. It integrates with external APIs to provide weather updates, schedule management, and information retrieval.",
      features: [
        "Context-aware conversations",
        "Multi-intent recognition",
        "Task automation capabilities",
        "Integration with external APIs",
        "Real-time response generation"
      ],
      technologies: [
        "Transformers library for NLP models",
        "FastAPI for backend services",
        "React for frontend interface",
        "PostgreSQL for conversation storage",
        "Redis for session management"
      ]
    },
    {
      id: "stock-price-predictor",
      title: "Stock Price Predictor",
      description: "Machine learning model that predicts stock prices using LSTM networks and historical market data.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "LSTM", "Python", "TensorFlow"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "A sophisticated time series prediction system using Long Short-Term Memory (LSTM) neural networks to forecast stock prices. The model analyzes historical price data, trading volumes, and technical indicators to make predictions with high accuracy.",
      features: [
        "LSTM-based time series forecasting",
        "Technical indicator integration",
        "Risk assessment metrics",
        "Interactive visualization dashboard",
        "Real-time data processing"
      ],
      technologies: [
        "TensorFlow for model building",
        "Pandas for data manipulation",
        "Matplotlib for visualization",
        "Alpha Vantage API for market data",
        "Streamlit for dashboard interface"
      ]
    },
    {
      id: "real-time-object-detection",
      title: "Real-time Object Detection",
      description: "Computer vision application that detects and tracks objects in real-time using YOLO and OpenCV.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Computer Vision", "OpenCV", "YOLO", "Python"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "A real-time object detection and tracking system using the YOLO (You Only Look Once) algorithm. The application can process live video feeds, webcam input, or recorded videos to identify and track multiple objects simultaneously with high accuracy and speed.",
      features: [
        "Real-time video processing",
        "Multi-object tracking",
        "Custom object training",
        "Bounding box visualization",
        "Performance optimization"
      ],
      technologies: [
        "YOLO v5 for object detection",
        "OpenCV for video processing",
        "NumPy for array operations",
        "PyQt for GUI interface",
        "ONNX for model optimization"
      ]
    },
    {
      id: "personal-finance-tracker",
      title: "Personal Finance Tracker",
      description: "Full-stack web application for tracking expenses and visualizing financial data with interactive charts.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "D3.js"],
      githubUrl: "#",
      liveUrl: "#",
      fullDescription: "A comprehensive personal finance management application that helps users track income, expenses, and savings goals. The platform provides detailed analytics, budget planning tools, and interactive visualizations to give users insights into their financial habits.",
      features: [
        "Expense categorization and tracking",
        "Budget planning and monitoring",
        "Interactive financial charts",
        "Goal setting and progress tracking",
        "Bank account integration"
      ],
      technologies: [
        "React for frontend development",
        "Node.js with Express for backend",
        "MongoDB for data storage",
        "D3.js for data visualization",
        "JWT for authentication"
      ]
    },
    {
      id: "music-recommendation-system",
      title: "Music Recommendation System",
      description: "Collaborative filtering system that recommends music based on user preferences and listening history.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Recommendation System", "Python", "Scikit-learn", "Pandas"],
      githubUrl: "#",
      liveUrl: null,
      fullDescription: "An advanced music recommendation engine that uses collaborative filtering and content-based filtering techniques to suggest songs tailored to individual user preferences. The system analyzes listening patterns, user ratings, and audio features to provide personalized recommendations.",
      features: [
        "Collaborative filtering algorithms",
        "Content-based recommendations",
        "Audio feature analysis",
        "User preference learning",
        "Playlist generation"
      ],
      technologies: [
        "Scikit-learn for machine learning",
        "Pandas for data processing",
        "Spotify Web API for music data",
        "Flask for web interface",
        "SQLite for user data storage"
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
