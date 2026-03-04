import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/263771234567?text=Hi%2C%20I%20need%20locksmith%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success shadow-lg transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
  >
    <MessageCircle className="h-7 w-7 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
