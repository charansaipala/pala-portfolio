import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Angular", level: 85 }
      ]
    },
    {
      title: "Backend & Database", 
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL/MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "AEM", level: 90 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Spring Boot", level: 70 }
      ]
    }
  ];

  const technologies = [
    "HTML", "CSS", "TypeScript", "LIT", "JavaScript", "Java", "Python", 
    "React", "Angular JS", "Spring Boot", "Node.js", "Bootstrap",
    "MVC", "RESTful API", "MySQL", "NoSQL", "SQL Server", "MongoDB",
    "Visual Studio Code", "IntelliJ", "Git", "Anaconda", "PyCharm", "RStudio",
    "Adobe Experience Manager (AEM)", "jQuery", "Postman"
  ];

  const certifications = [
    "Adobe Certified Expert – Adobe Experience Manager Sites Developer",
  ];

  const education = [
    {
      degree: "Master of Engineering in Software Engineering",
      school: "University of Maryland, College Park",
      year: "May 2021"
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering", 
      school: "Madanapalle Institute of Technology & Science, India",
      year: "June 2018"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Skills & Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and expertise that drive my development work
            </p>
          </div>

          {/* Core Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-soft transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Technologies */}
          <Card className="border-border bg-card mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-background border-border hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;