
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Software Engineer",
      company: "Tech Innovation Inc.",
      period: "2022 - Present",
      description: "Lead a team of 5 developers in building scalable web applications. Implemented CI/CD pipelines and reduced deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "StartupCo",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client applications. Built RESTful APIs and improved application performance by 40%.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "JavaScript"]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Created responsive web applications and collaborated with designers to implement pixel-perfect UI/UX designs.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Sass"]
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Focused on software engineering, algorithms, and data structures. President of the Computer Science Club.",
      technologies: ["Java", "C++", "Python", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & Education
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-3">
                      {exp.type === 'work' ? (
                        <Briefcase className="text-primary mr-3 mt-1" size={20} />
                      ) : (
                        <GraduationCap className="text-primary mr-3 mt-1" size={20} />
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
