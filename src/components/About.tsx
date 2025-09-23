
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
                <div className="relative w-40 h-40 md:w-60 md:h-60 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-sm opacity-60 animate-spin-slow" />
                  <img
                    src="/pfp.jpg"
                    alt="Kevin Ishak"
                    className="relative w-full h-full object-cover object-center object-[80%_50%] rounded-full border-4 border-background shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a software engineer with a passion for building clean, scalable, and user-focused web applications.
              With experience across both front-end and back-end technologies,
              I specialize in creating modern solutions using tools like React, Angular, Node.js, and Python.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy solving complex problems, designing intuitive interfaces, and optimizing systems for performance and security.
              My background in Software Engineering has equipped me with a strong foundation in data structures, algorithms, and real-world software development practices.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blogs, or exploring the latest in AI and machine learning. 
                I believe in writing clean, maintainable code and following best practices.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
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
