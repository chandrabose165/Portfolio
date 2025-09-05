import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Deloitte Virtual Certificate in Forage",
      issuer: "Deloitte",
      description: "Completed virtual work experience program focusing on data analysis and business consulting methodologies.",
      skills: ["Data Analysis", "Business Consulting", "Excel", "Tableau"],
      icon: "🏢"
    },
    {
      title: "Edu Skill Certificate in Java Programming", 
      issuer: "Edu Skill",
      description: "Comprehensive certification in Java programming covering object-oriented concepts and practical application development.",
      skills: ["Java Programming", "Object-Oriented Programming", "Software Development"],
      icon: "☕"
    },
    {
      title: "AWS Cloud Computing Foundations",
      issuer: "Amazon Web Services",
      description: "Foundational knowledge of AWS cloud services, architecture, and best practices for cloud computing solutions.",
      skills: ["AWS Cloud", "Cloud Architecture", "Cloud Storage", "Cloud Computing"],
      icon: "☁️"
    },
    {
      title: "Java Full Stack Development Certification",
      issuer: "AICET",
      description: "Hands-on experience in Java Full Stack development with Spring Boot and frontend technologies, demonstrating practical application skills.",
      skills: ["Java Full Stack", "Spring Boot", "Frontend Development", "Backend Development"],
      icon: "🎯"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that validate technical expertise 
            and commitment to continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-card-gradient border-border hover:shadow-card transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-2xl">{cert.icon}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground leading-tight">{cert.title}</h3>
                    <Award className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Skills Validated:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
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