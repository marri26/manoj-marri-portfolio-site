
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Facebook, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll text-white">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto animate-on-scroll space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-4 text-white">Let's Connect</h3>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about data and analytics.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start hover:scale-105 transition-all duration-200 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              onClick={() => window.open('https://www.linkedin.com/in/manoj-kumar-marri-798385168/', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-3" />
              LinkedIn Profile
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start hover:scale-105 transition-all duration-200 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              onClick={() => window.open('https://github.com/marri26', '_blank')}
            >
              <Github className="w-4 h-4 mr-3" />
              GitHub Profile
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start hover:scale-105 transition-all duration-200 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              onClick={() => window.open('mailto:manojkumar.marri26@gmail.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-3" />
              Email Me
            </Button>
            
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="justify-start hover:scale-105 transition-all duration-200 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                onClick={() => window.open('https://wa.me/919494911311', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              
              <Button
                variant="outline"
                className="justify-start hover:scale-105 transition-all duration-200 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                onClick={() => window.open('https://www.facebook.com/marri26', '_blank')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </div>
            
            <div className="space-y-3 pt-6">
              <p className="text-sm text-white/70 text-center">Call me directly:</p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-center text-white hover:bg-white/10 hover:text-white"
                  onClick={() => window.open('tel:+919494911311', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (+91) 9494911311
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-center text-white hover:bg-white/10 hover:text-white"
                  onClick={() => window.open('tel:+918247343726', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (+91) 8247343726
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
