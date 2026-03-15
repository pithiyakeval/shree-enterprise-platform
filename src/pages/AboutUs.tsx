import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import aboutBg from "@/assets/hero-bg.jpg"
import { Helmet } from "react-helmet-async"

import {
  Award,
  Users,
  Target,
  Heart,
  Sun,
  Sparkles,
  Shield
} from "lucide-react"

const AboutUs = () => {

  const timeline = [
    { year: "2018", text: "Started small solar projects in Nagichana." },
    { year: "2020", text: "Completed first large rooftop solar installations." },
    { year: "2022", text: "Expanded into mandap decoration services." },
    { year: "2024", text: "Serving 200+ happy families across Junagadh." },
  ]

  return (
    <>

      {/* SEO HELMET */}

      <Helmet>

        <title>
          About Shree Enterprise | Solar Installation & Mandap Decoration in Junagadh
        </title>

        <meta
          name="description"
          content="Learn about Shree Enterprise – trusted solar panel installation and wedding mandap decoration service provider serving Junagadh, Mangrol, Talala and nearby villages since 2018."
        />

        <meta
          name="keywords"
          content="about shree enterprise, solar installation Junagadh, solar panel Mangrol, mandap decoration Junagadh, solar company Gujarat"
        />

        {/* Canonical */}

        <link
          rel="canonical"
          href="https://shreeenterprise.live/about"
        />

        {/* OpenGraph */}

        <meta
          property="og:title"
          content="About Shree Enterprise Solar & Mandap Services"
        />

        <meta
          property="og:description"
          content="Trusted solar installation and wedding mandap decoration services across Junagadh region."
        />

        <meta
          property="og:url"
          content="https://shreeenterprise.live//about"
        />

        <meta
          property="og:image"
          content="/preview.jpg"
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Shree Enterprise Solar & Mandap Services"
        />

        <meta
          name="twitter:description"
          content="Solar panel installation and mandap decoration experts serving Junagadh region."
        />

        <meta
          name="twitter:image"
          content="/preview.jpg"
        />

        {/* Geo Tags */}

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Junagadh" />
        <meta name="geo.position" content="21.0245;70.2212" />

        {/* Structured Data */}

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shree Enterprise",
            "image": "https://shreeenterprise.live//logo.png",
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
            "areaServed": "Junagadh District",
            "serviceType": [
              "Solar Panel Installation",
              "Solar Maintenance",
              "Wedding Mandap Decoration",
              "Event Decoration"
            ]
          }
          `}
        </script>

      </Helmet>


      {/* ORIGINAL PAGE UI STARTS */}

      <div className="relative min-h-screen overflow-hidden">

        {/* PARALLAX BACKGROUND */}

        <div
          className="fixed inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />

        {/* OVERLAY */}

        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/70 to-indigo-50/80 backdrop-blur-[1px]" />


        {/* HERO */}

        <section className="relative py-28">

          <motion.div
            animate={{ y: [0,-60,0] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full -top-40 -left-40"
          />

          <motion.div
            animate={{ y: [0,60,0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-purple-400/20 blur-[150px] rounded-full bottom-0 right-0"
          />

          <div className="container mx-auto px-4">

            <div className="max-w-5xl mx-auto relative">

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-yellow-400/30 blur-xl"/>

              <div className="relative rounded-[40px] border bg-white/70 backdrop-blur-xl p-14 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]">

                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                  ABOUT SHREE ENTERPRISE
                </span>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
                  Trusted by Families Across Junagadh
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                  Shree Enterprise has been providing reliable solar panel
                  installation and premium wedding mandap decoration services
                  across Junagadh, Mangrol and nearby villages since 2018.
                </p>

                <div className="flex justify-center gap-10 text-slate-600">

                  <div className="flex items-center gap-2">
                    <Sun size={20}/>
                    Solar Experts
                  </div>

                  <div className="flex items-center gap-2">
                    <Sparkles size={20}/>
                    Event Specialists
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


      {/* JOURNEY */}

      <motion.section
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
        className="py-24"
      >

        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {timeline.map((item,i)=>(

              <motion.div
                key={i}
                whileHover={{y:-8, scale:1.02}}
              >

                <Card className="p-8 rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg hover:shadow-2xl transition-all duration-300">

                  <div className="flex items-center gap-4 mb-4">

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                      <Award size={18}/>
                    </div>

                    <span className="font-bold text-blue-600 text-lg">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {item.text}
                  </p>

                </Card>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.section>


      {/* PARALLAX BREAK */}

      <section className="relative h-[360px] flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"/>

        <div className="relative text-center">

          <div className="px-12 py-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">

            <h2 className="text-4xl font-bold text-white">
              Building Trust Since 2018
            </h2>

            <p className="text-white/80 mt-2">
              Solar Energy & Mandap Decoration Experts
            </p>

          </div>

        </div>

      </section>


      {/* MISSION & VISION */}

      <motion.section
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
        className="py-24"
      >

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid md:grid-cols-2 gap-10">

            <Card className="p-10 rounded-2xl border bg-gradient-to-br from-purple-50 to-indigo-100 shadow-xl hover:shadow-2xl">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center">
                  <Target size={18}/>
                </div>

                <h3 className="text-2xl font-bold">Our Mission</h3>

              </div>

              <p className="text-slate-600 leading-relaxed">
                To help families adopt clean solar energy and celebrate
                their most important life moments with beautiful decorations.
              </p>

            </Card>


            <Card className="p-10 rounded-2xl border bg-gradient-to-br from-yellow-50 to-orange-100 shadow-xl hover:shadow-2xl">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 text-white flex items-center justify-center">
                  <Shield size={18}/>
                </div>

                <h3 className="text-2xl font-bold">Our Vision</h3>

              </div>

              <p className="text-slate-600 leading-relaxed">
                To become the most trusted service provider for solar
                installations and event decoration across the Saurashtra region.
              </p>

            </Card>

          </div>

        </div>

      </motion.section>


      {/* CORE VALUES */}

      <section className="py-24">

        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

            {[
              {icon:Target,title:"Excellence",text:"High-quality installation and decoration work."},
              {icon:Heart,title:"Integrity",text:"Transparent pricing and honest communication."},
              {icon:Users,title:"Community",text:"Strong bonds with families we proudly serve."},
              {icon:Shield,title:"Reliability",text:"Dependable service before & after every project."}
            ].map((item,i)=>{

              const Icon=item.icon

              return(

                <motion.div
                  key={i}
                  whileHover={{y:-10, scale:1.05}}
                >

                  <Card className="p-8 text-center rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-2xl transition-all">

                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-4">
                      <Icon size={20}/>
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.text}
                    </p>

                  </Card>

                </motion.div>

              )

            })}

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="py-24">

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-yellow-400/20 blur-xl rounded-3xl"/>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl">

              {[
                {value:200,label:"Happy Clients"},
                {value:7,label:"Years Experience"},
                {value:150,label:"Solar Installations"},
                {value:100,label:"Events Decorated"}
              ].map((stat,i)=>(

                <motion.div
                  key={i}
                  whileHover={{scale:1.05}}
                  className="text-center"
                >

                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <CountUp end={stat.value} duration={2}/>+
                  </div>

                  <p className="text-slate-600 text-sm">
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-24">

        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">

            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>

            <p className="mb-8 text-white/90">
              Contact us for solar installation or mandap decoration.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us Now
            </a>

          </div>

        </div>

      </section>

      </div>

    </>
  )
}

export default AboutUs