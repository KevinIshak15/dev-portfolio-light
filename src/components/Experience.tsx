
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Application Developer",
      company: "First Canadina Title",
      period: "2023 - 2024",
      description: `• Delivered a property title search platform for 300+ analysts, built with Angular, .NET, & SQL.
• Replaced the legacy flow using indexed queries, filter/sort UX, and an interactive dashboard, reducing retrieval time from 15m to 10s.
• Delivered a centralized security posture web application managing 85 apps using Angular, .NET & SQL by integrating Veracode & Acunetix scans, achieving a single view to identify & prioritize security vulnerabilities.
• Improved release reliability and speed using Azure DevOps multi-stage CI/CD pipelines, reducing build times, enhance code quality.`,
      technologies: ["Angular", ".NET", "Microsoft SQL Server", "Azure DevOps", "Veracode", "Acunetix", "JUnit", "Mockito"]
    },
    {
      type: "work",
      title: "Information Security Analyst",
      company: "First Canadina Title",
      period: "2021 - 2022",
      description: `• Conducted and managed 50+ daily security findings, assessing severity in Cortex XSOAR, executed remediation in Cortex XDR, and creating/tracking ServiceNow tickets until risk was mitigated.
• Optimized incident workflows by refining XSOAR playbooks, improving the accuracy of XDR corrective actions by 35%.
• Monitored IBM Guardium reports for PCI compliance and increased company cybersecurity awareness through the development and launch of training campaigns on KnowBe4.`,
      technologies: ["Cortex XDR", "Cortex XSOAR", "ServiceNow", "IBM Guardium", "KnowBe4"]
    },
    {
      type: "education",
      title: "Bachelor of Engineering in Software Engineering",
      company: "McMaster University",
      period: "2020 - 2025",
      description: "Focused on software engineering, algorithms, and data structures.",
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
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
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
