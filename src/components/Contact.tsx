
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="text-primary mr-3" size={20} />
                  <span>kevinishak11@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3" size={20} />
                  <span>+1 (905) 616-9532</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3" size={20} />
                  <span>Milton, ON</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/kevin-ishak" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-scale"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/kevin-ishak" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-scale"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com/kevinishak" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-scale"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <Input 
                    placeholder="Subject" 
                    required
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full hover-scale">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
