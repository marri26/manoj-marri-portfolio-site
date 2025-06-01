
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Linkedin, Github, Facebook, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({ title: "Error", description: "Please enter your name.", variant: "destructive" });
      return;
    }
    
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({ title: "Error", description: "Email format looks wrong.", variant: "destructive" });
      return;
    }
    
    if (!formData.consent) {
      toast({ title: "Error", description: "Consent is required to submit the form.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({ title: "Success", description: "✅ Thanks! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '', consent: false });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Message (optional, max 500 characters)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 500) })}
                  className="min-h-[120px] resize-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <p className="text-xs text-white/60 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                />
                <label htmlFor="consent" className="text-sm text-white/80">
                  I agree to be contacted via email. *
                </label>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full hover:scale-105 transition-all duration-200 bg-white text-blue-600 hover:bg-white/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="animate-on-scroll space-y-8">
            <div>
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
                <p className="text-sm text-white/70">Call me directly:</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-white hover:bg-white/10 hover:text-white"
                    onClick={() => window.open('tel:+919494911311', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (+91) 9494911311
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-white hover:bg-white/10 hover:text-white"
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
      </div>
    </section>
  );
};

export default ContactSection;
