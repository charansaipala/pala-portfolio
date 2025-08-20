import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
      highlights: [
        "Handles 50,000+ products with real-time inventory",
        "Integrated payment processing with multiple gateways",
        "Admin dashboard with advanced analytics"
      ],
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      featured: true
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, team workflows, and advanced reporting. Designed for remote teams and agile workflows.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      highlights: [
        "Real-time collaboration features",
        "Custom workflow builder",
        "Advanced project analytics"
      ],
      demoUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      featured: true
    },
    {
      title: "Healthcare Dashboard",
      description: "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine integration.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS"],
      highlights: [
        "HIPAA compliant security measures",
        "Integrated telemedicine platform",
        "Advanced patient analytics"
      ],
      demoUrl: "https://healthcare-demo.com",
      githubUrl: "https://github.com/alexjohnson/healthcare-dashboard",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours, advanced search, and CRM integration for real estate professionals.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "Vercel"],
      highlights: [
        "360° virtual property tours",
        "Advanced property search filters",
        "Integrated CRM for agents"
      ],
      demoUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/alexjohnson/real-estate-platform",
      featured: false
    },
    {
      title: "Finance Tracker",
      description: "Personal finance management app with expense tracking, budgeting tools, and investment portfolio management.",
      technologies: ["React Native", "Express.js", "MongoDB", "Chart.js"],
      highlights: [
        "Automated expense categorization",
        "Investment portfolio tracking",
        "Custom budget planning tools"
      ],
      demoUrl: "https://finance-tracker-demo.com", 
      githubUrl: "https://github.com/alexjohnson/finance-tracker",
      featured: false
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool for marketing teams with template management, brand voice consistency, and collaboration features.",
      technologies: ["React", "OpenAI API", "Node.js", "PostgreSQL", "Docker"],
      highlights: [
        "AI-powered content generation",
        "Brand voice consistency engine", 
        "Team collaboration features"
      ],
      demoUrl: "https://ai-content-demo.com",
      githubUrl: "https://github.com/alexjohnson/ai-content-generator",
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
