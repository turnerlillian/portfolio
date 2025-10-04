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

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Personal Story */}
          <div className="lg:col-span-2">
            <Card className={`card-seaglass seaglass-mint h-full`}>
              <CardHeader>
                <CardTitle className="flex items-center heading-seaglass text-xl">
                  <Users className="w-6 h-6 mr-3" />
                  Origin story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 font-montserrat text-seaglass-ink/90">
        <p className="font-montserrat text-seaglass-ink/90 text-lg">
          6+ years of digital design experience<br/>
          UX design & technical communication<br/>
          Mission: human-centered, elegant solutions<br/>
          Bridging design & development<br/>
          User research ↔ technical implementation<br/>
          Beautiful, usable, and viable outcomes<br/>
          Philosophy: design should feel effortless<br/>
          Docs: anticipate needs, provide clarity<br/>
          This guides my practice
        </p>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image & Quick Facts */}
          <div className="space-y-8">
            <Card className={`card-seaglass seaglass-blue`}>
              <CardContent className="p-8 text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4NDEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Jane Smith"
                  className="w-36 h-36 mx-auto object-cover mb-6 rounded-xl shadow-seaglass"
                />
                <h3 className="text-2xl mb-2 heading-seaglass">Jane Smith</h3>
                <p className="text-seaglass-ink/80 mb-6 font-montserrat text-sm">
                  <span className="font-montserrat text-seaglass-ink/80">UX architect & tech communicator</span>
                </p>
                <Button className="w-full btn-seaglass">
                  <Download className="w-5 h-5 mr-2" />
                  Download resume
                </Button>
              </CardContent>
            </Card>

            <Card className={`card-seaglass seaglass-aqua`}>
              <CardHeader>
                <CardTitle className="text-lg heading-seaglass">QUICK FACTS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-montserrat text-sm">
                <div className="flex justify-between">
                  <span className="text-seaglass-ink/70">EXPERIENCE</span>
                  <span className="text-seaglass-accent font-bold">6+ YEARS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-seaglass-ink/70">LOCATION</span>
                  <span className="text-seaglass-accent font-bold">SF, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-seaglass-ink/70">LANGUAGES</span>
                  <span className="text-seaglass-accent font-bold">EN, ES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-seaglass-ink/70">STATUS</span>
                  <span className="text-seaglass-green font-bold">OPEN TO CONNECT</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
            <Card className={`card-seaglass seaglass-green`}>
            <CardHeader>
              <CardTitle className="flex items-center heading-seaglass text-xl">
                <Award className="w-6 h-6 mr-3" />
                SKILLS & TOOLS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} className="bg-seaglass-badge text-seaglass-accent border border-seaglass-accent text-xs font-bold px-3 py-1">
                    {skill.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className={`card-seaglass seaglass-sand`}>
            <CardHeader>
              <CardTitle className="flex items-center heading-seaglass text-lg">
                <BookOpen className="w-6 h-6 mr-3" />
                EDUCATION
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-seaglass-accent pl-6">
                  <h4 className="font-black text-seaglass-accent uppercase text-sm">{edu.degree}</h4>
                  <p className="text-seaglass-ink/80 font-montserrat text-sm">{edu.school} • {edu.year}</p>
                  <p className="text-seaglass-ink/60 text-xs font-montserrat mt-2">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

            <Card className={`card-seaglass seaglass-cloud`}>
            <CardHeader>
              <CardTitle className="flex items-center heading-seaglass text-lg">
                <Award className="w-6 h-6 mr-3" />
                CERTIFICATIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-seaglass-accent pl-6">
                  <h4 className="font-black text-seaglass-accent uppercase text-sm">{cert.name}</h4>
                  <p className="text-seaglass-ink/80 font-montserrat text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-16 relative">
            <h3 className="text-4xl md:text-5xl mb-8 heading-seaglass">
              TESTIMONIALS
            </h3>
            <div className="accent-line-seaglass w-24 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => {
              const colorClasses = ["seaglass-mint", "seaglass-blue", "seaglass-aqua", "seaglass-green", "seaglass-sand", "seaglass-cloud"];
              const color = colorClasses[index % colorClasses.length];
              return (
                <Card key={index} className={`card-seaglass ${color}`}>
                  <CardContent className="p-8">
                    <p className="text-seaglass-ink/90 mb-6 italic font-montserrat text-sm leading-relaxed">
                      <span className="font-montserrat text-seaglass-ink/90">"{testimonial.quote}"</span>
                    </p>
                    <div className="border-t-2 border-seaglass-accent pt-4">
                      <p className="font-black text-seaglass-accent uppercase text-sm">{testimonial.author}</p>
                      <p className="text-xs text-seaglass-ink/60 font-montserrat">
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