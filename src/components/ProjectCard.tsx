
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ 
  id,
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  liveUrl
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  const handleButtonClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons overlay */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <Button 
              size="sm" 
              variant="secondary" 
              className="h-8 w-8 p-0"
              onClick={(e) => handleButtonClick(e, githubUrl)}
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm" 
              variant="secondary" 
              className="h-8 w-8 p-0"
              onClick={(e) => handleButtonClick(e, liveUrl)}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <CardHeader className="flex-grow">
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
