import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Manchester", "Salford", "Trafford", "Stockport", 
  "Oldham", "Rochdale", "Bolton", "Bury", 
  "Wigan", "Ashton-under-Lyne", "Eccles", "Stretford", 
  "Didsbury", "Chorlton", "Cheetham Hill", "Middleton"
];

export function AreasCovered() {
  return (
    <section id="areas-covered" className="py-24 bg-background" data-testid="section-areas">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Areas We <span className="text-secondary">Cover</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We cover Manchester and surrounding areas including:
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-secondary/50 transition-colors"
            >
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium text-foreground">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}