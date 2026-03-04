import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does car key programming cost in Kwekwe?",
    a: "Car key programming costs vary depending on the vehicle make and model. At Kwekwe Key Centre, we offer competitive rates starting from affordable prices. Contact us for a free quote tailored to your specific vehicle.",
  },
  {
    q: "Do you provide emergency locksmith services?",
    a: "Yes! We offer 24/7 emergency locksmith services across Kwekwe. Whether you're locked out of your car, home, or office, our team responds quickly to get you back in safely.",
  },
  {
    q: "Can you replace lost car keys?",
    a: "Absolutely. We specialize in car key replacement for all major vehicle brands. Using professional-grade equipment, we can cut and program new keys even if you've lost all copies.",
  },
  {
    q: "Do you install commercial access control systems?",
    a: "Yes, we provide full installation and maintenance of electronic access control systems for businesses in Kwekwe. From keycard systems to smart locks, we have solutions for every commercial need.",
  },
  {
    q: "How quickly can you respond to an emergency lockout?",
    a: "Our average response time for emergency lockouts in Kwekwe is under 30 minutes. We understand the urgency and prioritize emergency calls to get you back in as fast as possible.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Kwekwe and surrounding areas in the Midlands Province of Zimbabwe. Contact us to confirm service availability in your specific location.",
  },
];

const FAQSection = () => (
  <section className="bg-secondary py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-3 text-muted-foreground">Common questions about our locksmith services in Kwekwe.</p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
