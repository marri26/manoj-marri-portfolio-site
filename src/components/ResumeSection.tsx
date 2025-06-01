
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const resumeUrl = "https://drive.google.com/file/d/1SqKNXM-kTNNRwJuCFsG2VoTsbkBXn76k/view?usp=sharing";
  const resumePdfUrl = "https://drive.google.com/file/d/1SqKNXM-kTNNRwJuCFsG2VoTsbkBXn76k/preview";

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="resume">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll">Resume</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PDF Viewer */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
              <iframe
                src={resumePdfUrl}
                className="w-full h-[600px] lg:h-[700px]"
                title="Resume PDF"
                frameBorder="0"
              />
            </div>
          </div>
          
          {/* Sidebar with actions */}
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-medium mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(resumeUrl, '_blank')}
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(resumeUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View in New Tab
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-medium mb-4">Resume Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-[2px] text-lg leading-none">•</span>
                  <span className="flex-1">3+ years of data analytics experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-[2px] text-lg leading-none">•</span>
                  <span className="flex-1">Expertise in SQL, Python, and BI tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-[2px] text-lg leading-none">•</span>
                  <span className="flex-1">Proven track record in team leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-[2px] text-lg leading-none">•</span>
                  <span className="flex-1">Experience with ML and automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-[2px] text-lg leading-none">•</span>
                  <span className="flex-1">Strong business impact achievements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
