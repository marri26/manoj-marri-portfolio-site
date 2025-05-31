
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const resumeUrl = "https://drive.google.com/file/d/1SqKNXM-kTNNRwJuCFsG2VoTsbkBXn76k/view?usp=sharing";
  const embedUrl = "https://drive.google.com/file/d/1SqKNXM-kTNNRwJuCFsG2VoTsbkBXn76k/preview";

  return (
    <section className="py-16 px-6 bg-muted/30" id="resume">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-3xl font-light mb-4">Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or view it below to learn more about my experience, skills, and achievements.
          </p>
        </div>

        <div className="space-y-8 animate-on-scroll">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group hover:scale-105 transition-all duration-200"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View in Google Drive
            </Button>
          </div>

          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[3/4] w-full">
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                title="Manoj Kumar Marri Resume"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
