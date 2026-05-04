import { motion } from "framer-motion";
import { 
  Droplet, Filter, Wrench, Settings, 
  Disc, Battery, Zap, Car, ShieldCheck, Thermometer, Wind
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { name: "Oil Change", icon: Droplet },
  { name: "Oil Filter Replacement", icon: Filter },
  { name: "Full Service", icon: Wrench },
  { name: "Interim Service", icon: Settings },
  { name: "Brake Pads Replacement", icon: Disc },
  { name: "Brake Discs Replacement", icon: Disc },
  { name: "Suspension Repair", icon: Car },
  { name: "Engine Repair", icon: Settings },
  { name: "Gearbox Repair", icon: Settings },
  { name: "Clutch Repair", icon: Disc },
  { name: "Heater Radiator Replacement", icon: Thermometer },
  { name: "Coolant Leak Repair", icon: Droplet },
  { name: "Battery Replacement", icon: Battery },
  { name: "Car Diagnostics", icon: Zap },
  { name: "MOT Preparation", icon: ShieldCheck },
  { name: "Windscreen Replacement", icon: Wind },
  { name: "Car Glass Replacement", icon: Wind },
  { name: "General Repairs", icon: Wrench },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional car repair and maintenance services in Manchester. We handle everything from routine servicing to complex engine repairs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <a 
                href={`https://wa.me/447449296081?text=${encodeURIComponent(`Hello, I would like to book a ${service.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
                data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="h-full bg-card border-border group-hover:border-primary/50 group-hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}