import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wrench, Phone, MessageSquare } from "lucide-react";

export function HeroSection() {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#booking");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const getQuoteMessage = encodeURIComponent(
    "Hello, I would like to get a quote for my car repair.\n\nMy car:\nService needed:\nAdditional details:"
  );

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Professional car garage workshop interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              <Wrench className="w-4 h-4" />
              <span>Manchester's Trusted Auto Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Car Repairs & <span className="text-primary">Servicing</span> in Manchester
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Oil change, brakes, suspension, diagnostics, heater radiator replacement, engine repairs, gearbox repairs and full vehicle maintenance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-primary-foreground font-bold text-base h-14 px-8 shadow-lg shadow-primary/20" data-testid="button-hero-book">
                <a href="#booking" onClick={scrollToBooking}>
                  Book Now
                </a>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="font-bold text-base h-14 px-8 shadow-lg shadow-secondary/20" data-testid="button-hero-whatsapp">
                <a href="https://wa.me/447449296081" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold text-base h-14 px-8" data-testid="button-hero-quote">
                <a href={`https://wa.me/447449296081?text=${getQuoteMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}