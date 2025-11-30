import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart, Sun, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Shree Enterprise
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Serving Junagadh with excellence in solar energy and mandap decoration since 2018
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Founded in 2018, Shree Enterprise began with a simple mission: to bring sustainable
                energy solutions and memorable celebration experiences to families across Junagadh,
                Gujarat.
              </p>
              <p>
                What started as a small solar installation business has grown into a trusted name
                serving over 200+ satisfied customers. Our expansion into mandap decoration services
                came from understanding the community's need for reliable, professional event
                decoration that matches the significance of their celebrations.
              </p>
              <p>
                Today, we pride ourselves on being a government-approved vendor for solar
                installations and a premier choice for wedding and event decorations in the Talala
                and Junagadh regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We deliver superior quality in every installation and decoration
              </p>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                Transparent pricing and honest communication with every client
              </p>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building lasting relationships with families we serve
              </p>
            </Card>

            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                Dependable service and support for all our projects
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Solar Energy Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a government-approved vendor, we provide complete solar energy solutions from
                site survey to installation, subsidy support, and ongoing maintenance. Our team
                ensures your transition to clean energy is seamless and cost-effective.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mandap Decoration</h3>
              <p className="text-muted-foreground leading-relaxed">
                From intimate engagements to grand weddings, we create stunning mandap decorations
                that bring your vision to life. Our experienced team handles everything from floral
                arrangements to lighting, ensuring your special day is truly unforgettable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">7+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Solar Installations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Events Decorated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
