
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
    <section className="py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-10 animate-on-scroll">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Message (optional, max 500 characters)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 500) })}
                  className="min-h-[120px] resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I agree to be contacted via email. *
                </label>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="animate-on-scroll space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about data and analytics.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://www.linkedin.com/in/manoj-kumar-marri-798385168/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-3" />
                LinkedIn Profile
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://github.com/marri26', '_blank')}
              >
                <Github className="w-4 h-4 mr-3" />
                GitHub Profile
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start hover:scale-105 transition-all duration-200"
                onClick={() => window.open('mailto:manojkumar.marri26@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-3" />
                Email Me
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('https://wa.me/919494911311', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  className="justify-start hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('https://www.facebook.com/marri26', '_blank')}
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
              
              <div className="space-y-2 pt-4">
                <p className="text-sm text-muted-foreground">Call me directly:</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start"
                    onClick={() => window.open('tel:+919494911311', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (+91) 9494911311
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start"
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
