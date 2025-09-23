
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "MusicBridge",
      description:
        "Transfer playlists between Spotify and Apple Music for authenticated users.",
      technologies: [
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase Database",
        "OAuth",
        "Spotify Web API",
        "Apple Music Web API",
        "Vercel Deployment",
        "Jest Testing",
      ],
      image: "/musicbridge.png",
      demoUrl: "https://musicbridge.vercel.app/login",
      githubUrl: "https://github.com/KevinIshak15/MusicBridge",
    },
    {
      title: "TeamSphere - Soccer M-AI-nager",
      description:
        "Soccer event management platform featuring AI-powered team generation, player statistics tracking, and event management with user authentication.",
      technologies: ["Python", "FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "JWT Authentication", "Amazon S3", "Amazon CloudFront", "Amazon Elastic Beanstalk"],
      image: "/teamsphere.png",
      demoUrl: "http://teamsphere-frontend-kevin.s3-website.us-east-2.amazonaws.com/",
      githubUrl: "https://github.com/KevinIshak15/teamsphere-game-organizer",
    },
    {
      title: "CliniMedia - Portal",
      description:
        "The CliniMedia Portal is a web application that provides role-based dashboards for managing dental clinic operations, featuring customer management, media day booking, employee scheduling, gallery management, invoice handling, and social media insights integration.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Jest Testing"],
      image:
        "/clinimedia.png",
      demoUrl: "https://clinimedia.ca/",
      githubUrl: "https://github.com/KevinIshak15/clinimedia",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="secondary">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="secondary">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        <ExternalLink size={14} className="mr-2" />
                        Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        <Github size={14} className="mr-2" />
                        Code
                      </Button>
                    </a>
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

export default Portfolio;
