import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Mail, Linkedin, Github, ExternalLink, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] border-t border-[var(--glass-border-strong)]" 
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur))',
        borderColor: 'var(--glass-border-strong)',
      }}>
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground">JS</span>
              </div>
              <span className="text-xl font-semibold">Jane Smith</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              UX Designer & Technical Communicator creating intuitive digital experiences 
              and clear documentation that bridge technology and human understanding.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/ux-case-studies" className="hover:text-foreground transition-colors">
                  UX Case Studies
                </Link>
              </li>
              <li>
                <Link to="/technical-writing" className="hover:text-foreground transition-colors">
                  Technical Writing
                </Link>
              </li>
              <li>
                <Link to="/design-gallery" className="hover:text-foreground transition-colors">
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="mailto:jane.smith@email.com" 
                  className="hover:text-foreground transition-colors"
                >
                  jane.smith@email.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-muted-foreground">
                San Francisco, CA
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <p>© {currentYear} Jane Smith. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="mt-4 md:mt-0"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}