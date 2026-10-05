import { Phone, FileText, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
    {/* Abstract pattern overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent" />
      <div className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-accent/50" />
    </div>

    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Since Day One in Kwekwe
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Trusted Locksmith Services in Kwekwe
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
            Fast, reliable car key programming, lock installation, and emergency locksmith services in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="tel:+263716253002" className="w-full sm:w-auto">
            <Button size="lg" className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 sm:w-auto">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </a>
          <a href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary font-semibold text-base px-8 sm:w-auto"
            >
              <FileText className="h-5 w-5" />
              Get a Quote
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> Fast Response</span>
          <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-accent" /> Licensed & Insured</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Trusted Local Business</span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
