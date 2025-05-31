import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16" id="hero">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-foreground">
              Manoj Kumar Marri
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-muted-foreground">
              Senior Data Analyst @ NxtWave
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Gen AI · ML · Python · SQL (BigQuery, DBT) · Looker Studio
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.linkedin.com/in/manoj-kumar-marri-798385168/', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2 group-hover:text-blue-600" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative group">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg"
                alt="Manoj Kumar Marri"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
