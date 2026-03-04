import { Helmet } from "react-helmet-async";

const schema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Kwekwe Key Centre",
  description: "Professional locksmith services in Kwekwe, Zimbabwe. Car key programming, lock installation, emergency lockout services.",
  url: "https://kwekwekeycentre.com",
  telephone: "+263771234567",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kwekwe",
    addressCountry: "ZW",
  },
  areaServed: {
    "@type": "City",
    name: "Kwekwe",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

const LocalBusinessSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default LocalBusinessSchema;
