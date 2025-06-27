
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-12 relative overflow-hidden" id="hero">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '5s' }}></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
            {/* Increased size by 20% */}
            <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative">
              <img
                src="/lovable-uploads/9b4a4d91-e0b7-4c54-84d5-460cfe64d009.png"
                alt="Manoj Kumar Marri"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            
            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
