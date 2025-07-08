
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    "Python", "PyTorch", "TensorFlow", "Scikit-learn", "FastAPI", "JavaScript", 
    "React", "Node.js", "SQL", "MongoDB", "Docker", "AWS", "Git", "Jupyter"
  ];

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep learning, neural networks, computer vision, and natural language processing"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks and technologies"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Data analysis, visualization, and extracting insights from complex datasets"
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Algorithmic thinking and optimization for efficient, elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Computer Science student with a passion for artificial intelligence and machine learning. 
            Currently pursuing my degree while building innovative projects that bridge the gap between theoretical 
            knowledge and practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105 glass-card">
              <highlight.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
