import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "R Programming", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MySQL", "MongoDB", "NoSQL", "AWS Cloud Storage", "AWS Cloud Computing"]
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["Power BI", "Tableau", "Excel", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Frameworks & Technologies",
      skills: ["Java Full Stack", "Spring Boot", "Frontend Development", "Object-Oriented Programming"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies 
            to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}