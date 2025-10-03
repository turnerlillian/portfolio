import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Mail, Phone, Globe, Calendar } from "lucide-react";

export function ResumePage() {
  const downloadResume = () => {
    console.log("Downloading resume...");
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <h1 className="text-6xl md:text-8xl mb-12 heading-futuristic">
              RESUME
            </h1>
            <div className="accent-line-futuristic w-32 mx-auto mb-8"></div>
            <p className="text-xl text-alabaster max-w-4xl mx-auto leading-tight font-mono">
              {'>'} COMPREHENSIVE ARCHIVE OF DIGITAL EXPERTISE AND ACCOMPLISHMENTS<br/>
              {'>'} CHRONICLING THE EVOLUTION OF TECHNICAL MASTERY
            </p>
            <Button onClick={downloadResume} size="lg" className="btn-futuristic mt-12">
              DOWNLOAD CODEX
            </Button>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            <Card className="card-futuristic card-variant-purple">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-electric-yellow font-bold uppercase">
                  <svg className="mr-3 h-6 w-6 text-electric-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  CORRESPONDENCE MATRIX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-electric-yellow" />
                    <span className="text-lg text-alabaster font-mono">alex.designer@email.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-electric-yellow" />
                    <span className="text-lg text-alabaster font-mono">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-electric-yellow" />
                    <span className="text-lg text-alabaster font-mono">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="h-6 w-6 text-electric-yellow" />
                    <span className="text-lg text-alabaster font-mono">portfolio.alexsmith.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Summary */}
            <Card className="card-futuristic card-variant-red">
              <CardHeader>
                <CardTitle className="text-2xl text-electric-yellow font-bold uppercase">EXECUTIVE PROTOCOL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-alabaster/90 leading-relaxed font-mono">
                  {'>'} EXPERIENCED UX ARCHITECT WITH 6+ CYCLES OF DIGITAL EVOLUTION<br/>
                  {'>'} SPECIALIZING IN HUMAN-COMPUTER INTERFACE OPTIMIZATION<br/>
                  {'>'} PROVEN TRACK RECORD OF TRANSFORMING COMPLEX TECHNICAL CONCEPTS<br/>
                  {'>'} INTO INTUITIVE USER EXPERIENCES AND COMPREHENSIVE DOCUMENTATION
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-futuristic card-variant-teal">
              <CardHeader>
                <CardTitle className="text-2xl text-electric-yellow font-bold uppercase">MISSION HISTORY</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="border-l-4 border-electric-yellow pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-electric-yellow">SENIOR UX DESIGNER</h3>
                    <Badge className="bg-deep-purple/50 text-electric-yellow border border-electric-yellow">2022 - PRESENT</Badge>
                  </div>
                  <p className="text-lg text-orange-red font-mono font-bold">TechFlow Solutions</p>
                  <ul className="mt-4 space-y-2 text-alabaster/90 font-mono text-sm">
                    <li>{'>'} Led UX design for enterprise software serving 10K+ users</li>
                    <li>{'>'} Implemented design system reducing development time by 40%</li>
                    <li>{'>'} Conducted user research resulting in 35% improvement in task completion</li>
                    <li>{'>'} Mentored junior designers and established UX best practices</li>
                  </ul>
                </div>

                <div className="border-l-4 border-electric-yellow pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-electric-yellow">UX DESIGNER & TECHNICAL WRITER</h3>
                    <Badge className="bg-deep-purple/50 text-electric-yellow border border-electric-yellow">2019 - 2022</Badge>
                  </div>
                  <p className="text-lg text-orange-red font-mono font-bold">DataSync Corp</p>
                  <ul className="mt-4 space-y-2 text-alabaster/90 font-mono text-sm">
                    <li>{'>'} Designed mobile-first interfaces for data analytics platform</li>
                    <li>{'>'} Created comprehensive API documentation used by 5K+ developers</li>
                    <li>{'>'} Reduced support tickets by 50% through improved UX and documentation</li>
                    <li>{'>'} Collaborated with engineering teams on technical implementation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="card-futuristic card-variant-purple">
              <CardHeader>
                <CardTitle className="text-2xl text-electric-yellow font-bold uppercase">TECHNICAL ARSENAL</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-electric-yellow mb-4 uppercase">DESIGN TOOLS</h4>
                    <div className="space-y-2">
                      {["Figma", "Sketch", "Adobe Creative Suite", "Principle", "InVision"].map((skill) => (
                        <Badge key={skill} className="bg-deep-purple/30 text-electric-yellow border border-electric-yellow mr-2 mb-2">
                          {skill.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-electric-yellow mb-4 uppercase">DEVELOPMENT</h4>
                    <div className="space-y-2">
                      {["HTML/CSS", "JavaScript", "React", "Git", "API Design"].map((skill) => (
                        <Badge key={skill} className="bg-deep-purple/30 text-electric-yellow border border-electric-yellow mr-2 mb-2">
                          {skill.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-electric-yellow mb-4 uppercase">METHODOLOGY</h4>
                    <div className="space-y-2">
                      {["User Research", "Design Systems", "Prototyping", "Usability Testing", "Agile/Scrum"].map((skill) => (
                        <Badge key={skill} className="bg-deep-purple/30 text-electric-yellow border border-electric-yellow mr-2 mb-2">
                          {skill.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-futuristic card-variant-red">
              <CardHeader>
                <CardTitle className="text-2xl text-electric-yellow font-bold uppercase">KNOWLEDGE ACQUISITION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-electric-yellow pl-6">
                  <h3 className="text-xl font-bold text-electric-yellow">MASTER OF HUMAN-COMPUTER INTERACTION</h3>
                  <p className="text-lg text-orange-red font-mono font-bold">Carnegie Mellon University • 2018</p>
                  <p className="text-alabaster/90 font-mono text-sm mt-2">{'>'} Specialized in user research methodologies and interaction design</p>
                </div>
                <div className="border-l-4 border-electric-yellow pl-6">
                  <h3 className="text-xl font-bold text-electric-yellow">BACHELOR OF COMMUNICATION DESIGN</h3>
                  <p className="text-lg text-orange-red font-mono font-bold">Parsons School of Design • 2016</p>
                  <p className="text-alabaster/90 font-mono text-sm mt-2">{'>'} Focus on visual communication and design thinking principles</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}