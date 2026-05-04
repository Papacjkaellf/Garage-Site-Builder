import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              MANCHESTER <span className="text-primary">AUTO</span>
            </h3>
            <p className="text-muted-foreground max-w-sm mb-4">
              Car repairs, servicing and diagnostics in Manchester.
            </p>
            <p className="text-primary font-medium mb-4">Open 7 days a week.</p>
            <a 
              href="https://wa.me/447449296081" 
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              WhatsApp: +44 7449 296081
            </a>
          </div>

          <div className="flex md:justify-end">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">Booking</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Manchester Auto Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}