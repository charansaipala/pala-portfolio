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
              I'm a passionate Software Engineer with expertise in AEM, JavaScript frameworks, 
              and building scalable web applications at top tech companies like Microsoft and T-Mobile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started with a Bachelor's in Electronics & Communication Engineering from India, 
                I evolved into a skilled Software Engineer through a Master's in Software Engineering 
                from the University of Maryland. Currently working at Microsoft, I specialize in 
                AEM development and modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating scalable, user-friendly solutions that make a real impact. 
                My experience spans from full-stack development to performance optimization, 
                always focusing on delivering exceptional user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What I Bring</h3>
              <ul className="space-y-3">
                {[
                  "Master's in Software Engineering from University of Maryland",
                  "Currently Software Engineer at Microsoft", 
                  "Expertise in AEM, Angular, TypeScript, and modern web technologies",
                  "Improved site performance by 15% and reduced page load times by 20%",
                  "Adobe Certified Expert – Adobe Experience Manager Sites Developer",
                  "Strong background in responsive web design and user experience"
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