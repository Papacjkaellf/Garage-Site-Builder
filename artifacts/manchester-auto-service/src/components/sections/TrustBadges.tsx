import { motion } from "framer-motion";
import { Clock, MessageCircle, PoundSterling, MapPin, CarFront, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const badges = [
  { icon: Clock, title: "Open 7 Days a Week" },
  { icon: MessageCircle, title: "Fast WhatsApp Booking" },
  { icon: PoundSterling, title: "Affordable Prices" },
  { icon: MapPin, title: "Local Manchester Mechanic" },
  { icon: CarFront, title: "All Makes & Models" },
  { icon: CheckCircle2, title: "Quick Confirmation" },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-card/50 border-y border-border" data-testid="section-trust">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="bg-background border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <badge.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight text-foreground">{badge.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}