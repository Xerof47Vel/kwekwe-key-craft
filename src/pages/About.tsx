import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Shield, Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every service we provide prioritises the security of your property and loved ones." },
  { icon: Target, title: "Precision", desc: "We use advanced equipment to deliver accurate, damage-free locksmith work." },
  { icon: Heart, title: "Community Trust", desc: "We're proud to be a trusted name in the Kwekwe business community." },
  { icon: Eye, title: "Transparency", desc: "Upfront pricing, honest assessments, and no hidden fees — ever." },
];

const About = () => (
  <>
    <SEOHead
      title="About Us | Kwekwe Key Centre - Your Local Locksmith Experts"
      description="Learn about Kwekwe Key Centre — Kwekwe's trusted locksmith company offering car key programming, residential and commercial lock services, and 24/7 emergency response."
    />

    <section className="bg-primary py-16">
      <div className="container">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">About Kwekwe Key Centre</h1>
          <p className="mt-4 text-lg text-primary-foreground/70">Your trusted locksmith partner in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe — delivering reliable security solutions with professionalism and care.</p>
        </motion.div>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Kwekwe Key Centre was founded with a clear mission: to provide Kwekwe and the Midlands Province with world-class locksmith services at fair prices. From humble beginnings, we have grown into the area's most trusted name in key cutting, lock installation, and automotive security.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Our team combines years of hands-on experience with continuous training on the latest lock technologies. Whether it's a traditional lock or a modern transponder key system, we have the expertise and equipment to handle it.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Mission & Vision</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong>Mission:</strong> To deliver fast, reliable, and affordable locksmith services that keep the people and businesses of Kwekwe safe and secure.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <strong>Vision:</strong> To be Zimbabwe's leading locksmith service provider — known for innovation, integrity, and unwavering commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-20">
      <div className="container">
        <h2 className="text-center font-display text-3xl font-bold text-foreground">Our Core Values</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default About;
