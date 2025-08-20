import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "YOGA Class Website",
      description: "A fully responsive e-commerce website for a yoga class business with online merchandise purchases and streamlined user interactions using modern JavaScript technologies.",
      technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
      highlights: [
        "Developed fully responsive e-commerce functionality",
        "Enabled online merchandise purchases",
        "Improved website traffic by 50%"
      ],
      demoUrl: "https://yoga-class-demo.com",
      githubUrl: "https://github.com/charansaipala/yoga-website",
      featured: true
    },
    {
      title: "AEM Component Library",
      description: "Scalable Adobe Experience Manager component library built with Angular and TypeScript, featuring reusable components that improved development efficiency and maintainability.",
      technologies: ["AEM", "Angular", "TypeScript", "LIT", "JavaScript", "CSS"],
      highlights: [
        "20% reduction in page load times",
        "Reusable component architecture",
        "Client libraries for global JavaScript and CSS management"
      ],
      demoUrl: "https://aem-components-demo.com",
      githubUrl: "https://github.com/charansaipala/aem-components",
      featured: true
    },
    {
      title: "Full-Stack Web Application",
      description: "Dynamic web application built during my time at APSSDC with focus on user engagement and accessibility. Implemented using Angular with SQL database integration.",
      technologies: ["Angular", "HTML", "CSS", "SQL", "JavaScript"],
      highlights: [
        "Improved user engagement by 30%",
        "Dynamic and accessible web pages",
        "Full-stack implementation with database integration"
      ],
      demoUrl: "https://fullstack-app-demo.com",
      githubUrl: "https://github.com/charansaipala/fullstack-app",
      featured: false
    },
    {
      title: "API Testing Framework",
      description: "Comprehensive API testing framework using Postman for ensuring seamless data integration across multiple web applications and services.",
      technologies: ["Postman", "REST APIs", "JavaScript", "JSON"],
      highlights: [
        "Automated API testing workflows",
        "Comprehensive test coverage for data integration",
        "Seamless integration testing across services"
      ],
      demoUrl: "https://api-testing-demo.com",
      githubUrl: "https://github.com/charansaipala/api-testing-framework",
      featured: false
    },
    {
      title: "Responsive UI Components",
      description: "Collection of responsive UI components built with HTML5, CSS, and JavaScript, focusing on performance optimization and cross-browser compatibility.",
      technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
      highlights: [
        "15% improvement in site performance",
        "Cross-browser compatible components",
        "Semantic HTML and accessibility focused"
      ],
      demoUrl: "https://ui-components-demo.com",
      githubUrl: "https://github.com/charansaipala/ui-components",
      featured: false
    },
    {
      title: "JavaScript E-Commerce Solution",
      description: "Modern e-commerce solution built with vanilla JavaScript and jQuery, featuring shopping cart functionality, user authentication, and payment integration.",
      technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
      highlights: [
        "Full shopping cart implementation",
        "User authentication system", 
        "Responsive design with Bootstrap"
      ],
      demoUrl: "https://js-ecommerce-demo.com",
      githubUrl: "https://github.com/charansaipala/js-ecommerce",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-elegant transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <Badge className="bg-gradient-primary text-white">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border hover:bg-secondary transition-smooth"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border hover:bg-secondary transition-smooth"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-soft transition-smooth group">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-background border-border">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-background border-border">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-border hover:bg-secondary transition-smooth text-xs flex-1"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-border hover:bg-secondary transition-smooth text-xs flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
