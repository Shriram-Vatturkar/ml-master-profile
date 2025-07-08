
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  liveUrl, 
  featured 
}: ProjectCardProps) => {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${
      featured ? 'ring-2 ring-primary/50' : ''
    }`}>
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
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Github className="h-4 w-4" />
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {featured && (
            <Badge variant="default" className="bg-primary">
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
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
