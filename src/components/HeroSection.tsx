
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-12" id="hero">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-on-scroll">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground animate-fade-in">
              Manoj Kumar Marri
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Data Lead-II @ NxtWave
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Gen AI · ML · Python · SQL (BigQuery, DBT) · Looker Studio
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="group btn-hover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://drive.google.com/file/d/1SqKNXM-kTNNRwJuCFsG2VoTsbkBXn76k/view?usp=sharing', '_blank')}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group btn-hover hover:scale-105 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300"
              onClick={() => window.open('https://www.linkedin.com/in/manoj-kumar-marri-798385168/', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2 group-hover:text-blue-600 transition-colors" />
              Connect on LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group btn-hover hover:scale-105 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
              onClick={() => window.open('https://github.com/marri26', '_blank')}
            >
              <Github className="w-4 h-4 mr-2 group-hover:text-gray-800 transition-colors" />
              GitHub Profile
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative group hover-lift">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <img
                src="/lovable-uploads/fc16c2da-cca4-4812-934f-acae35a542b2.png"
                alt="Manoj Kumar Marri"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
