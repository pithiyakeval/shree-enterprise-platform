import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const solarFaqs = [
    {
      question: "How much does a solar installation cost?",
      answer:
        "Solar installation costs vary based on system size (2.5kW to 5kW) and your specific requirements. After government subsidies, a typical 3kW system costs approximately ₹1,50,000 - ₹2,00,000. We provide free site surveys and detailed quotes tailored to your needs.",
    },
    {
      question: "What government subsidies are available?",
      answer:
        "The Government of India provides subsidies up to 40% for residential solar installations under 3kW and 20% for systems between 3-10kW. We handle all paperwork and ensure you receive the maximum eligible subsidy.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Typical residential solar installations take 2-3 days to complete once all approvals are in place. The entire process from site survey to grid connection usually takes 3-4 weeks, including subsidy processing.",
    },
    {
      question: "What maintenance is required?",
      answer:
        "Solar panels require minimal maintenance - primarily cleaning 3-4 times per year and annual professional inspection. We offer maintenance packages and provide free maintenance for the first year with installation.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "Solar panels come with 25-year manufacturer warranty, inverters have 5-10 year warranty, and we provide 5-year workmanship warranty on installation. We also offer extended warranty packages.",
    },
  ];

  const mandapFaqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 months in advance for weddings and 3-4 weeks for smaller events. This ensures availability and gives us adequate time to plan your perfect setup. However, we do accommodate last-minute bookings when possible.",
    },
    {
      question: "Do you provide custom themes?",
      answer:
        "Yes! We specialize in creating custom mandap designs based on your preferences, wedding theme, and cultural requirements. Share your vision with us, and our design team will bring it to life.",
    },
    {
      question: "What's included in the decoration package?",
      answer:
        "Our packages include stage construction, fabric draping, floral arrangements, lighting setup, seating arrangement, complete installation, and teardown. We provide all materials and on-site coordination throughout your event.",
    },
    {
      question: "Can I see your previous work?",
      answer:
        "Absolutely! We maintain a comprehensive portfolio of our previous projects. Visit our gallery section on the website or contact us to schedule an in-person consultation where we can show you detailed examples.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Junagadh, Talala, Nagichana, and surrounding areas within a 50km radius. For events outside this area, please contact us to discuss arrangements and additional travel charges if applicable.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Find answers to common questions or reach out to our support team
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Mon-Sat, 9 AM - 7 PM</p>
              <a
                href="tel:+919876543210"
                className="text-primary hover:text-primary-dark transition-smooth"
              >
                +91 98765 43210
                <li>+91 99748 52378</li>
              </a>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-3">Quick responses</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-smooth"
              >
                Chat Now
              </a>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-smooth border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-3">24-hour response</p>
              <a
                href="mailto:info@shreeenterprise.com"
                className="text-primary hover:text-primary-dark transition-smooth"
              >
                Send Email
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Solar FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              Solar Energy FAQs
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Common questions about solar installations
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {solarFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`solar-${index}`}
                  className="border border-border rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mandap FAQs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              Mandap Decoration FAQs
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Everything you need to know about our decoration services
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {mandapFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`mandap-${index}`}
                  className="border border-border rounded-lg px-6 shadow-sm bg-background"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center shadow-premium border-border/50">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our team is here to help with personalized support
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-light transition-smooth"
            >
              <Link to="/contact">Contact Support Team</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Help;
