import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "jane.smith@email.com",
    href: "mailto:jane.smith@email.com"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 (555) 123-4567", 
    href: "tel:+15551234567"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
  description: "Professional network and career updates"
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "#",
  description: "Code samples and technical projects"
  },
  {
    name: "Dribbble",
    icon: <ExternalLink className="w-5 h-5" />,
    href: "#",
  description: "Design portfolio and visual work"
  },
  {
    name: "Medium",
    icon: <ExternalLink className="w-5 h-5" />,
    href: "#",
  description: "Writing and thought leadership"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-seaglass seaglass-mint">
              <CardHeader>
                  <CardTitle className="text-2xl heading-seaglass">
                    Contact form
                  </CardTitle>
                  <div className="accent-line-seaglass w-16 mx-auto mb-4"></div>
                  <p className="font-montserrat text-seaglass-ink/90 text-lg mt-2 text-center">
                    Get in touch for collaborations, project inquiries, or just to say hello.<br/>
                    I respond within 24 hours.
                  </p>
                </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-seaglass-accent font-montserrat font-bold text-sm">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-seaglass-bg border-seaglass-accent text-seaglass-ink placeholder-seaglass-ink/50 font-montserrat"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-seaglass-accent font-montserrat font-bold uppercase text-sm">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-seaglass-bg border-seaglass-accent text-seaglass-ink placeholder-seaglass-ink/50 font-montserrat"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-seaglass-accent font-montserrat font-bold uppercase text-sm">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="bg-seaglass-bg border-seaglass-accent text-seaglass-ink placeholder-seaglass-ink/50 font-montserrat"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-seaglass-accent font-montserrat font-bold uppercase text-sm">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                      className="min-h-[150px] bg-seaglass-bg border-seaglass-accent text-seaglass-ink placeholder-seaglass-ink/50 font-montserrat resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-seaglass text-lg py-4 font-montserrat">
                    <Send className="w-5 h-5 mr-3" />
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-seaglass seaglass-blue">
              <CardHeader>
                <CardTitle className="text-xl heading-seaglass">CONTACT INFO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-seaglass-bg/60 hover:bg-seaglass-accent/10 transition-all duration-300 border border-seaglass-accent/20 group"
                  >
                    <div className="text-seaglass-accent text-xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-seaglass-ink/70 font-montserrat uppercase">{info.label}</p>
                      <p className="font-bold text-seaglass-accent font-montserrat">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="card-seaglass seaglass-aqua">
              <CardHeader>
                <CardTitle className="text-xl heading-seaglass">SOCIAL LINKS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-between p-4 rounded-lg bg-seaglass-bg/60 hover:bg-seaglass-accent/10 transition-all duration-300 border border-seaglass-accent/20 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-seaglass-accent text-lg group-hover:scale-110 transition-transform">{link.icon}</div>
                      <div>
                        <p className="font-black text-seaglass-accent uppercase text-sm font-montserrat">{link.name}</p>
                        <p className="text-xs text-seaglass-ink/70 font-montserrat">{link.description.replace(/>/g, '').replace(/\s*\n\s*/g, ' ').trim()}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-seaglass-accent group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="card-seaglass seaglass-green">
              <CardHeader>
                <CardTitle className="text-xl heading-seaglass">STATUS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border-b border-seaglass-accent/20">
                    <span className="text-seaglass-ink/70 font-montserrat text-sm">STATUS</span>
                    <span className="text-seaglass-green font-bold font-montserrat uppercase text-sm">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-seaglass-accent/20">
                    <span className="text-seaglass-ink/70 font-montserrat text-sm">RESPONSE TIME</span>
                    <span className="text-seaglass-accent font-montserrat text-sm">&lt; 24 HOURS</span>
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <span className="text-seaglass-ink/70 font-montserrat text-sm">TIME ZONE</span>
                    <span className="text-seaglass-accent font-montserrat text-sm">PST (UTC-8)</span>
                  </div>
                </div>
                <p className="text-xs text-seaglass-ink/70 mt-6 font-montserrat leading-relaxed">
                  CURRENTLY ACCEPTING NEW MISSIONS AND COLLABORATIONS<br/>
                  READY TO BUILD THE IMPOSSIBLE TOGETHER
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}