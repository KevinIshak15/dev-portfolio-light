
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary rounded-lg flex items-center justify-center">
                <div className="text-6xl text-primary/40">👨‍💻</div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software engineer with 5+ years of experience building 
                modern web applications. I love solving complex problems and creating 
                intuitive user experiences that make a real difference.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started with a Computer Science degree, and since then I've 
                worked with startups and established companies, helping them bring their 
                digital visions to life. I'm always learning new technologies and 
                improving my craft.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blogs, or exploring the latest in AI and machine learning. 
                I believe in writing clean, maintainable code and following best practices.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
