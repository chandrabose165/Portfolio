import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "AICTE Virtual Internship",
      company: "AICTE",
      duration: "May 2025 - Jun 2025",
      type: "Internship",
      description: "Completed an internship focused on Java programming, applying object-oriented concepts to support ongoing development projects. Connected Java programming with hands-on exposure to object-oriented principles and foundational NoSQL database concepts.",
      achievements: [
        "Applied object-oriented programming concepts in Java",
        "Gained hands-on exposure to NoSQL database concepts",
        "Collaborated remotely to develop coding skills",
        "Troubleshot software issues effectively"
      ],
      technologies: ["Java", "Object-Oriented Programming", "NoSQL", "Remote Collaboration"]
    },
    {
      title: "Deloitte Virtual Internship", 
      company: "Deloitte",
      duration: "Jan 2025 - Jun 2025",
      type: "Internship",
      description: "Completed a data analysis internship focused on practical applications of Excel and Tableau, gaining hands-on experience in data visualization and insight discovery.",
      achievements: [
        "Utilized Excel and Tableau to analyze datasets",
        "Created effective data visualizations",
        "Communicated findings through professional presentations",
        "Applied data cleaning techniques for accuracy and reliability",
        "Built interactive dashboards in Tableau"
      ],
      technologies: ["Excel", "Tableau", "Data Analysis", "Data Visualization", "Data Cleaning"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Experience & Internships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience gained through virtual internships, 
            applying theoretical knowledge to real-world scenarios.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-card-gradient border-border hover:shadow-card transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-xl text-muted-foreground mb-2">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="bg-card-gradient border border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}