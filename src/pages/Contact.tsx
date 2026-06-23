import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact Kwekwe Key Centre | Get a Free Locksmith Quote"
        description="Contact Kwekwe Key Centre for fast locksmith services in Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe. Call, WhatsApp, or fill out our form for a free quote."
      />

      <section className="bg-primary py-16">
        <div className="container">
          <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-primary-foreground/70">Get in touch for a free quote or emergency locksmith service in Kwekwe.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Get In Touch</h2>
              <p className="mt-3 text-sm text-muted-foreground">We're available 24/7 for emergencies. For general inquiries, reach us during business hours.</p>

              <div className="mt-8 space-y-6">
                <a href="tel:+263772969036" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">+263 77 296 9036</p>
                    <p className="text-sm text-muted-foreground">+263 71 625 3002</p>
                  </div>
                </a>

                <a href="https://wa.me/263772969036" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/20 text-success">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                  </div>
                </a>

                <a href="mailto:kwekwekeycentre@gmail.com" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">kwekwekeycentre@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Shop 1, Shumba Hotel, Kwekwe, Midlands, Zimbabwe</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                <iframe
                  title="Kwekwe Key Centre Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60899.62993780878!2d29.78!3d-18.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e7f6c3e5d1%3A0x1234567890abcdef!2sKwekwe%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-3 text-sm text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Your Name</label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+263 77 XXX XXXX"
                    required
                    maxLength={20}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
