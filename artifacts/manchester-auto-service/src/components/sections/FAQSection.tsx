import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How can I book a car repair?",
    a: "You can book quickly by choosing your service, preferred date and time, then sending the booking request through WhatsApp."
  },
  {
    q: "Do you work with all car brands?",
    a: "Yes, we work with most makes and models."
  },
  {
    q: "Are you open 7 days a week?",
    a: "Yes, we are open Monday to Sunday."
  },
  {
    q: "Can I book by WhatsApp?",
    a: "Yes, all bookings and quote requests can be sent directly through WhatsApp."
  },
  {
    q: "Do you cover Manchester and nearby towns?",
    a: "Yes, we cover Manchester, Salford, Trafford, Stockport, Oldham, Bolton, Bury and nearby areas."
  },
  {
    q: "Do you offer oil change and full service?",
    a: "Yes, we offer oil changes, oil filter replacement, interim service and full service."
  },
  {
    q: "Can you repair brakes, suspension and engine problems?",
    a: "Yes, we offer brake repairs, suspension repairs, diagnostics, engine repairs and general vehicle repairs."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background" data-testid="section-faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}