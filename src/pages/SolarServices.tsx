import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Zap,
  Wrench,
  Shield,
  Check,
  FileCheck,
  Factory,
  Timer,
  Leaf,
  BadgeCheck,
  HelpCircle,
  TrendingUp,
  Battery,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const SolarServices = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Solar Energy Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Clean energy solutions that reduce bills, increase savings, and power a sustainable future.
          </p>
        </div>
      </section>

      {/* Why Go Solar */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Leaf className="text-primary" /> Why Go Solar?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Save ₹1,500–₹4,000/month",
                desc: "Reduce electricity bills with efficient solar panel systems.",
              },
              {
                icon: Shield,
                title: "Up to 40% Subsidy",
                desc: "Get government-backed financial support under PM Surya Ghar Yojana.",
              },
              {
                icon: Battery,
                title: "25+ Year Panel Life",
                desc: "Durable, long-lasting technology with minimal maintenance.",
              },
              {
                icon: Sun,
                title: "Works in Rural Areas",
                desc: "Hybrid systems ensure performance even with low grid supply.",
              },
              {
                icon: Check,
                title: "Increases Property Value",
                desc: "Homes with solar systems have higher long-term value.",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly Energy",
                desc: "Reduce pollution and contribute to a cleaner future.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-12">Solar Packages</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                kw: "2.5 kW",
                units: "10 units/day avg.",
                savings: "₹1,500–₹2,000 monthly",
              },
              {
                kw: "3 kW",
                units: "12–14 units/day",
                savings: "₹2,000–₹2,500 monthly",
              },
              {
                kw: "5 kW",
                units: "20 units/day",
                savings: "₹3,000–₹4,000 monthly",
              },
            ].map((p, i) => (
              <Card key={i} className="p-8 shadow-card hover:shadow-hover transition-smooth">
                <h3 className="text-3xl font-bold text-primary mb-2">{p.kw}</h3>
                <p className="text-muted-foreground mb-4">{p.units}</p>
                <p className="text-accent font-semibold">{p.savings}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Pricing Section */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
      Solar Pricing (After Government Subsidy)
    </h2>

    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
      Transparent and affordable pricing tailored for middle-class families.
      Get high-quality solar systems with subsidy benefits and long-term savings.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* 2.5 kW */}
      <Card className="p-8 shadow-card hover:shadow-hover transition-smooth border-border/50">
        <h3 className="text-3xl font-bold text-primary mb-3">2.5 kW</h3>
        <p className="text-muted-foreground mb-4">Ideal for 1BHK or low-usage homes.</p>

        <div className="text-2xl font-bold mb-2">₹65,000 – ₹75,000</div>
        <p className="text-sm text-muted-foreground mb-6">
          Includes subsidy under PM Surya Ghar Yojana.
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex gap-2"><Check className="text-primary" /> 10 units/day output</li>
          <li className="flex gap-2"><Check className="text-primary" /> Saves ₹1,500–₹2,000/month</li>
          <li className="flex gap-2"><Check className="text-primary" /> Free documentation help</li>
        </ul>

        <Button
  asChild
  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark"
>
  <Link to="/contact?service=Solar&kw=2.5 kW">Get Quote</Link>
</Button>

      </Card>

      {/* 3 kW */}
      <Card className="p-8 shadow-card hover:shadow-hover transition-smooth border-border/50">
        <h3 className="text-3xl font-bold text-primary mb-3">3 kW</h3>
        <p className="text-muted-foreground mb-4">Perfect for medium households.</p>

        <div className="text-2xl font-bold mb-2">₹80,000 – ₹95,000</div>
        <p className="text-sm text-muted-foreground mb-6">
          Includes subsidy under PM Surya Ghar Yojana.
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex gap-2"><Check className="text-primary" /> 12–14 units/day output</li>
          <li className="flex gap-2"><Check className="text-primary" /> Saves ₹2,000–₹2,500/month</li>
          <li className="flex gap-2"><Check className="text-primary" /> High-efficiency panels</li>
        </ul>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">
          Get Quote
        </Button>
        
      </Card>

      {/* 5 kW */}
      <Card className="p-8 shadow-card hover:shadow-hover transition-smooth border-border/50">
        <h3 className="text-3xl font-bold text-primary mb-3">5 kW</h3>
        <p className="text-muted-foreground mb-4">Best for large homes & businesses.</p>

        <div className="text-2xl font-bold mb-2">₹1.4L – ₹1.6L</div>
        <p className="text-sm text-muted-foreground mb-6">
          Includes subsidy under PM Surya Ghar Yojana.
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex gap-2"><Check className="text-primary" /> 20+ units/day output</li>
          <li className="flex gap-2"><Check className="text-primary" /> Saves ₹3,000–₹4,000/month</li>
          <li className="flex gap-2"><Check className="text-primary" /> Runs ACs, fridges, TVs & more</li>
        </ul>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">
          Get Quote
        </Button>
      </Card>
    </div>

    <p className="text-center text-muted-foreground mt-10">
      *Final pricing depends on roof structure, inverter type, wiring distance, and brand selection.
    </p>
  </div>
</section>


      {/* Trusted Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Factory className="text-primary" /> Trusted Solar Brands
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-card">
              <h3 className="text-2xl font-bold mb-2">Adani Solar</h3>
              <p className="text-muted-foreground">
                India's leading solar manufacturer with high-efficiency mono PERC panels and
                25-year performance warranty.
              </p>
            </Card>

            <Card className="p-6 shadow-card">
              <h3 className="text-2xl font-bold mb-2">Waaree Energies</h3>
              <p className="text-muted-foreground">
                Globally trusted for powerful, durable panels with excellent heat tolerance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-12">Installation Timeline</h2>

          <div className="space-y-6">
            {[
              "Site Survey: 1–2 days — load check & roof analysis",
              "Documentation: 1–3 days — subsidy forms & net metering",
              "Installation: 2–4 days — panels, inverter, electrical setup",
              "Inspection: 1–2 days — DISCOM activation",
            ].map((t, i) => (
              <Card key={i} className="p-6 flex items-start gap-3 shadow-card">
                <Timer className="text-primary w-6 h-6 mt-1" />
                <p className="text-muted-foreground">{t}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Subsidy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Government Subsidy Details
          </h2>

          <Card className="p-8 shadow-card mb-10">
            <p className="text-lg text-muted-foreground mb-4">
              Under PM Surya Ghar Rooftop Scheme:
            </p>

            <ul className="space-y-3">
              <li className="flex gap-3"><Check className="text-primary" /> ₹18,000 per kW (up to 3 kW)</li>
              <li className="flex gap-3"><Check className="text-primary" /> ₹9,000 per kW (3–10 kW)</li>
            </ul>
          </Card>

          <p className="text-muted-foreground">
            Subsidy is credited directly to your account within 30–60 days after DISCOM approval.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              ["How much money will I save?", "Most households save ₹1,500–₹4,000 per month depending on usage."],
              ["How long does installation take?", "Typical installations take 5–10 working days from survey to activation."],
              ["Can solar work in villages?", "Yes! Hybrid inverters ensure performance even with unstable grid supply."],
            ].map(([q, a], i) => (
              <Card key={i} className="p-6 shadow-card">
                <h3 className="font-bold text-lg mb-2 flex gap-2">
                  <HelpCircle className="text-primary" />
                  {q}
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
          Ready to Start Your Solar Journey?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Contact us for a free site survey, pricing, and subsidy guidance.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent-light transition-smooth"
        >
          <Link to="/contact">Request Free Quote</Link>
        </Button>
      </section>
    </div>
  );
};

export default SolarServices;
