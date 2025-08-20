import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading a team of 6 developers in building scalable SaaS platforms. Architected microservices handling 1M+ daily requests and implemented CI/CD pipelines reducing deployment time by 70%.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Mentored 4 junior developers and established coding standards",
        "Led migration to modern React architecture with TypeScript"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "StartupXYZ",
      position: "Full-Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: "Built the entire product from ground up, including web application, mobile APIs, and admin dashboard. Collaborated directly with founders to define product strategy and user experience.",
      achievements: [
        "Delivered MVP in 4 months ahead of schedule",
        "Scaled platform to support 10,000+ active users",
        "Implemented real-time features using WebSocket technology"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Redis", "Socket.io", "Stripe API"]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: "Developed responsive websites and web applications for Fortune 500 clients. Focused on performance optimization and accessibility compliance.",
      achievements: [
        "Delivered 15+ client projects with 100% satisfaction rate",
        "Improved website load times by average of 50%",
        "Achieved WCAG 2.1 AA compliance across all projects"
      ],
      technologies: ["React", "Vue.js", "Sass", "Webpack", "jQuery", "PHP"]
    },
    {
      company: "WebCraft Studio",
      position: "Junior Developer",
      duration: "2018 - 2019",
      location: "Remote",
      description: "Started my professional journey building WordPress themes and custom web solutions. Gained foundational experience in web development best practices.",
      achievements: [
        "Built 20+ custom WordPress themes",
        "Learned modern JavaScript frameworks and tools",
        "Contributed to open-source projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"]
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
              A journey through my professional development career
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