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
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl mb-12 heading-futuristic">
            DESIGN GALLERY
          </h1>
          <div className="accent-line-futuristic w-32 mx-auto mb-8"></div>
          <p className="text-xl text-alabaster max-w-4xl mx-auto leading-tight font-mono">
            {'>'} EXPLORATION OF FORM, COLOR, AND DIGITAL AESTHETICS<br/>
            {'>'} WHERE CREATIVITY MEETS SYSTEMATIC DESIGN THINKING
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
                const cardVariant = index % 3 === 0 ? 'card-variant-red' : index % 3 === 1 ? 'card-variant-teal' : 'card-variant-purple';
                return (
                  <Card key={work.id} className={`card-futuristic ${cardVariant} group overflow-hidden`}>
                    <div className="aspect-square overflow-hidden relative">
                      <ImageWithFallback
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 btn-futuristic"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-electric-yellow uppercase">{work.title}</h3>
                        <Button variant="ghost" size="sm" className="p-1 h-auto text-electric-yellow hover:text-orange-red">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-alabaster/90 mb-6 font-mono">
                        {'>'} {work.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {work.tags.map((tag) => (
                          <Badge key={tag} className="bg-deep-purple/50 text-electric-yellow border border-electric-yellow text-xs font-bold">
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
          <Card className="card-futuristic card-variant-purple">
            <CardContent className="p-12">
              <h3 className="text-4xl mb-12 text-center heading-futuristic">DESIGN CAPABILITIES</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-electric-yellow border-2 border-orange-red rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-dark-charcoal font-black">V</span>
                  </div>
                  <h4 className="mb-4 text-electric-yellow font-bold uppercase">Visual Design</h4>
                  <p className="text-sm text-alabaster/90 font-mono leading-relaxed">
                    {'>'} Creating compelling visual experiences through typography, color, 
                    layout, and imagery that communicate brand values effectively.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-electric-yellow border-2 border-orange-red rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-dark-charcoal font-black">I</span>
                  </div>
                  <h4 className="mb-4 text-electric-yellow font-bold uppercase">Interface Design</h4>
                  <p className="text-sm text-alabaster/90 font-mono leading-relaxed">
                    {'>'} Designing intuitive user interfaces with comprehensive design systems 
                    that scale across platforms and devices.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-electric-yellow border-2 border-orange-red rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-dark-charcoal font-black">B</span>
                  </div>
                  <h4 className="mb-4 text-electric-yellow font-bold uppercase">Brand Identity</h4>
                  <p className="text-sm text-alabaster/90 font-mono leading-relaxed">
                    {'>'} Developing cohesive brand identities that tell stories and create 
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