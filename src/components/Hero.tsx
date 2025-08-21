import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
const heroImage = "/lovable-uploads/263f829d-1ceb-44fc-9240-e9ea71958c6d.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Charan Sai Pala
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Site Reliability Engineer at Google
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Site Reliability Engineer combining software and systems engineering to build and run 
                large-scale, massively distributed, fault-tolerant systems. Passionate about optimizing 
                existing systems, building infrastructure, and eliminating work through automation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary transition-smooth"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/charansaipala" 
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://in.linkedin.com/in/charanpala" 
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:palacharansai@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Profile photo in mountain landscape"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-smooth animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;