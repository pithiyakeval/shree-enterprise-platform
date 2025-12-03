import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sun,
  Sparkles,
  Users,
  DollarSign,
  Package,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Heart,
} from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import solar1 from "@/assets/solar-1.jpg";
import solar2 from "@/assets/solar-2.jpg";
import mandap1 from "@/assets/mandap-1.jpg";
import mandap2 from "@/assets/mandap-2.jpg";

const Index = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    kw: "",
    budget: "",
    eventType: "",
    city: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Thank you! We'll call you back within 30 minutes.", {
      description: "Our team is reviewing your request.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      kw: "",
      budget: "",
      eventType: "",
      city: "",
      eventDate: "",
      message: "",
    });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi, I'm interested in your services",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.75)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Govt-Approved Vendor • 200+ Happy Families
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Shree Enterprise
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            Reliable Solar Installations & Premium Mandap Decorations

          </p>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            Professional service you can trust – from sustainable energy to unforgettable celebrations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent text-accent-foreground hover:bg-accent-light transition-smooth text-lg px-8 py-6 shadow-premium"
            >
              <Sun className="mr-2 h-5 w-5" />
              Request Free Site Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 transition-smooth text-lg px-8 py-6"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              View Mandap Gallery
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-9 duration-700 delay-1000">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">200+</div>
              <div className="text-sm text-primary-foreground/80">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">7+</div>
              <div className="text-sm text-primary-foreground/80">Years Serving</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert solutions for energy independence and memorable celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Solar Services Card */}
            <Card className="shadow-card hover:shadow-hover transition-smooth border-border/50 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Solar Energy Solutions</h3>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Complete site survey & energy analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>2.5kW to 5kW professional installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Government subsidy paperwork handled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Full maintenance & technical support</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-smooth"
                  onClick={() => {
                    setFormData({ ...formData, service: "Solar Services" });
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Solar Pricing
                </Button>
              </CardContent>
            </Card>

            {/* Mandap Decoration Card */}
            <Card className="shadow-card hover:shadow-hover transition-smooth border-border/50 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mandap Decoration</h3>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Wedding, engagement & cultural events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Premium stage & floral arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Professional lighting setups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Custom themes & complete material supply</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-light transition-smooth"
                  onClick={() => {
                    setFormData({ ...formData, service: "Mandap Decoration" });
                    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See Decoration Themes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by families across Junagadh for quality and reliability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth group border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">200+ Happy Families</h3>
              <p className="text-muted-foreground">Trusted across Talala & Junagadh region</p>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth group border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden charges, clear quotes upfront</p>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth group border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Complete Setup Available</h3>
              <p className="text-muted-foreground">Full material & installation included</p>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth group border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Govt-Approved Vendor</h3>
              <p className="text-muted-foreground">Certified & authorized for subsidy support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the quality and craftsmanship we bring to every project
            </p>
          </div>

          <Tabs defaultValue="solar" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="solar" className="text-base">
                <Sun className="w-4 h-4 mr-2" />
                Solar Installations
              </TabsTrigger>
              <TabsTrigger value="mandap" className="text-base">
                <Sparkles className="w-4 h-4 mr-2" />
                Mandap Decorations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="solar" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer">
                  <img
                    src={solar1}
                    alt="Residential rooftop solar panel installation"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">5kW Rooftop Installation - Nagichana</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer">
                  <img
                    src={solar2}
                    alt="Solar inverter and electrical equipment setup"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">Professional Inverter Setup - Talala</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mandap" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer">
                  <img
                    src={mandap1}
                    alt="Luxurious wedding mandap with golden decorations"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">Traditional Wedding Mandap - Junagadh</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer">
                  <img
                    src={mandap2}
                    alt="Elegant engagement stage with floral arrangements"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">Engagement Stage Setup - Nagichana</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Installed quickly, subsidy handled smoothly — highly recommended for solar!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">JP</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jethabhai Pithiya</p>
                  <p className="text-sm text-muted-foreground">Nagichana</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Our wedding mandap was absolutely stunning! Everyone loved the decoration setup."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold">NP</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Naranbhai Pithiya</p>
                  <p className="text-sm text-muted-foreground">Nagichana</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Professional service from start to finish. Our solar system has been running perfectly for 2 years."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">DN</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dineshbhai Nandha</p>
                  <p className="text-sm text-muted-foreground">Nagichana</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

{/* Contact CTA */}
<section id="contact" className="py-20 bg-gradient-hero">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Get Started Today
        </h2>
        <p className="text-xl text-primary-foreground/90">
          Fill the form below and we'll call you back in 30 minutes
        </p>
      </div>

      <Card className="p-8 shadow-premium">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name *
              </label>
              <Input
                required
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
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
                value={formData.phone || ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone"
                className="border-border"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email (optional)
            </label>
            <Input
              type="email"
              value={formData.email || ""}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="border-border"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Select Service *
            </label>
            <select
              required
              value={formData.service || ""}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="">Choose a service</option>
              <option value="Solar">Solar Energy Solutions</option>
              <option value="Mandap">Mandap Decoration</option>
              <option value="Both">Both Services</option>
            </select>
          </div>

          {/* Conditional: Solar fields */}
          {(formData.service === "Solar" || formData.service === "Both") && (
            <div className="space-y-4 animate-in fade-in">
              <select
                value={formData.kw || ""}
                onChange={(e) => setFormData({ ...formData, kw: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
              >
                <option value="">Select Solar Capacity (kW)</option>
                <option value="2.5 kW">2.5 kW</option>
                <option value="3 kW">3 kW</option>
                <option value="5 kW">5 kW</option>
              </select>

              <select
                value={formData.budget || ""}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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

          {/* Conditional: Mandap fields */}
          {(formData.service === "Mandap" || formData.service === "Both") && (
            <div className="space-y-4 animate-in fade-in">
              <select
                value={formData.eventType || ""}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-border bg-background"
              >
                <option value="">Event Type</option>
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Garba</option>
                <option>Reception</option>
                <option>Birthday</option>
                <option>Pooja</option>
                <option>Other</option>
              </select>

              <select
                value={formData.budget || ""}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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

          {/* City + Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              required
              placeholder="City / Gaam *"
              value={formData.city || ""}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />

            <Input
              type="date"
              value={formData.eventDate || ""}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            />
          </div>

          {/* Message */}
          <Textarea
            required
            placeholder="Describe your requirement..."
            rows={4}
            value={formData.message || ""}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-smooth text-lg py-6"
            size="lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Get Callback in 30 Minutes 🚀
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border">
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="w-full border-accent text-accent hover:bg-accent/10 transition-smooth"
            size="lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            WhatsApp Quick Contact
          </Button>
        </div>
      </Card>

      <div className="mt-8 text-center space-y-2 text-primary-foreground/90">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5" />
          <span>📍 Main Chowk, Nagichana, Mangrol, Junagadh – 362240</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          <span>+91 99748 52378</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-5 h-5" />
          <span>jagdishbhai.pithiya@gmail.com</span>
        </div>
        {/* ⭐ Add Google Map Link Here ⭐ */}

    <section>
    {/* Google Map Button */}
    <a
      href="https://www.google.com/maps/place/Nagichana,+Gujarat"
      target="_blank"
      className="inline-block mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground 
      font-semibold hover:bg-primary-dark transition"
    >
      📍 Open in Google Maps
    </a>
  
</section>
 
      </div>
    </div>
  </div>
</section>


      
    </div>
  );
};



export default Index;
