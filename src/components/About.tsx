import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download, Award, BookOpen, Users } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const skills = [
  "User Research", "Information Architecture", "Interaction Design", "Prototyping",
  "Design Systems", "Technical Writing", "API Documentation", "Content Strategy",
  "Accessibility", "Usability Testing", "Figma", "Adobe Creative Suite",
  "HTML/CSS", "React", "Sketch", "InVision", "Miro", "Confluence"
];

const education = [
  {
    degree: "Master of Human-Computer Interaction",
    school: "Carnegie Mellon University",
    year: "2018",
    description: "Specialized in user research methodologies and interaction design"
  },
  {
    degree: "Bachelor of Communication Design",
    school: "Parsons School of Design",
    year: "2016", 
    description: "Focus on visual communication and design thinking"
  }
];

const certifications = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    year: "2023"
  },
  {
    name: "Technical Writing Certification", 
    issuer: "Society for Technical Communication",
    year: "2022"
  },
  {
    name: "Certified Usability Analyst",
    issuer: "Human Factors International",
    year: "2021"
  }
];

const testimonials = [
  {
    quote: "Jane's ability to translate complex technical concepts into clear, user-friendly documentation is exceptional. Her work significantly improved our developer experience.",
    author: "Sarah Chen",
    title: "Senior Product Manager",
    company: "TechCorp"
  },
  {
    quote: "Working with Jane on our mobile app redesign was transformative. Her research-driven approach led to a 40% increase in user satisfaction.",
    author: "Michael Rodriguez",
    title: "Head of Design",
    company: "StartupXYZ"
  },
  {
    quote: "Jane brings a unique combination of design thinking and technical communication skills that's rare in the industry. She's a strategic asset to any team.",
    author: "David Kim",
    title: "VP of Engineering", 
    company: "DataFlow Inc"
  }
];

export function About() {
  return (
    <section id="about" className="py-24">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl mb-12 heading-futuristic">
            ABOUT
          </h1>
          <div className="accent-line-futuristic w-32 mx-auto mb-8"></div>
          <p className="text-xl text-alabaster max-w-4xl mx-auto leading-tight font-mono">
            {'>'} BRIDGING REALMS OF HUMAN COGNITION AND DIGITAL CONSCIOUSNESS<br/>
            {'>'} CRAFTING EXPERIENCES THAT TRANSCEND THE ORDINARY
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Personal Story */}
          <div className="lg:col-span-2">
            <Card className="card-futuristic card-variant-purple h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-electric-yellow font-black uppercase text-xl">
                  <Users className="w-6 h-6 mr-3" />
                  ORIGIN PROTOCOL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 font-mono text-alabaster/90">
                <p>
                  {'>'} TEMPORAL SPAN: 6+ CYCLES OF DIGITAL EVOLUTION<br/>
                  {'>'} EXPERTISE MATRIX: UX DESIGN + TECHNICAL COMMUNICATION<br/>
                  {'>'} MISSION: HARMONIZING HUMAN COGNITION WITH MACHINE LOGIC
                </p>
                <p>
                  {'>'} UNIQUE PROTOCOL: BRIDGING THE VOID BETWEEN DESIGN AND DEVELOPMENT<br/>
                  {'>'} LINGUISTIC FLUENCY: USER RESEARCH INSIGHTS ↔ TECHNICAL IMPLEMENTATION<br/>
                  {'>'} RESULT: DESIGNS THAT ARE BEAUTIFUL, USABLE, AND TECHNICALLY VIABLE
                </p>
                <p>
                  {'>'} PHILOSOPHY: GREAT DESIGN IS INVISIBLE - NATURAL AND EFFORTLESS<br/>
                  {'>'} DOCUMENTATION PRINCIPLE: ANTICIPATE NEEDS, PROVIDE ANSWERS<br/>
                  {'>'} THIS DRIVES ALL MANIFESTATIONS OF MY CRAFT
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image & Quick Facts */}
          <div className="space-y-8">
            <Card className="card-futuristic card-variant-red">
              <CardContent className="p-8 text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4NDEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Jane Smith"
                  className="w-36 h-36 mx-auto object-cover mb-6 filter contrast-110 rounded-lg"
                />
                <h3 className="text-2xl mb-2 text-electric-yellow font-black uppercase">JANE SMITH</h3>
                <p className="text-alabaster mb-6 font-mono text-sm">
                  {'>'} UX ARCHITECT & TECH COMMUNICATOR
                </p>
                <Button className="w-full btn-futuristic">
                  <Download className="w-5 h-5 mr-2" />
                  DOWNLOAD RESUME
                </Button>
              </CardContent>
            </Card>

            <Card className="card-futuristic card-variant-teal">
              <CardHeader>
                <CardTitle className="text-lg text-electric-yellow font-black uppercase">SYSTEM SPECS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-alabaster/70">EXPERIENCE</span>
                  <span className="text-electric-yellow font-bold">6+ YEARS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-alabaster/70">LOCATION</span>
                  <span className="text-electric-yellow font-bold">SF, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-alabaster/70">LANGUAGES</span>
                  <span className="text-electric-yellow font-bold">EN, ES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-alabaster/70">STATUS</span>
                  <span className="text-teal-green font-bold">OPEN TO CONNECT</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <Card className="card-futuristic card-variant-purple">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-yellow font-black uppercase text-xl">
                <Award className="w-6 h-6 mr-3" />
                ARSENAL & TOOLS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} className="bg-deep-purple/50 text-electric-yellow border border-electric-yellow text-xs font-bold px-3 py-1">
                    {skill.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="card-futuristic card-variant-red">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-yellow font-black uppercase text-lg">
                <BookOpen className="w-6 h-6 mr-3" />
                KNOWLEDGE MATRIX
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-electric-yellow pl-6">
                  <h4 className="font-black text-electric-yellow uppercase text-sm">{edu.degree}</h4>
                  <p className="text-off-white/80 font-mono text-sm">{edu.school} • {edu.year}</p>
                  <p className="text-alabaster/70 text-xs font-mono mt-2">{'>'} {edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="card-futuristic card-variant-teal">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-yellow font-black uppercase text-lg">
                <Award className="w-6 h-6 mr-3" />
                VALIDATION CODES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-electric-yellow pl-6">
                  <h4 className="font-black text-electric-yellow uppercase text-sm">{cert.name}</h4>
                  <p className="text-alabaster/80 font-mono text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-16 relative">
            <h3 className="text-4xl md:text-5xl mb-8 heading-futuristic">
              PEER TRANSMISSIONS
            </h3>
            <div className="accent-line-futuristic w-24 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => {
              const cardVariant = index % 3 === 0 ? 'card-variant-red' : index % 3 === 1 ? 'card-variant-teal' : 'card-variant-purple';
              return (
                <Card key={index} className={`card-futuristic ${cardVariant}`}>
                  <CardContent className="p-8">
                    <p className="text-alabaster/90 mb-6 italic font-mono text-sm leading-relaxed">
                      "{'>'} {testimonial.quote}"
                    </p>
                    <div className="border-t-2 border-electric-yellow pt-4">
                      <p className="font-black text-electric-yellow uppercase text-sm">{testimonial.author}</p>
                      <p className="text-xs text-alabaster/70 font-mono">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}