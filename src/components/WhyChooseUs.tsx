import { Clock, Wrench, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Clock, title: "Fast Response Time", desc: "We arrive quickly when you need us most — especially during emergencies." },
  { icon: Wrench, title: "Professional Equipment", desc: "State-of-the-art tools and technology for precise, damage-free service." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent, competitive rates with no hidden fees or surprise charges." },
  { icon: Users, title: "Trusted Local Business", desc: "Serving Kwekwe with integrity, professionalism, and community trust." },
];

const WhyChooseUs = () => (
  <section className="bg-secondary py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Why Choose Kwekwe Key Centre?</h2>
        <p className="mt-3 text-muted-foreground">We combine expertise, speed, and fair pricing to deliver the best locksmith experience in Kwekwe.</p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <r.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
