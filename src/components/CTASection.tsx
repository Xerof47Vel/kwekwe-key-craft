import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="bg-primary py-16">
    <div className="container text-center">
      <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
        Need a Locksmith in Kwekwe?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-primary-foreground/70">
        Don't wait — call us now for fast, professional locksmith services. Free estimates on all jobs.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="tel:+263716253002">
          <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </a>
        <Link to="/contact">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
          >
            <FileText className="h-5 w-5" />
            Get a Free Quote
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
