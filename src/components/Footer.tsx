import { Link } from "react-router-dom";
import { Shield, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <Shield className="h-6 w-6" />
            Kwekwe Key Centre
          </Link>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Your trusted locksmith partner in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe. Professional key cutting, lock installation, and emergency services.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-accent transition-colors">Car Key Programming</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Residential Locks</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Commercial Security</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Emergency Lockout</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+263716253002" className="hover:text-accent transition-colors">0716253002</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:kwekwekeycentre@gmail.com" className="hover:text-accent transition-colors">kwekwekeycentre@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent" />
              <span>Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Kwekwe Key Centre. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
