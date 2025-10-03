import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export function Hero() {

  return (
    <section id="home" className="py-24">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl mb-12 heading-futuristic">
            JANE SMITH
          </h1>
          <div className="accent-line-futuristic w-32 mx-auto mb-8"></div>
          <p className="text-xl text-alabaster max-w-4xl mx-auto leading-tight font-mono">
            {'>'} DIGITAL ARCHITECT & UX DESIGNER<br/>
            {'>'} CRAFTING EXPERIENCES THAT TRANSCEND THE ORDINARY
          </p>
        </div>

        <div className="mb-20 relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4NDEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="JANE SMITH - DIGITAL ARCHITECT"
            className="w-60 h-60 mx-auto object-cover border-4 border-electric-yellow rounded-lg filter contrast-110"
          />
        </div>
          
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <Link to="/ux-case-studies">
            <Button size="lg" className="min-w-[240px] btn-futuristic">
              VIEW PORTFOLIO
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" className="min-w-[240px] btn-secondary">
              <Mail className="w-5 h-5 mr-3" />
              GET IN TOUCH
            </Button>
          </Link>
        </div>
        
        <div className="flex justify-center space-x-12 mt-16">
          <a href="#" className="text-electric-yellow hover:text-orange-red transition-colors group relative">
            <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="text-electric-yellow hover:text-orange-red transition-colors group relative">
            <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}