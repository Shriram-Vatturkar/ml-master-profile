
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground">
            Download my complete resume to learn more about my experience and qualifications.
          </p>
        </div>

        <Card className="p-8 text-center glass-card">
          <div className="mb-6">
            <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Shriram Vatturkar - Resume</h3>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover:scale-105 transition-all"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </Card>
      </div>
    </section>
  );
};
