import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function StickyWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/447449296081"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
      data-testid="sticky-whatsapp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      <MessageCircle className="w-7 h-7 relative z-10" />
    </motion.a>
  );
}