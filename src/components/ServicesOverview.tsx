import { Link } from "react-router-dom";
import { Key, Home, Building2, ShieldAlert, Lock, Car } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Car, title: "Car Key Programming", desc: "Advanced key cutting and transponder programming for all vehicle makes." },
  { icon: Key, title: "Key Replacement", desc: "Lost your keys? We provide fast replacement for car, home, and office keys." },
  { icon: Home, title: "Residential Locks", desc: "Lock installation, repair, and rekeying for homes across Kwekwe." },
  { icon: Building2, title: "Commercial Security", desc: "High-security locks and master key systems for businesses." },
  { icon: Lock, title: "Access Control", desc: "Modern electronic access control systems for commercial properties." },
  { icon: ShieldAlert, title: "Emergency Lockout", desc: "24/7 emergency lockout response — we'll get you back in fast." },
];

const ServicesOverview = () => (
  <section className="bg-background py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Our Locksmith Services</h2>
        <p className="mt-3 text-muted-foreground">Professional locksmith solutions for residential, commercial, and automotive needs in Kwekwe.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to="/services"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">Learn more →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
