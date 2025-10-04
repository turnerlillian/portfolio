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
    <footer className="z-40" style={{
      background: 'linear-gradient(120deg, rgba(202,240,248,0.92) 0%, rgba(186,230,253,0.92) 100%)',
      backdropFilter: 'blur(22px) saturate(1.3)',
  borderTop: '1px solid rgba(56, 189, 248, 0.07)',
      boxShadow: '0 -12px 36px 0 rgba(56,189,248,0.14), 0 -2px 0 0 rgba(56,189,248,0.13) inset, 0 0 32px 0 rgba(255,255,255,0.10) inset',
      WebkitBackdropFilter: 'blur(22px) saturate(1.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glass highlight overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '40%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-seaglass-accent/90 to-seaglass-blue/80 border border-seaglass-ink/60 flex items-center justify-center rounded-2xl shadow-seaglass ring-2 ring-seaglass-blue/20" style={{
                boxShadow: '0 4px 24px 0 rgba(56,189,248,0.18), 0 0 0 6px rgba(202,240,248,0.18) inset',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2.5rem',
                minHeight: '2.5rem'
              }}>
                {/* Logo inner shine */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, height: '55%',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 100%)',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem',
                  pointerEvents: 'none',
                  zIndex: 1
                }} />
                <span className="text-seaglass-ink font-black text-lg drop-shadow-seaglass" style={{ fontFamily: 'Fraunces, Libre Baskerville, serif', fontWeight: 700, letterSpacing: '0.04em' }}>LT</span>
              </div>
              <span className="text-xl font-black heading-seaglass text-seaglass-blue drop-shadow-seaglass" style={{ fontFamily: 'Fraunces, Libre Baskerville, serif', fontWeight: 700, letterSpacing: '0.04em' }}>Lillian Turner</span>
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