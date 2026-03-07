import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiPost } from "@/config/api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CalendarDays,
  IndianRupee,
  Home,
  PartyPopper,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: searchParams.get("service") || "",
    city: "",
    eventType: searchParams.get("eventType") || "",
    kw: searchParams.get("kw") || "",
    budget: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email || null,
    city: formData.city,
    message: formData.message,
    service: formData.service,

    // Solar
    kw: formData.kw || null,
    budget: formData.budget || null,

    // Mandap
    eventType: formData.eventType || null,
    eventDate: formData.eventDate || null,

    // Source
    where_from: "contact",
  };

  try {
    await apiPost("/api/lead/submit", payload);

    toast.success("Message sent successfully!", {
      description: "We'll contact you within 30 minutes.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      city: "",
      eventType: "",
      kw: "",
      budget: "",
      eventDate: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("Server not reachable. Please try again later.");
  }
};



  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
          Get in touch for solar installations, mandap decoration, or event setup
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">

          {/* Phone */}
          <Card className="p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">
              <a href="tel:+919898812423" className="hover:text-primary">+91 98988 12423</a><br />
              <a href="tel:+919974852378" className="hover:text-primary">+91 99748 52378</a>
            </p>
          </Card>

          {/* Email */}
          <Card className="p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a className="text-muted-foreground hover:text-accent"
              href="mailto:jagdishbhai.pithiya@gmail.com">
              jagdishbhai.pithiya@gmail.com
            </a>
          </Card>

          {/* Location */}
          <Card className="p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              Main Chowk, Nagichana  
              <br /> Mangrol, Junagadh, Gujarat
            </p>
          </Card>

          {/* Working Hours */}
          <Card className="p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p className="text-muted-foreground text-sm">
              Mon–Sat: 9 AM - 7 PM <br /> Sunday: By Appointment
            </p>
          </Card>

        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          <Card className="p-8 shadow-premium border-border/50">
            <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              {/* Email */}
              <Input
                placeholder="Email (optional)"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />

              {/* Service Selection */}
              <select
                required
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
              >
                <option value="">Select Service *</option>
                <option value="Solar">Solar Installation</option>
                <option value="Mandap">Mandap Decoration</option>
                <option value="Both">Both Services</option>
              </select>

              {/* Conditional Fields */}
              {/* Solar Fields */}
              {(formData.service === "Solar" || formData.service === "Both") && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                  
                  {/* KW */}
                  <select
                    value={formData.kw}
                    onChange={(e) => handleChange("kw", e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background"
                  >
                    <option value="">Select Solar Capacity (kW)</option>
                    <option value="2.5 kW">2.5 kW</option>
                    <option value="3 kW">3 kW</option>
                    <option value="5 kW">5 kW</option>
                  </select>

                  {/* Budget */}
                  <select
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background"
                  >
                    <option value="">Solar Budget Range</option>
                    <option>₹50,000 – ₹80,000</option>
                    <option>₹80,000 – ₹1,20,000</option>
                    <option>₹1,20,000 – ₹2,00,000</option>
                    <option>₹2,00,000+</option>
                  </select>

                </div>
              )}

              {/* Mandap Fields */}
              {(formData.service === "Mandap" || formData.service === "Both") && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2">

                  {/* Event Type */}
                  <select
                    value={formData.eventType}
                    onChange={(e) => handleChange("eventType", e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background"
                  >
                    <option value="">Event Type</option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Garba</option>
                    <option>Birthday</option>
                    <option>Pooja</option>
                    <option>Reception</option>
                    <option>Cultural Event</option>
                    <option>Other</option>
                  </select>

                  {/* Mandap Budget */}
                  <select
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background"
                  >
                    <option value="">Mandap Budget Range</option>
                    <option>₹10,000 – ₹30,000</option>
                    <option>₹30,000 – ₹70,000</option>
                    <option>₹1 Lakh – ₹3 Lakh</option>
                    <option>₹3 Lakh – ₹6 Lakh</option>
                    <option>₹6 Lakh+</option>
                  </select>

                </div>
              )}

              {/* City */}
              <Input
                required
                placeholder="City / Gaam *"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />

              {/* Date */}
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleChange("eventDate", e.target.value)}
              />

              {/* Message */}
              <Textarea
                required
                placeholder="Describe your requirement..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />

              {/* Submit */}
              <Button type="submit" className="w-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary-dark">
                <Phone className="mr-2" /> Send Message
              </Button>

              {/* WhatsApp Buttons */}
              <div className="mt-6 pt-6 border-t border-border grid gap-3">
                <Button
                  onClick={() => window.open("https://wa.me/919898812423", "_blank")}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 w-full"
                >
                  <MessageCircle className="mr-2" /> WhatsApp (98988 12423)
                </Button>
                <Button
                  onClick={() => window.open("https://wa.me/919974852378", "_blank")}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 w-full"
                >
                  <MessageCircle className="mr-2" /> WhatsApp (99748 52378)
                </Button>
              </div>

            </form>
          </Card>

        </div>
      </section>

     {/* Map Section */}
<section className="py-20 bg-secondary text-center">
  <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
  <p className="text-xl text-muted-foreground mb-6">
    Main Chowk, Nagichana, Mangrol, Junagadh, Gujarat
  </p>

  <Card className="max-w-4xl mx-auto p-10 shadow-card">
    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
    <p className="text-lg text-foreground font-medium">Nagichana, Junagadh</p>

    {/* Google Map Button */}
    <a
      href="https://www.google.com/maps/place/Nagichana,+Gujarat"
      target="_blank"
      className="inline-block mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground 
      font-semibold hover:bg-primary-dark transition"
    >
      📍 Open in Google Maps
    </a>
  </Card>
</section>

    </div>
  );
};

export default Contact;
