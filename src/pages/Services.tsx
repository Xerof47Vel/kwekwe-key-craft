import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import EmergencyBanner from "@/components/EmergencyBanner";
import { Car, Key, Home, Building2, Lock, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Car,
    title: "Car Key Cutting & Programming",
    id: "car-key",
    content: "At Kwekwe Key Centre, we specialise in car key cutting and programming for all major vehicle brands. Using advanced diagnostic equipment, our technicians can cut precision keys and program transponder chips, remote keys, and smart keys right at our workshop in Kwekwe. Whether you drive a Toyota, Nissan, Ford, or any other make, we have the tools and expertise to get you a working key quickly and affordably. Our car key programming service in Kwekwe ensures your new key is perfectly synced with your vehicle's immobiliser system, giving you complete peace of mind.",
  },
  {
    icon: Key,
    title: "Vehicle Key Replacement",
    id: "key-replacement",
    content: "Lost all your car keys? Don't panic — Kwekwe Key Centre provides complete vehicle key replacement services. We can create new keys from scratch, even if you have no spare. Our service covers standard metal keys, transponder keys, and remote fob replacements. We work with a wide range of vehicle makes and models, offering fast turnaround times and competitive pricing. As the leading key replacement service in Kwekwe, we understand the urgency and work efficiently to minimise your downtime.",
  },
  {
    icon: Home,
    title: "Residential Locksmith Services",
    id: "residential",
    content: "Protect your home and family with our comprehensive residential locksmith services in Kwekwe. We offer lock installation, repair, rekeying, and upgrades for all types of doors and windows. Whether you're moving into a new home, upgrading old locks, or dealing with a break-in, our experienced team provides fast, reliable solutions. We carry a wide selection of high-security locks from trusted brands, ensuring your home is protected with the best hardware available. Our residential locksmith service covers all areas of Kwekwe and surrounding communities.",
  },
  {
    icon: Building2,
    title: "Commercial Locksmith Services",
    id: "commercial",
    content: "Kwekwe Key Centre provides tailored commercial locksmith solutions for businesses of all sizes. From office lock installations and master key systems to high-security lock upgrades and panic hardware, we help you protect your commercial property and assets. Our team understands the unique security challenges businesses face and works closely with you to design a comprehensive locking solution. Whether you run a retail shop, office complex, or industrial facility in Kwekwe, we deliver professional-grade security at competitive rates.",
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    id: "access-control",
    content: "Upgrade your business security with modern access control systems from Kwekwe Key Centre. We install, configure, and maintain electronic access control solutions including keycard systems, keypad entry locks, biometric readers, and smart lock systems. These systems allow you to control and monitor who enters your premises, track access logs, and manage permissions remotely. Ideal for offices, warehouses, and commercial buildings in Kwekwe, our access control installations provide superior security and operational convenience over traditional lock-and-key setups.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Lockout Services",
    id: "emergency",
    content: "Locked out of your car, home, or office? Kwekwe Key Centre's 24/7 emergency lockout service is here to help. Our rapid-response team serves all of Kwekwe with fast arrival times, typically under 30 minutes. We use professional, non-destructive entry techniques to get you back inside without damaging your locks or doors. Whether it's the middle of the night or a holiday, our emergency locksmith in Kwekwe is always available. Don't stress — just call, and we'll be there.",
  },
];

const Services = () => (
  <>
    <SEOHead
      title="Locksmith Services in Kwekwe | Car Keys, Locks & Emergency | Kwekwe Key Centre"
      description="Professional locksmith services in Kwekwe: car key programming, lock installation, access control, and 24/7 emergency lockout. Get a free quote today."
    />

    <section className="bg-primary py-16">
      <div className="container">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/70">Complete locksmith solutions for vehicles, homes, and businesses in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe.</p>
        </motion.div>
      </div>
    </section>

    <EmergencyBanner />

    <section className="bg-background py-20">
      <div className="container space-y-16">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            id={s.id}
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">{s.title}</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.content}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <CTASection />
  </>
);

export default Services;
