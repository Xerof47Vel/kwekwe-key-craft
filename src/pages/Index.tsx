import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import HeroSection from "@/components/HeroSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <>
    <SEOHead
      title="Kwekwe Key Centre | Trusted Locksmith Services in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe"
      description="Fast, reliable car key programming, lock installation, and 24/7 emergency locksmith services in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe. Call now for a free quote."
    />
    <LocalBusinessSchema />
    <HeroSection />
    <EmergencyBanner />
    <ServicesOverview />
    <WhyChooseUs />
    <Testimonials />
    <FAQSection />
    <CTASection />
  </>
);

export default Index;
