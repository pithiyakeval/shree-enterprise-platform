import MainLayout from "@/components/layout/MainLayout"

/* SEO */
import { Helmet } from "react-helmet-async"

/* PREMIUM SECTIONS */

import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServiceSection"
import WhyChooseSection from "@/components/sections/WhyChooseUs"
import GallerySection from "@/components/sections/GallerySection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
// import GoogleReviewsSection from "@/components/sections/GoogleReviewsSection"

const Index = () => {

  return (
    <>

      {/* SEO META TAGS */}

      <Helmet>

        {/* PAGE TITLE */}

        <title>
          Solar Installation & Mandap Decoration in Junagadh | Shree Enterprise
        </title>

        {/* BASIC SEO */}

        <meta
          name="description"
          content="Shree Enterprise offers solar panel installation and wedding mandap decoration services across Junagadh, Mangrol, Talala and nearby villages. Government subsidy support available."
        />

        <meta
          name="keywords"
          content="solar installation Junagadh, solar panel Mangrol, rooftop solar Gujarat, wedding mandap decoration Junagadh, event decoration Talala"
        />

        <meta name="author" content="Shree Enterprise" />

        {/* CANONICAL URL */}

        <link rel="canonical" href="https://yourdomain.com/" />

        {/* OPEN GRAPH (WhatsApp / Facebook Preview) */}

        <meta property="og:title" content="Shree Enterprise Solar & Mandap Services" />

        <meta
          property="og:description"
          content="Professional solar panel installation and wedding mandap decoration services across Junagadh region."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://yourdomain.com/" />

        <meta property="og:image" content="/preview.jpg" />

        {/* TWITTER METADATA */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Shree Enterprise Solar & Mandap Services"
        />

        <meta
          name="twitter:description"
          content="Solar installation and mandap decoration services across Junagadh region."
        />

        <meta
          name="twitter:image"
          content="/preview.jpg"
        />

        {/* GEO LOCATION (LOCAL SEO BOOST) */}

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Junagadh" />
        <meta name="geo.position" content="21.0245;70.2212" />

        {/* ADVANCED LOCAL BUSINESS SCHEMA */}

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shree Enterprise",
            "image": "https://yourdomain.com/logo.png",

            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Chowk, Nagichana",
              "addressLocality": "Mangrol",
              "addressRegion": "Gujarat",
              "postalCode": "362240",
              "addressCountry": "IN"
            },

            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.0245",
              "longitude": "70.2212"
            },

            "telephone": "+91-9898812423",

            "priceRange": "₹₹",

            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            ],

            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "35"
            },

            "areaServed": {
              "@type": "Place",
              "name": "Junagadh District"
            },

            "serviceType": [
              "Solar Panel Installation",
              "Solar Maintenance",
              "Wedding Mandap Decoration",
              "Event Stage Decoration"
            ]
          }
          `}
        </script>

      </Helmet>

      <MainLayout>

        {/* HERO */}
        <HeroSection />

        {/* SERVICES */}
        <ServicesSection />

        {/* WHY CHOOSE US */}
        <WhyChooseSection />

        {/* GALLERY */}
        <GallerySection />

        {/* GOOGLE REVIEWS */}
        {/* <GoogleReviewsSection /> */}

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* CONTACT */}
        <ContactSection />

      </MainLayout>

    </>
  )
}

export default Index