
import { Code, Database, Globe, Smartphone, Cloud, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Angular"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "Firebase Auth", "Firebase Database"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["CI/CD", "Linux", "Git", "Azure DevOps", "Vercel", "Amazon S3", "Amazon CloudFront", "Amazon Elastic Beanstalk"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["REST APIs", "OAuth", "JWT", "Spotify Web API", "Apple Music Web API"]
    },
    {
      icon: Cpu,
      title: "Tools & Others",
      skills: ["Figma", "Cortex XDR", "Cortex XSOAR", "ServiceNow", "IBM Guardium", "KnowBe4", "JUnit", "Veracode", "Acunetix", "Jest Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
