import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, BookOpen, MessageSquare, GitBranch, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const writingSamples = [
  {
    id: 1,
    title: "API Documentation Suite",
    description: "Comprehensive REST API documentation with interactive examples and code samples in multiple languages.",
    type: "API Documentation",
    icon: <GitBranch className="w-5 h-5" />,
    tags: ["REST API", "Interactive Docs", "Code Examples", "Developer Tools"],
    metrics: "Used by 10K+ developers",
    content: "Complete API reference with authentication guides, endpoint documentation, error handling, and SDK tutorials."
  },
  {
    id: 2,
    title: "User Onboarding Guide Series",
    description: "Step-by-step guides that reduced support tickets by 40% and improved user activation rates.",
    type: "User Guides",
    icon: <BookOpen className="w-5 h-5" />,
    tags: ["User Education", "Onboarding", "Screenshots", "Video Scripts"],
    metrics: "40% reduction in support tickets",
    content: "Progressive user guides with interactive tutorials, video walkthroughs, and contextual help documentation."
  },
  {
    id: 3,
    title: "Technical Blog Content",
    description: "Engineering blog posts explaining complex concepts in accessible language for developer audiences.",
    type: "Blog Content",
    icon: <MessageSquare className="w-5 h-5" />,
    tags: ["Technical Writing", "Developer Education", "SEO", "Thought Leadership"],
    metrics: "50K+ monthly readers",
    content: "In-depth technical articles covering architecture decisions, best practices, and emerging technologies."
  },
  {
    id: 4,
    title: "Process Documentation",
    description: "Internal process documentation for engineering teams including deployment guides and troubleshooting.",
    type: "Process Docs",
    icon: <FileText className="w-5 h-5" />,
    tags: ["Internal Docs", "Processes", "Troubleshooting", "Team Training"],
    metrics: "100% team adoption",
    content: "Standardized processes for deployment, incident response, code reviews, and team onboarding."
  }
];

const contentTypes = [
  {
    title: "User Guides",
    description: "Clear, step-by-step instructions with screenshots and examples",
    examples: ["Getting Started Guides", "Feature Tutorials", "Troubleshooting FAQs"]
  },
  {
    title: "API Documentation", 
    description: "Developer-focused technical documentation with code samples",
    examples: ["REST API References", "SDK Documentation", "Integration Guides"]
  },
  {
    title: "Knowledge Base",
    description: "Searchable help content organized by user needs and workflows",
    examples: ["Help Articles", "Video Tutorials", "Community Forums"]
  },
  {
    title: "Content Strategy",
    description: "Strategic content planning and information architecture",
    examples: ["Content Audits", "Information Architecture", "Style Guides"]
  }
];

export function TechnicalWriting() {
  return (
    <section id="tech-writing" className="py-24">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl mb-12 heading-futuristic">
            TECHNICAL WRITING
          </h1>
          <div className="accent-line-futuristic w-32 mx-auto mb-8"></div>
          <p className="text-xl text-alabaster max-w-4xl mx-auto leading-tight font-mono">
            {'>'} TRANSMUTING COMPLEX TECHNICAL CONCEPTS INTO ACCESSIBLE KNOWLEDGE<br/>
            {'>'} BRIDGING THE GAP BETWEEN MACHINE LOGIC AND HUMAN UNDERSTANDING
          </p>
        </div>

        {/* Writing Samples */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {writingSamples.map((sample, index) => {
            const cardVariant = index % 3 === 0 ? 'card-variant-red' : index % 3 === 1 ? 'card-variant-teal' : 'card-variant-purple';
            return (
              <Card key={sample.id} className={`card-futuristic ${cardVariant} group`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center text-electric-yellow">
                      {sample.icon}
                      <span className="ml-3 text-sm font-black uppercase font-mono">{sample.type}</span>
                    </div>
                    <Badge className="bg-deep-purple/50 text-electric-yellow border border-electric-yellow text-xs font-bold">
                      {sample.metrics}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-electric-yellow font-black uppercase mb-3">
                    {sample.title}
                  </CardTitle>
                  <CardDescription className="text-alabaster/90 font-mono text-sm leading-relaxed">
                    {'>'} {sample.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-alabaster/80 mb-6 font-mono">
                    {'>'} {sample.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {sample.tags.map((tag) => (
                      <Badge key={tag} className="bg-deep-purple/30 text-electric-yellow border border-electric-yellow/50 text-xs font-bold">
                        {tag.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full btn-futuristic group-hover:btn-secondary transition-all duration-300">
                    VIEW SAMPLE
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Types */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            <h3 className="text-4xl md:text-5xl mb-8 heading-futuristic">
              SPECIALIZATION MATRIX
            </h3>
            <div className="accent-line-futuristic w-24 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => {
              const cardVariant = index % 3 === 0 ? 'card-variant-red' : index % 3 === 1 ? 'card-variant-teal' : 'card-variant-purple';
              return (
                <Card key={type.title} className={`card-futuristic ${cardVariant} text-center`}>
                  <CardHeader>
                    <CardTitle className="text-lg text-electric-yellow font-black uppercase">{type.title}</CardTitle>
                    <CardDescription className="text-alabaster/80 font-mono text-sm">{'>'} {type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-alabaster/70 space-y-2 font-mono text-left">
                      {type.examples.map((example) => (
                        <li key={example} className="text-xs">{'>'} {example.toUpperCase()}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Featured Work */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Featured Documentation Project</CardTitle>
            <CardDescription>
              Complete documentation overhaul for a B2B SaaS platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1616861771635-49063a4636ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBkb2N1bWVudGF0aW9ufGVufDF8fHx8MTc1OTQ1MTA5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technical Documentation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-xl mb-4">Documentation Transformation</h4>
                <p className="text-muted-foreground mb-4">
                  Led a complete overhaul of technical documentation for a complex enterprise platform, 
                  resulting in significant improvements in user adoption and support efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">65%</span>
                    <p className="text-muted-foreground">Reduction in support tickets</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">3x</span>
                    <p className="text-muted-foreground">Faster user onboarding</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">90%</span>
                    <p className="text-muted-foreground">Developer satisfaction</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">200+</span>
                    <p className="text-muted-foreground">Documentation pages</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}