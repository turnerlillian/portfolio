import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Download } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Header() {
  // Accessibility: skip to content
  // Place at the very top of the header
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "UX Case Studies", href: "/ux-case-studies" },
    { name: "Technical Writing", href: "/technical-writing" },
    { name: "Design Gallery", href: "/design-gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
  ];

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100]" style={{
      background: 'linear-gradient(120deg, rgba(202,240,248,0.92) 0%, rgba(186,230,253,0.92) 100%)',
      backdropFilter: 'blur(22px) saturate(1.3)',
  borderBottom: '1px solid rgba(56, 189, 248, 0.07)',
      boxShadow: '0 12px 36px 0 rgba(56,189,248,0.18), 0 2px 0 0 rgba(56,189,248,0.13) inset, 0 0 32px 0 rgba(255,255,255,0.10) inset',
      WebkitBackdropFilter: 'blur(22px) saturate(1.3)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
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
  <a href="#main-content" className="skip-to-content-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-seaglass-accent/80 text-seaglass-ink px-4 py-2 rounded-xl shadow-seaglass transition-all">Skip to main content</a>
  <div className="container mx-auto px-4 py-4">
  <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group" style={{display: 'flex', alignItems: 'center'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-seaglass-accent/90 to-seaglass-blue/80 border border-seaglass-ink/60 flex items-center justify-center rounded-full shadow-seaglass ring-2 ring-seaglass-blue/20" style={{
              boxShadow: '0 4px 24px 0 rgba(56,189,248,0.18), 0 0 0 6px rgba(202,240,248,0.18) inset',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
              <span className="text-seaglass-ink font-black text-xl drop-shadow-seaglass" style={{ fontFamily: 'Fraunces, Libre Baskerville, serif', fontWeight: 700, letterSpacing: '0.04em' }}>LT</span>
            </div>
            <div className="flex flex-col justify-center items-start" style={{marginLeft: '1rem', display: 'flex', justifyContent: 'center'}}>
              <span className="text-2xl font-black heading-seaglass text-seaglass-blue drop-shadow-seaglass" style={{ fontFamily: 'Fraunces, Libre Baskerville, serif', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1, marginTop: '0.4rem' }}>Lillian Turner</span>
              <div className="accent-line-seaglass w-20 bg-gradient-to-r from-seaglass-accent/60 to-seaglass-blue/40 h-1 rounded-full mt-1"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-montserrat text-seaglass-ink/90 hover:bg-seaglass-accent/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-seaglass-accent focus-visible:ring-offset-2 transition-transform duration-150 ${
                  location.pathname === item.href ? 'nav-seaglass-active font-bold text-base' : ''
                }`}
                style={location.pathname === item.href ? {} : { transition: 'transform 0.15s', display: 'inline-block' }}
                onMouseEnter={e => { if (location.pathname !== item.href) e.currentTarget.style.transform = 'scale(1.08)'; }}
                onMouseLeave={e => { if (location.pathname !== item.href) e.currentTarget.style.transform = 'scale(1)'; }}
                tabIndex={0}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeSheet}
                    className={`text-left py-2 text-lg font-montserrat hover:text-seaglass-accent transition-colors ${
                      location.pathname === item.href ? 'nav-seaglass-active font-bold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}