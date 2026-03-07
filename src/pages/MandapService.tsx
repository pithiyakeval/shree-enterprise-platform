import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Heart,
  Flower2,
  Gift,
  Star,
  Check,
  HelpCircle,
  Timer,
  Palette,
  Users,
  Feather,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const MandapService = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Mandap Decoration Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Traditional, modern, and theme-based decorations crafted for weddings, engagements,
            cultural events, and celebrations — all with honesty and elegance.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <Sparkles className="text-primary" /> Why Choose Our Mandap Services?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Elegant & Traditional Designs",
                desc: "Perfect blend of cultural elements and modern creativity.",
              },
              {
                icon: Users,
                title: "Trusted by Local Families",
                desc: "We serve Saurashtra’s families with honesty and transparency.",
              },
              {
                icon: Palette,
                title: "Custom Theme Creation",
                desc: "Match decoration with your event theme, colors, and style.",
              },
              {
                icon: Star,
                title: "Affordable for Everyone",
                desc: "Premium decoration at budget-friendly pricing.",
              },
              {
                icon: Feather,
                title: "Eco-Friendly Options",
                desc: "Sustainable décor using natural elements when preferred.",
              },
              {
                icon: Building2,
                title: "Full Setup & Management",
                desc: "Stage, lighting, entry gate, backdrop — all handled by our team.",
              },
            ].map((box, i) => (
              <Card key={i} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                <box.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                <p className="text-muted-foreground">{box.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">What We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Theme-based mandap decoration",
              "Wedding mandap setup",
              "Engagement stage setup",
              "Birthday & kids’ stage decoration",
              "Haldi, Garba & Pooja Mandap",
              "Photo booth & backdrop design",
              "Complete lighting setup",
              "Flower decoration (fresh/artificial)",
              "Material delivery & pickup",
              "Generator & entry gate setup",
            ].map((item, i) => (
              <Card key={i} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-20">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-4xl font-bold text-foreground mb-12">Decoration Packages</h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Basic Package */}
      <Card className="p-8 shadow-card hover:shadow-hover transition-smooth">
        <h3 className="text-3xl font-bold text-primary mb-3">Basic Package</h3>
        <p className="text-muted-foreground mb-4">Perfect for small events & pujas.</p>

        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li className="flex gap-2"><Check className="text-primary" /> Simple Mandap Setup</li>
          <li className="flex gap-2"><Check className="text-primary" /> Basic Lighting</li>
          <li className="flex gap-2"><Check className="text-primary" /> Entry Gate</li>
        </ul>

        <p className="text-2xl font-bold mb-2">₹15,000 – ₹30,000</p>

        <Button asChild className="w-full bg-primary text-primary-foreground">
          <Link to="/contact?service=Mandap&eventType=Pooja%20or%20Small%20Event">Get Quote</Link>
        </Button>
      </Card>

      {/* Standard Package */}
      <Card className="p-8 shadow-card hover:shadow-hover transition-smooth">
        <h3 className="text-3xl font-bold text-primary mb-3">Standard Package</h3>
        <p className="text-muted-foreground mb-4">Best for engagements & birthdays.</p>

        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li className="flex gap-2"><Check className="text-primary" /> Decorated Mandap</li>
          <li className="flex gap-2"><Check className="text-primary" /> Stage + Backdrop</li>
          <li className="flex gap-2"><Check className="text-primary" /> Lighting Setup</li>
          <li className="flex gap-2"><Check className="text-primary" /> Balloon/Floral Add-ons</li>
        </ul>

        <p className="text-2xl font-bold mb-2">₹40,000 – ₹50,000</p>

        <Button asChild className="w-full bg-primary text-primary-foreground">
          <Link to="/contact?service=Mandap&eventType=Engagement%20or%20Birthday">Get Quote</Link>
        </Button>
      </Card>

      {/* Premium Package */}
      <Card className="p-8 shadow-card hover:shadow-hover transition-smooth">
        <h3 className="text-3xl font-bold text-primary mb-3">Premium Wedding Package</h3>
        <p className="text-muted-foreground mb-4">Ideal for weddings & grand events.</p>

        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li className="flex gap-2"><Check className="text-primary" /> Full Wedding Mandap</li>
          <li className="flex gap-2"><Check className="text-primary" /> Premium Lighting</li>
          <li className="flex gap-2"><Check className="text-primary" /> Entry Gate + Walkway</li>
          <li className="flex gap-2"><Check className="text-primary" /> Custom Theme Setup</li>
          <li className="flex gap-2"><Check className="text-primary" /> Photographer Backdrop</li>
        </ul>

        <p className="text-2xl font-bold mb-2">₹60,000 – ₹80,000</p>

        <Button asChild className="w-full bg-primary text-primary-foreground">
          <Link to="/contact?service=Mandap&eventType=Wedding">Get Quote</Link>
        </Button>
      </Card>

    </div>
  </div>
</section>


      {/* THEMES */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-10">Popular Event Themes</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Floral Paradise (Fresh flowers)",
              "Golden Royal Theme",
              "Eco-Traditional (Banana Leaves & Diyas)",
              "Color Pop (Kids & Birthdays)",
              "Temple Vibes (Brass Bells & Rangoli)",
              "Modern Minimalist Theme",
            ].map((t, i) => (
              <Card key={i} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                <Gift className="text-primary w-6 h-6 mb-3" />
                <p className="text-muted-foreground">{t}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Event Planning Timeline</h2>

          <div className="space-y-6">
            {[
              "Booking: 30 days before for best themes",
              "Theme finalization: 20 days before",
              "Setup: 1–2 days before the event",
              "Event execution: On the event day",
            ].map((item, i) => (
              <Card key={i} className="p-6 shadow-card flex gap-3">
                <Timer className="text-primary w-6 h-6 mt-1" />
                <p className="text-muted-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              ["Can I see your past work before booking?", "Yes, we can show real photos from previous events."],
              ["Do you provide setup for outdoor venues?", "Yes, we handle indoor and outdoor decoration."],
              ["Is customization possible?", "Absolutely! You can choose colors, themes, and elements."],
            ].map(([q, a], i) => (
              <Card key={i} className="p-6 shadow-card">
                <h3 className="font-bold text-lg mb-2 flex gap-2">
                  <HelpCircle className="text-primary" /> {q}
                </h3>
                <p className="text-muted-foreground">{a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Plan Your Perfect Event with Us
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Contact us for theme ideas, pricing, and a complete event decoration plan.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent-light"
        >
          <Link to="/contact">Get Free Quote</Link>
        </Button>
      </section>

    </div>
  );
};

export default MandapService;
