import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.Tech, Data Science",
      institution: "Malla Reddy University, Hyderabad",
      duration: "2022 - 2026",
      cgpa: "8.00",
      status: "Current"
    },
    {
      degree: "Intermediate, MPC",
      institution: "Sri Chaitanya Junior College, Hyderabad", 
      duration: "2020 - 2022",
      cgpa: "7.34",
      status: "Completed"
    },
    {
      degree: "Secondary School",
      institution: "Spring's High School, Hyderabad",
      duration: "2019 - 2020", 
      cgpa: "9.2",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey focused on data science and technology, 
            building a strong foundation for analytical and programming skills.
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 bg-card-gradient border-border hover:shadow-card transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary mb-1">{edu.cgpa}</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}