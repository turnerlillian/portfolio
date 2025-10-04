import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ExternalLink, Eye } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const designWork = {
  branding: [
    {
      id: 1,
      title: "TechStart Logo & Brand Identity",
      description: "Complete brand identity system for a technology startup",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Logo Design", "Brand Identity", "Style Guide"],
      category: "Branding"
    },
    {
      id: 2,
      title: "EcoFood Brand System",
      description: "Sustainable food company brand identity and packaging",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Brand Identity", "Packaging", "Sustainability"],
      category: "Branding"
    },
    {
      id: 3,
      title: "HealthTech Visual Identity",
      description: "Medical technology company rebrand and guidelines",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Rebrand", "Healthcare", "Guidelines"],
      category: "Branding"
    }
  ],
  ui: [
    {
      id: 4,
      title: "Banking App Interface",
      description: "Mobile banking application user interface design",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile UI", "Fintech", "Design System"],
      category: "UI Design"
    },
    {
      id: 5,
      title: "E-learning Platform",
      description: "Educational platform interface with accessibility focus",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web UI", "Education", "Accessibility"],
      category: "UI Design"
    },
    {
      id: 6,
      title: "SaaS Dashboard",
      description: "Analytics dashboard with complex data visualization",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Dashboard", "Data Viz", "B2B"],
      category: "UI Design"
    }
  ],
  graphics: [
    {
      id: 7,
      title: "Conference Marketing Campaign",
      description: "Complete visual campaign for tech conference",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Marketing", "Event Design", "Print"],
      category: "Graphic Design"
    },
    {
      id: 8,
      title: "Annual Report Design",
      description: "Corporate annual report layout and infographics",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Editorial", "Infographics", "Corporate"],
      category: "Graphic Design"
    },
    {
      id: 9,
      title: "Social Media Campaign",
      description: "Multi-platform social media visual content",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTUwNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Social Media", "Digital Marketing", "Templates"],
      category: "Graphic Design"
    }
  ]
};

export function DesignGallery() {
  const [selectedTab, setSelectedTab] = useState("all");

  const getAllWork = () => {
    return [...designWork.branding, ...designWork.ui, ...designWork.graphics];
  };

  const getFilteredWork = () => {
    switch (selectedTab) {
      case "branding":
        return designWork.branding;
      case "ui":
        return designWork.ui;
      case "graphics":
        return designWork.graphics;
      default:
        return getAllWork();
    }
  };

  return (
    <section id="design-gallery" className="py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl mb-12 heading-seaglass">Design gallery</h1>
          <div className="accent-line-seaglass w-32 mx-auto mb-8"></div>
          <p className="text-xl font-montserrat text-seaglass-ink/90 max-w-4xl mx-auto leading-tight">
            Exploration of form, color, and digital aesthetics<br/>
            Where creativity meets systematic design thinking
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="ui">UI Design</TabsTrigger>
            <TabsTrigger value="graphics">Graphics</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {getFilteredWork().map((work, index) => {
                const colorClasses = ["seaglass-mint", "seaglass-blue", "seaglass-aqua", "seaglass-green", "seaglass-sand", "seaglass-cloud"];
                const color = colorClasses[index % colorClasses.length];
                return (
                  <Card key={work.id} className={`card-seaglass ${color} group overflow-hidden`}>
                    <div className="aspect-square overflow-hidden relative">
                      <ImageWithFallback
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 btn-seaglass font-montserrat"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-seaglass-accent uppercase font-montserrat">{work.title}</h3>
                        <Button variant="ghost" size="sm" className="btn-seaglass p-1 h-auto text-seaglass-accent hover:text-seaglass-green font-montserrat">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-seaglass-ink/90 mb-6 font-montserrat">
                        {work.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {work.tags.map((tag) => (
                          <Badge key={tag} className="bg-seaglass-badge text-seaglass-accent border border-seaglass-accent text-xs font-bold font-montserrat">
                            {tag.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Design Capabilities */}
        <div className="max-w-6xl mx-auto mt-20">
          <Card className="card-seaglass seaglass-mint">
            <CardContent className="p-12">
              <h3 className="text-4xl mb-12 text-center heading-seaglass">DESIGN CAPABILITIES</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-seaglass-accent border-2 border-seaglass-green rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-seaglass-ink font-black">V</span>
                  </div>
                  <h4 className="mb-4 text-seaglass-accent font-bold uppercase font-montserrat">Visual Design</h4>
                  <p className="text-sm text-seaglass-ink/90 font-montserrat leading-relaxed">
                    Creating compelling visual experiences through typography, color, 
                    layout, and imagery that communicate brand values effectively.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-seaglass-accent border-2 border-seaglass-green rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-seaglass-ink font-black">I</span>
                  </div>
                  <h4 className="mb-4 text-seaglass-accent font-bold uppercase font-montserrat">Interface Design</h4>
                  <p className="text-sm text-seaglass-ink/90 font-montserrat leading-relaxed">
                    Designing intuitive user interfaces with comprehensive design systems 
                    that scale across platforms and devices.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-seaglass-accent border-2 border-seaglass-green rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-seaglass-ink font-black">B</span>
                  </div>
                  <h4 className="mb-4 text-seaglass-accent font-bold uppercase font-montserrat">Brand Identity</h4>
                  <p className="text-sm text-seaglass-ink/90 font-montserrat leading-relaxed">
                    Developing cohesive brand identities that tell stories and create 
                    emotional connections with target audiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}