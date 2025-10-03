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
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl mb-12 heading-futuristic">
            CONTACT
          </h1>
          <div className="accent-line-futuristic w-32 mx-auto mb-8"></div>
          <p className="text-xl text-alabaster max-w-4xl mx-auto leading-tight font-mono">
            {'>'} READY TO COLLABORATE ON REVOLUTIONARY DIGITAL EXPERIENCES<br/>
            {'>'} TRANSMIT YOUR VISION - LET'S BUILD THE IMPOSSIBLE
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-futuristic card-variant-purple">
              <CardHeader>
                <CardTitle className="text-2xl text-electric-yellow font-black uppercase">
                  TRANSMISSION PROTOCOL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-electric-yellow font-mono font-bold uppercase text-sm">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your designation"
                        className="bg-dark-charcoal/50 border-electric-yellow text-off-white placeholder-off-white/50 font-mono"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-electric-yellow font-mono font-bold uppercase text-sm">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.signal@domain.com"
                        className="bg-dark-charcoal/50 border-electric-yellow text-alabaster placeholder-alabaster/50 font-mono"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-electric-yellow font-mono font-bold uppercase text-sm">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Mission parameters"
                      className="bg-dark-charcoal/50 border-electric-yellow text-alabaster placeholder-alabaster/50 font-mono"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-electric-yellow font-mono font-bold uppercase text-sm">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Transmit your vision, requirements, and collaborative intentions..."
                      className="min-h-[150px] bg-dark-charcoal/50 border-electric-yellow text-alabaster placeholder-alabaster/50 font-mono resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-futuristic text-lg py-4">
                    <Send className="w-5 h-5 mr-3" />
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-futuristic card-variant-red">
              <CardHeader>
                <CardTitle className="text-xl text-electric-yellow font-black uppercase">
                  DIRECT CHANNELS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-dark-charcoal/30 hover:bg-electric-yellow/10 transition-all duration-300 border border-electric-yellow/20 group"
                  >
                    <div className="text-electric-yellow text-xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-off-white/70 font-mono uppercase">{info.label}</p>
                      <p className="font-bold text-electric-yellow font-mono">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="card-futuristic card-variant-teal">
              <CardHeader>
                <CardTitle className="text-xl text-electric-yellow font-black uppercase">
                  NETWORK NODES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-between p-4 rounded-lg bg-dark-charcoal/30 hover:bg-electric-yellow/10 transition-all duration-300 border border-electric-yellow/20 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-electric-yellow text-lg group-hover:scale-110 transition-transform">{link.icon}</div>
                      <div>
                        <p className="font-black text-electric-yellow uppercase text-sm">{link.name}</p>
                        <p className="text-xs text-alabaster/70 font-mono">{'>'} {link.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-electric-yellow group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="card-futuristic card-variant-purple">
              <CardHeader>
                <CardTitle className="text-xl text-electric-yellow font-black uppercase">
                  SYSTEM STATUS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border-b border-electric-yellow/20">
                    <span className="text-alabaster/70 font-mono text-sm">STATUS</span>
                    <span className="text-teal-green font-bold font-mono uppercase text-sm">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-electric-yellow/20">
                    <span className="text-alabaster/70 font-mono text-sm">RESPONSE TIME</span>
                    <span className="text-electric-yellow font-mono text-sm">{'<'} 24 HOURS</span>
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <span className="text-alabaster/70 font-mono text-sm">TIME ZONE</span>
                    <span className="text-electric-yellow font-mono text-sm">PST (UTC-8)</span>
                  </div>
                </div>
                <p className="text-xs text-alabaster/70 mt-6 font-mono leading-relaxed">
                  {'>'} CURRENTLY ACCEPTING NEW MISSIONS AND COLLABORATIONS<br/>
                  {'>'} READY TO BUILD THE IMPOSSIBLE TOGETHER
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}