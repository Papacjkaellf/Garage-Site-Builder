import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Booking", href: "#booking" },
    { name: "Areas Covered", href: "#areas-covered" },
    { name: "Google Maps", href: "#google-maps" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#")}
          className="text-xl md:text-2xl font-bold tracking-tight text-primary flex items-center gap-2"
          data-testid="link-logo"
        >
          <span className="text-foreground">MANCHESTER</span> AUTO
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button asChild variant="default" className="font-semibold text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all">
            <a href="https://wa.me/447449296081" target="_blank" rel="noopener noreferrer" data-testid="button-nav-whatsapp">
              <Phone className="w-4 h-4 mr-2" />
              07449 296081
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
              data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-2 font-semibold">
            <a href="https://wa.me/447449296081" target="_blank" rel="noopener noreferrer" data-testid="button-mobile-whatsapp">
              <Phone className="w-4 h-4 mr-2" />
              07449 296081
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}