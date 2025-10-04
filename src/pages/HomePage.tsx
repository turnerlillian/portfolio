import { Hero } from "../components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Palette, Code, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "Creating intuitive and visually appealing interfaces that enhance user experience",
      variant: "card-maroon" as const
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Writing",
      description: "Clear, comprehensive documentation that bridges technical complexity and user understanding",
      variant: "card-olive" as const
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research",
      description: "Data-driven insights that inform design decisions and improve user satisfaction",
      variant: "card-brown" as const
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Design Systems",
      description: "Scalable design frameworks that ensure consistency across digital products",
      variant: "card-maroon" as const
    }
  ];

  const features = [
    { 
      number: "35%", 
      label: "Average Conversion Increase",
      color: "text-warm-brown"
    },
    { 
      number: "50+", 
      label: "Projects Delivered",
      color: "text-olive-gold"
    },
    { 
      number: "5+", 
      label: "Years Experience",
      color: "text-dark-maroon"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction",
      color: "text-warm-brown"
    }
  ];

  return (
    <main id="main-content" className="min-h-screen pt-20" tabIndex={-1} aria-label="Homepage main content">
      <Hero />
      
  {/* Services Section */}
  <section className="py-24" aria-labelledby="services-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 id="services-heading" className="text-5xl md:text-6xl mb-8 heading-contemporary">
                What I Do
              </h2>
              <div className="w-24 h-1 bg-warm-brown mx-auto rounded-full mb-6"></div>
              <p className="font-montserrat text-seaglass-ink/90 text-lg max-w-3xl mx-auto leading-relaxed">
                I combine design thinking with technical expertise to create meaningful digital experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const colorClasses = ["seaglass-mint", "seaglass-blue", "seaglass-aqua", "seaglass-green", "seaglass-sand", "seaglass-cloud"];
                const color = colorClasses[index % colorClasses.length];
                return (
                  <Card key={index} className={`card-seaglass ${color} group`}>
                    <CardHeader className="p-8">
                      <div className="mb-4 text-current opacity-80 card-glow-hover">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl mb-4 text-current">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-current/80 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="accent-line w-16"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

  {/* Stats Section */}
  <section className="py-20 bg-dark-maroon text-white" aria-labelledby="stats-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 id="stats-heading" className="sr-only">Key Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {features.map((feature, index) => {
                const colorClasses = ["seaglass-mint", "seaglass-blue", "seaglass-aqua", "seaglass-green", "seaglass-sand", "seaglass-cloud"];
                const color = colorClasses[index % colorClasses.length];
                return (
                  <div key={index} className="group">
                    <div className={`card-seaglass ${color} flex flex-col items-center justify-center p-8 shadow-seaglass transition-transform group-hover:scale-105`}>
                      <div className="text-5xl md:text-6xl font-black mb-2 text-seaglass-accent drop-shadow-seaglass">
                        {feature.number}
                      </div>
                      <div className="text-lg font-montserrat text-seaglass-ink/90 opacity-90">
                        {feature.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl mb-8 heading-contemporary">
              Ready to Create Something Amazing?
            </h2>
            <div className="w-24 h-1 bg-warm-brown mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to bring your ideas to life with user-centered design and strategic thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/ux-case-studies">
                <Button size="lg" className="btn-seaglass min-w-[200px] font-montserrat px-8 py-4">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="btn-seaglass min-w-[200px] font-montserrat px-8 py-4">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  </main>
  );
}