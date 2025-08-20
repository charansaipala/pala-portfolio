import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "palacharansai@gmail.com",
      href: "mailto:palacharansai@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (301) 728-0828",
      href: "tel:+13017280828"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Charlotte, NC",
      href: "https://maps.google.com/?q=Charlotte,NC"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/charansaipala",
      username: "@charansaipala"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://in.linkedin.com/in/charanpala",
      username: "/in/charanpala"
    },
    {
      icon: Twitter,
      title: "Twitter",
      href: "https://twitter.com/charansaipala",
      username: "@charansaipala"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-border bg-background"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-border bg-background"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-border bg-background"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-border bg-background resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-border bg-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Follow Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.title}</p>
                        <p className="text-muted-foreground text-sm">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <div className="text-center p-6 bg-gradient-hero rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Available for Freelance Work
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently accepting new projects and collaborations.
                </p>
                <Button 
                  variant="outline"
                  className="border-border hover:bg-secondary transition-smooth"
                  asChild
                >
                  <a href="mailto:palacharansai@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;