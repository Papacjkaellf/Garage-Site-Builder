import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card border-y border-border" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help with all your car repair and servicing needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone & WhatsApp</h3>
              <a href="tel:+447449296081" className="text-muted-foreground hover:text-primary mb-4 block text-lg">+44 7449 296081</a>
              <Button asChild className="w-full" data-testid="button-contact-whatsapp">
                <a href="https://wa.me/447449296081" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground text-lg mb-2">Monday – Sunday</p>
              <p className="font-medium text-primary text-xl">08:00 – 18:00</p>
              <p className="text-sm text-muted-foreground mt-4">Open 7 days a week</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center text-center p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-lg mb-4">Manchester,<br />United Kingdom</p>
              <Button asChild variant="outline" className="w-full" data-testid="button-contact-map">
                <a href="#google-maps">
                  View on Map
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}