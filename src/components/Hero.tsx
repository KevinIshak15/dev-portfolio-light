
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Kevin Ishak
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full-Stack Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building scalable applications. 
            I turn complex problems into elegant, user-friendly experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="hover-scale" onClick={scrollToContact}>
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover-scale" onClick={scrollToPortfolio}>
              <Github className="mr-2" size={20} />
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/KevinIshak15" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/kevinishak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kevinishak11@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-pulse hover:animate-none transition-all duration-300 hover:text-primary"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
