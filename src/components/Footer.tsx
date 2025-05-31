
import { Linkedin, Github, Facebook, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('blogs')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Blogs
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:manojkumar.marri26@gmail.com"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                manojkumar.marri26@gmail.com
              </a>
              <a 
                href="tel:+919494911311"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                (+91) 9494911311
              </a>
              <a 
                href="tel:+918247343726"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                (+91) 8247343726
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/manoj-kumar-marri-798385168/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/marri26"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/marri26"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919494911311"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Manoj Kumar Marri. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with passion for data and analytics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
