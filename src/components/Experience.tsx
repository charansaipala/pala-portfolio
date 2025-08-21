import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Google",
      position: "Software Engineer - Site Reliability Engineering (SRE)",
      duration: "07/2025 – Present",
      location: "United States",
      description: "Site Reliability Engineering (SRE) combines software and systems engineering to build and run large-scale, massively distributed, fault-tolerant systems. Managing complex challenges of scale unique to Google while optimizing existing systems, building infrastructure and eliminating work through automation.",
      achievements: [
        "Manage project priorities, deadlines, and deliverables for large-scale systems",
        "Design, develop, test, deploy, maintain, and enhance software solutions",
        "Ensure reliability and uptime appropriate to users' needs with fast rate of improvement", 
        "Focus on optimizing existing systems and building infrastructure through automation"
      ],
      technologies: ["System Design", "Large-scale Distributed Systems", "Infrastructure", "Automation", "Performance Optimization", "Reliability Engineering"]
    },
    {
      company: "Microsoft",
      position: "Software Engineer",
      duration: "04/2022 – 06/2025",
      location: "Charlotte, NC",
      description: "Designed and developed responsive user interfaces using HTML5, CSS, JavaScript, and AEM. Led the development of scalable AEM components and created reusable components using Angular, TypeScript, and LIT.",
      achievements: [
        "Enhanced site performance by 15% through optimized UI development",
        "Achieved 20% reduction in page load times with scalable AEM components",
        "Developed reusable AEM components using Angular, TypeScript, and LIT",
        "Created client libraries at component and global level for JavaScript and CSS"
      ],
      technologies: ["HTML5", "CSS", "JavaScript", "AEM", "Angular", "TypeScript", "LIT", "jQuery"]
    },
    {
      company: "T-Mobile",
      position: "Software Engineer", 
      duration: "07/2021 – 03/2022",
      location: "Charlotte, NC",
      description: "Designed, developed and supported all AEM components, integrations, and related applications. Performed AEM upgrades, patches, and worked closely with Adobe Managed services.",
      achievements: [
        "Led design and development of AEM components and integrations",
        "Successfully performed AEM upgrades and patches",
        "Collaborated with Adobe Managed services for product compliance",
        "Worked closely with business analysts and product owners"
      ],
      technologies: ["AEM", "JavaScript", "HTML", "CSS", "Adobe Managed Services"]
    },
    {
      company: "APSSDC",
      position: "Software Engineer",
      duration: "11/2018 – 07/2019", 
      location: "Guntur, India",
      description: "Worked through the software development life cycle gathering user requirements by collaborating with project managers, stakeholders, and industry members. Spearheaded the development of dynamic, accessible web pages.",
      achievements: [
        "Improved user engagement by 30% through dynamic web page development",
        "Implemented full-stack web applications using Angular, HTML, CSS, and SQL",
        "Conducted comprehensive API testing with Postman",
        "Collaborated effectively with project managers and stakeholders"
      ],
      technologies: ["Angular", "HTML", "CSS", "SQL", "JavaScript", "Postman"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              A journey through my software engineering career
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-soft transition-smooth">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                      </div>
                      <p className="text-primary font-medium mb-2">{exp.position}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-secondary text-secondary-foreground">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;