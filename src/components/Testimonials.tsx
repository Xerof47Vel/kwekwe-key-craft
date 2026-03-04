import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tendai Moyo",
    text: "I was locked out of my car at 10pm and Kwekwe Key Centre came within 30 minutes. Incredible service! Highly recommended for anyone in Kwekwe.",
    rating: 5,
  },
  {
    name: "Grace Nkomo",
    text: "They installed new locks on all our office doors. Very professional, great pricing, and they finished ahead of schedule. The best locksmith in Kwekwe.",
    rating: 5,
  },
  {
    name: "Brian Chikwanha",
    text: "Lost my Toyota key and they programmed a new one on the spot. Fair price and fast turnaround. I won't go anywhere else for key services.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="bg-background py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">What Our Clients Say</h2>
        <p className="mt-3 text-muted-foreground">Real feedback from satisfied customers in Kwekwe and surrounding areas.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-xl border border-border bg-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <p className="mt-4 font-display text-sm font-semibold text-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
