import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Carpooling Platform",
      description: "A secure, user-friendly carpooling platform featuring real-time ride matching and route optimization to reduce fuel consumption. Integrated cost-sharing mechanisms and seamless payment processing to make commuting affordable, efficient, and sustainable.",
      technologies: ["Frontend Development", "Real-time Processing", "Route Optimization", "Payment Integration"],
      liveUrl: "https://car-pooling-client.vercel.app/",
      githubUrl: "https://github.com/chandrabose165",
      imageGradient: "from-green-500 to-teal-500"
    },
    {
      title: "Blood Banking System",
      description: "Leveraged AWS cloud and frontend expertise to build secure, efficient blood donor and inventory management platform. Developed secure system for streamlined donor registration, real-time blood inventory tracking, and emergency request handling.",
      technologies: ["AWS Cloud Storage", "Frontend Development", "Real-time Tracking", "Data Management"],
      githubUrl: "https://github.com/chandrabose165",
      imageGradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of recent work demonstrating technical expertise 
            and creative problem-solving abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card-gradient border-border hover:shadow-card transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${project.imageGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-xl font-bold opacity-80">
                    {project.title}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border hover:bg-muted"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
