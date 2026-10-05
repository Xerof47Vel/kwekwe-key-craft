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
      <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-4 px-6 sm:w-auto sm:flex-row sm:items-center sm:px-0">
        <a href="tel:+263716253002" className="w-full sm:w-auto">
          <Button size="lg" className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 sm:w-auto">
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </a>
        <a href="/contact" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            className="w-full gap-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary font-semibold px-8 sm:w-auto"
          >
            <FileText className="h-5 w-5" />
            Get a Free Quote
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
