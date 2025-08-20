import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in React, Node.js, TypeScript, and modern web technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences with design systems"
    },
    {
      icon: Rocket,
      title: "Product Strategy",
      description: "From concept to launch, I help build products that users love"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams and mentoring junior developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with over 6 years of experience building 
              scalable web applications and leading product development teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a curious computer science student, I've evolved into a 
                full-stack developer who bridges the gap between technical excellence 
                and user-centered design. I believe great software is built when 
                engineering meets empathy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or mentoring aspiring developers 
                in the community.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What I Bring</h3>
              <ul className="space-y-3">
                {[
                  "6+ years of professional development experience",
                  "Led teams of 5-8 developers across multiple projects", 
                  "Delivered 20+ successful web applications",
                  "Expert in React, TypeScript, Node.js, and AWS",
                  "Strong focus on performance and accessibility",
                  "Agile methodologies and CI/CD best practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-soft transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;