import { Phone, AlertTriangle } from "lucide-react";

const EmergencyBanner = () => (
  <section className="bg-emergency text-emergency-foreground">
    <div className="container flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
      <div className="flex items-center gap-2 font-display font-bold">
        <AlertTriangle className="h-5 w-5 animate-pulse" />
        <span>24/7 Emergency Lockout Service Available</span>
      </div>
      <a
        href="tel:+263771234567"
        className="inline-flex items-center gap-2 rounded-full bg-emergency-foreground/20 px-5 py-2 text-sm font-semibold transition-colors hover:bg-emergency-foreground/30"
      >
        <Phone className="h-4 w-4" />
        Call Emergency Line
      </a>
    </div>
  </section>
);

export default EmergencyBanner;
