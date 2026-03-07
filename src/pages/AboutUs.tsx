import { Card } from "@/components/ui/card";
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

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Our Story</h2>

          <div className="prose prose-lg text-muted-foreground space-y-4 max-w-none">
            <p>
              Shree Enterprise began its journey in 2018 with a simple dream — to bring trusted solar
              solutions and beautiful event decorations to families across Nagichana, Junagadh, and
              the Saurashtra region.
            </p>

            <p>
              What started as a small community-based service has now grown into a name trusted by
              <strong> 200+ families</strong>. From installing reliable rooftop solar systems to creating
              memorable mandap decorations, we have built our reputation through honest work, fair
              pricing, and long-term relationships.
            </p>

            <p>
              Our mandap work grew naturally as nearby gaams looked for a dependable team offering 
              traditional, modern, and budget-friendly decoration without stress. Our solar services 
              expanded as families wanted to save on electricity and switch to renewable energy.
            </p>

            <p>
              Today, we proudly serve as a government-approved solar vendor and a preferred choice 
              for mandap decoration across Talala, Mangrol, and Junagadh. Our promise is simple — 
              quality work, fair pricing, and service you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            <Card className="p-6 text-center shadow-card hover:shadow-hover border-border/50 transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">High-quality installation and decoration work.</p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover border-border/50 transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">Transparent pricing and honest communication.</p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover border-border/50 transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">Strong bonds with families we proudly serve.</p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover border-border/50 transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-muted-foreground">Dependable service before & after every project.</p>
            </Card>

          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card className="p-8 shadow-card hover:shadow-hover border-border/50 transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Solar Energy Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer complete solar services — site surveys, installation, subsidy assistance, 
                inverter solutions, and maintenance. As a government-approved vendor, we make your 
                transition to clean energy smooth and affordable.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-hover border-border/50 transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mandap & Event Decoration</h3>
              <p className="text-muted-foreground leading-relaxed">
                From engagements to weddings and cultural events, we design and execute beautiful 
                mandap decorations with lighting, floral arrangements, stage setups, and complete on-ground support.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-accent mb-2">7+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Solar Installations</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <p className="text-muted-foreground">Events Decorated</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-hero">
  <div className="container mx-auto px-4 text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
      Ready to Get Started?
    </h2>

    <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
      Contact us for solar installation, mandap decoration, or event planning.
    </p>

    <a
      href="/contact"
      className="inline-block bg-accent text-accent-foreground hover:bg-accent-light transition-smooth px-10 py-4 rounded-xl text-lg font-semibold shadow-premium"
    >
      Contact Us Now
    </a>

  </div>
</section>


    </div>
  );
};

export default AboutUs;
