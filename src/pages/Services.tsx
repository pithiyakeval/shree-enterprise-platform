import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Sparkles, Check, Zap, Heart, Shield, Wrench, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Professional solutions for sustainable energy and memorable celebrations
          </p>
        </div>
      </section>

      {/* Solar Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Sun className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">Solar Energy Solutions</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Transform your home or business with clean, renewable solar energy. As a
              government-approved vendor, we handle everything from consultation to installation and
              ongoing support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Site Survey</h3>
                <p className="text-muted-foreground text-sm">
                  Free professional assessment of your property and energy needs
                </p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Installation</h3>
                <p className="text-muted-foreground text-sm">
                  2.5kW to 5kW systems installed by certified professionals
                </p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Subsidy Support</h3>
                <p className="text-muted-foreground text-sm">
                  Complete paperwork assistance for government subsidies
                </p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Maintenance</h3>
                <p className="text-muted-foreground text-sm">
                  Regular servicing and technical support for optimal performance
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-secondary border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solar Package Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">High-efficiency solar panels</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced inverter systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Complete mounting structure</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">All electrical wiring & components</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Professional installation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Government subsidy processing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">5-year warranty on workmanship</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Free 1-year maintenance</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mandap Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">Mandap Decoration Services</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Create unforgettable moments with our premium mandap decoration services. From
              traditional weddings to modern engagements, we bring your vision to life with stunning
              designs and flawless execution.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Wedding Mandaps</h3>
                <p className="text-muted-foreground text-sm">
                  Traditional & modern designs for your special day
                </p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Engagement Stages</h3>
                <p className="text-muted-foreground text-sm">
                  Elegant setups for engagement ceremonies
                </p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Cultural Events</h3>
                <p className="text-muted-foreground text-sm">
                  Custom decorations for all celebrations
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-background border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Decoration Package Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Premium fabric draping</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fresh flower arrangements</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Professional lighting setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Stage construction & design</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom theme execution</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Seating arrangements</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Complete setup & teardown</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">On-site coordination team</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent-light transition-smooth"
          >
            <Link to="/contact">Request Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
