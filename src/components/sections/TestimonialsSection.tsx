import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

import SectionWrapper from "@/components/ui/SectionWrapper"
import SectionHeader from "@/components/ui/SectionHeader"
import GradientButton from "@/components/ui/GradientButton"
import { Badge } from "@/components/ui/badge"

import solarBg from "@/assets/solar-1.jpg"
import mandapBg from "@/assets/mandap-2.jpg"

export default function TestimonialsSection() {

  const testimonials = [
    {
      text: "Installed quickly, subsidy handled smoothly — highly recommended for solar!",
      name: "Jethabhai Pithiya",
      place: "Nagichana",
      initials: "JP",
    },
    {
      text: "Our wedding mandap decoration was absolutely stunning! Everyone loved the decoration setup.",
      name: "Naranbhai Pithiya",
      place: "Nagichana",
      initials: "NP",
    },
    {
      text: "Professional service from start to finish. Our solar system has been running perfectly for 2 years.",
      name: "Dineshbhai Nandha",
      place: "Talala",
      initials: "DN",
    },
  ]

  return (

    <SectionWrapper className="relative py-32 overflow-hidden">

      {/* PREMIUM SPLIT BACKGROUND */}

      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 -z-10 overflow-hidden rounded-[80px] md:rounded-[140px] shadow-[0_30px_120px_rgba(0,0,0,0.15)]"
      >

        <div className="grid grid-cols-2 h-full">

          <div
            className="bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${solarBg})` }}
          />

          <div
            className="bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${mandapBg})` }}
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-indigo-50"></div>

      </motion.div>


      {/* NOISE TEXTURE */}

      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"></div>


      {/* FLOATING BLOBS */}

      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute w-[520px] h-[520px] bg-indigo-400/20 blur-[140px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-purple-400/20 blur-[140px] rounded-full bottom-[-150px] right-[-120px]"
      />


      <div className="container mx-auto px-6 relative">

        {/* HEADER */}

        <div className="text-center mb-20">

          <Badge className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
            Google Reviews
          </Badge>

          <SectionHeader
            title="Rated 5★ by Our Customers"
            subtitle="Trusted by families across Junagadh region"
          />

        </div>


        {/* GOOGLE RATING SUMMARY */}

        <div className="flex flex-col items-center mb-16">

          <div className="flex gap-1 mb-2">

            {[...Array(5)].map((_,i)=>(
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400"/>
            ))}

          </div>

          <p className="text-lg font-semibold">
            5.0 Rating on Google
          </p>

          <p className="text-muted-foreground text-sm">
            Based on verified customer reviews
          </p>

        </div>


        {/* GLASS PANEL */}

        <div className="max-w-6xl mx-auto rounded-[60px] md:rounded-[80px] border border-white/40 bg-white/60 backdrop-blur-2xl p-10 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">

          <div className="grid md:grid-cols-3 gap-10">

            {testimonials.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >

                {/* HOVER GLOW */}

                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

                {/* CARD */}

                <div className="relative p-8 rounded-[28px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition">

                  {/* QUOTE ICON */}

                  <Quote className="w-8 h-8 text-indigo-500 mb-4 opacity-60" />

                  {/* STARS */}

                  <div className="flex gap-1 mb-4">

                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                  {/* TEXT */}

                  <p className="text-foreground mb-6 italic leading-relaxed">
                    "{item.text}"
                  </p>


                  {/* AUTHOR */}

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold shadow-md">
                      {item.initials}
                    </div>

                    <div>

                      <p className="font-semibold text-foreground">
                        {item.name}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {item.place}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >

          <GradientButton>
            Become Our Next Happy Customer
          </GradientButton>

        </motion.div>

      </div>

    </SectionWrapper>

  )
}