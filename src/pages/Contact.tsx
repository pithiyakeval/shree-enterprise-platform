import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 30 minutes.",
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi, I'd like to know more about your services",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch for solar installations, mandap decorations, or any questions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                +91 98765 43210
              </a>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@shreeenterprise.com"
                className="text-muted-foreground hover:text-accent transition-smooth"
              >
                info@shreeenterprise.com
              </a>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                Nagichana, Talala
                <br />
                Junagadh, Gujarat
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
              <p className="text-muted-foreground text-sm">
                Mon - Sat: 9 AM - 7 PM
                <br />
                Sunday: By Appointment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll respond within 30 minutes
              </p>
            </div>

            <Card className="p-8 shadow-premium border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone"
                      className="border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="Solar Services">Solar Energy Solutions</option>
                    <option value="Mandap Decoration">Mandap Decoration</option>
                    <option value="Both">Both Services</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements in detail..."
                    rows={5}
                    className="border-border"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-smooth text-lg py-6"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Send Message & Get Callback
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 transition-smooth"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Or Chat on WhatsApp Instantly
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground">
                Located in Nagichana, Talala, Junagadh, Gujarat
              </p>
            </div>

            <Card className="overflow-hidden shadow-premium border-border/50">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Nagichana, Talala</p>
                  <p className="text-muted-foreground">Junagadh, Gujarat</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
