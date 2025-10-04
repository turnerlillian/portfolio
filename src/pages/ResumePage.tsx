import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Mail, Phone, Globe, Calendar } from "lucide-react";

export function ResumePage() {
  const downloadResume = () => {
    console.log("Downloading resume...");
  };

  return (
    <main id="main-content" className="min-h-screen pt-20" tabIndex={-1} aria-label="Resume main content">
      <section className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <h1 className="text-6xl md:text-8xl mb-12 heading-seaglass">Resume</h1>
            <div className="accent-line-seaglass w-32 mx-auto mb-8"></div>
            <p className="text-xl font-montserrat text-seaglass-ink/90 max-w-4xl mx-auto leading-tight">
              Comprehensive archive of digital expertise and accomplishments<br/>
              Chronicling the evolution of technical mastery
            </p>
            <Button onClick={downloadResume} size="lg" className="btn-seaglass mt-12 font-montserrat">
              Download codex
            </Button>
          </div>
          <div className="max-w-6xl mx-auto space-y-16">
                        {/* Contact Card */}
                        <Card className="card-seaglass seaglass-mint">
                          <CardHeader>
                            <CardTitle className="text-2xl flex items-center text-seaglass-blue font-black drop-shadow-seaglass">
                              <svg className="mr-3 h-6 w-6 text-seaglass-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                              </svg>
                              Correspondence Matrix
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-seaglass-accent" />
                                <span className="text-lg text-seaglass-ink font-montserrat">alex.designer@email.com</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-seaglass-blue" />
                                <span className="text-lg text-seaglass-ink font-montserrat">(555) 123-4567</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-seaglass-green" />
                                <span className="text-lg text-seaglass-ink font-montserrat">San Francisco, CA</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <Globe className="h-6 w-6 text-seaglass-accent" />
                                <span className="text-lg text-seaglass-ink font-montserrat">portfolio.alexsmith.com</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Professional Summary */}
                        <Card className="card-seaglass seaglass-blue">
                          <CardHeader>
                            <CardTitle className="text-2xl text-seaglass-accent font-black drop-shadow-seaglass">Executive Protocol</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-lg text-seaglass-ink/90 leading-relaxed font-montserrat">
                              EXPERIENCED UX ARCHITECT WITH 6+ CYCLES OF DIGITAL EVOLUTION<br/>
                              SPECIALIZING IN HUMAN-COMPUTER INTERFACE OPTIMIZATION<br/>
                              PROVEN TRACK RECORD OF TRANSFORMING COMPLEX TECHNICAL CONCEPTS<br/>
                              INTO INTUITIVE USER EXPERIENCES AND COMPREHENSIVE DOCUMENTATION
                            </p>
                          </CardContent>
                        </Card>

                        {/* Experience */}
                        <Card className="card-seaglass seaglass-green">
                          <CardHeader>
                            <CardTitle className="text-2xl text-seaglass-blue font-black drop-shadow-seaglass">Mission History</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-8">
                            <div className="border-l-4 border-seaglass-accent/80 pl-6">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-black text-seaglass-blue">Senior UX Designer</h3>
                                <Badge className="bg-seaglass-blue/20 text-seaglass-blue border border-seaglass-blue/40 font-montserrat">2022 - PRESENT</Badge>
                              </div>
                              <p className="text-lg text-seaglass-accent font-montserrat font-bold">TechFlow Solutions</p>
                              <ul className="mt-4 space-y-2 text-seaglass-ink/90 font-montserrat text-sm">
                                <li>Led UX design for enterprise software serving 10K+ users</li>
                                <li>Implemented design system reducing development time by 40%</li>
                                <li>Conducted user research resulting in 35% improvement in task completion</li>
                                <li>Mentored junior designers and established UX best practices</li>
                              </ul>
                            </div>

                            <div className="border-l-4 border-seaglass-accent/80 pl-6">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-black text-seaglass-blue">UX Designer & Technical Writer</h3>
                                <Badge className="bg-seaglass-green/20 text-seaglass-green border border-seaglass-green/40 font-montserrat">2019 - 2022</Badge>
                              </div>
                              <p className="text-lg text-seaglass-accent font-montserrat font-bold">DataSync Corp</p>
                              <ul className="mt-4 space-y-2 text-seaglass-ink/90 font-montserrat text-sm">
                                <li>Designed mobile-first interfaces for data analytics platform</li>
                                <li>Created comprehensive API documentation used by 5K+ developers</li>
                                <li>Reduced support tickets by 50% through improved UX and documentation</li>
                                <li>Collaborated with engineering teams on technical implementation</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Skills */}
                        <Card className="card-seaglass seaglass-aqua">
                          <CardHeader>
                            <CardTitle className="text-2xl text-seaglass-accent font-black drop-shadow-seaglass">Technical Arsenal</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div>
                              <h4 className="text-lg font-black text-seaglass-blue mb-4 font-montserrat">Design Tools</h4>
                              <div className="space-y-2">
                                {['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision'].map((skill) => (
                                  <Badge key={skill} className="bg-seaglass-blue/10 text-seaglass-blue border border-seaglass-blue/40 font-montserrat mr-2 mb-2">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-black text-seaglass-green mb-4 font-montserrat">Development</h4>
                              <div className="space-y-2">
                                {['HTML/CSS', 'JavaScript', 'React', 'Git', 'API Design'].map((skill) => (
                                  <Badge key={skill} className="bg-seaglass-green/10 text-seaglass-green border border-seaglass-green/40 font-montserrat mr-2 mb-2">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-black text-seaglass-accent mb-4 font-montserrat">Methodology</h4>
                              <div className="space-y-2">
                                {['User Research', 'Design Systems', 'Prototyping', 'Usability Testing', 'Agile/Scrum'].map((skill) => (
                                  <Badge key={skill} className="bg-seaglass-accent/10 text-seaglass-accent border border-seaglass-accent/40 font-montserrat mr-2 mb-2">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Education */}
                        <Card className="card-seaglass seaglass-blue">
                          <CardHeader>
                            <CardTitle className="text-2xl text-seaglass-blue font-black drop-shadow-seaglass">Knowledge Acquisition</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="border-l-4 border-seaglass-accent/80 pl-6">
                              <h3 className="text-xl font-black text-seaglass-blue font-montserrat">Master of Human-Computer Interaction</h3>
                              <p className="text-lg text-seaglass-accent font-montserrat font-bold">Carnegie Mellon University • 2018</p>
                              <p className="text-seaglass-ink/90 font-montserrat text-sm mt-2">Specialized in user research methodologies and interaction design</p>
                            </div>
                            <div className="border-l-4 border-seaglass-accent/80 pl-6">
                              <h3 className="text-xl font-black text-seaglass-blue font-montserrat">Bachelor of Communication Design</h3>
                              <p className="text-lg text-seaglass-accent font-montserrat font-bold">Parsons School of Design • 2016</p>
                              <p className="text-seaglass-ink/90 font-montserrat text-sm mt-2">Focus on visual communication and design thinking principles</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </section>
                </main>
              );
            }