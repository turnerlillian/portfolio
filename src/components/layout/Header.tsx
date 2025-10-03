import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Download } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Header() {
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
    <header className="fixed top-0 w-full nav-futuristic z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-electric-yellow border-2 border-orange-red flex items-center justify-center rounded group-hover:scale-110 transition-transform">
              <span className="text-dark-charcoal font-black text-xl" style={{ fontFamily: 'Orbitron, Exo, Inter, Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.08em' }}>JS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black heading-futuristic" style={{ fontFamily: 'Orbitron, Exo, Inter, Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.08em' }}>JANE SMITH</span>
              <div className="accent-line-futuristic w-20 mt-1"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-item-futuristic ${
                  location.pathname === item.href ? 'active' : ''
                }`}
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
                    className={`text-left py-2 text-lg hover:text-primary transition-colors ${
                      location.pathname === item.href ? 'text-primary' : ''
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