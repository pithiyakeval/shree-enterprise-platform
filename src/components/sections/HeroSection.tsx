import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

import SectionWrapper from "@/components/ui/SectionWrapper"
import FeatureCard from "@/components/ui/FeatureCard"
import GradientButton from "@/components/ui/GradientButton"

import CountUp from "react-countup"

import { Sun, Sparkles, Award, Users, Zap, Shield } from "lucide-react"

import solarBg from "@/assets/solar-1.jpg"
import mandapBg from "@/assets/mandap-2.jpg"

export default function HeroSection() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleSiteVisit = () => {
    toast.success("Our team will contact you soon!")
    scrollToSection("contact")
  }

  return (

    <SectionWrapper className="relative pt-28 md:pt-36 pb-44 md:pb-52 overflow-hidden">

      {/* PREMIUM SPLIT BACKGROUND */}

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 -z-10 overflow-hidden rounded-[80px] md:rounded-[140px] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
      >

        {/* Split Images */}

        <div className="grid grid-cols-2 h-full">

          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${solarBg})` }}
          />

          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${mandapBg})` }}
          />

        </div>

        {/* Vertical Divider */}

        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50" />

        {/* Light highlight */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />

      </motion.div>


      {/* FLOATING GRADIENT BLOBS */}

      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute w-[520px] md:w-[700px] h-[520px] md:h-[700px] bg-blue-500/20 blur-[170px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[420px] md:w-[560px] h-[420px] md:h-[560px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-180px] right-[-120px]"
      />


      {/* CONTENT CONTAINER */}

      <div className="container mx-auto px-5 md:px-6 relative">


        {/* HERO CARD */}

        <div className="relative max-w-5xl mx-auto">

          {/* Glow */}

          <div className="absolute -inset-2 rounded-[50px] bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 opacity-40 blur-3xl"></div>

          {/* Glass Card */}

          <div className="relative rounded-[32px] md:rounded-[42px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl px-6 md:px-20 py-10 md:py-14 shadow-[0_20px_80px_rgba(0,0,0,0.35)] text-center">

            <Badge className="mb-6 px-4 py-2 text-xs md:text-sm bg-white/20 backdrop-blur-xl border border-white/25 flex items-center justify-center gap-2 mx-auto w-fit">
              <Award className="w-4 h-4 text-yellow-400" />
              Govt Approved Vendor • 200+ Happy Families
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
              Shree Enterprise
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-6">
              Reliable Solar Installations & Premium Mandap Decorations
            </p>

            <p className="text-white/70 max-w-xl mx-auto mb-10 text-sm md:text-base">
              Professional service you can trust – from sustainable energy to unforgettable celebrations.
            </p>


            {/* CTA BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <GradientButton onClick={handleSiteVisit}>
                <Sun className="mr-2 h-5 w-5" />
                Request Free Site Visit
              </GradientButton>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("gallery")}
                className="bg-white/10 backdrop-blur-xl text-white border-white/20 hover:bg-white/20 px-8 py-6"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                View Mandap Gallery
              </Button>

            </div>

          </div>

        </div>


        {/* FLOATING STATS */}

        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto mt-16 -mb-16 relative z-20">

          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-5 text-center shadow-lg hover:scale-105 transition">

            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              <CountUp end={200} duration={2} />+
            </div>

            <p className="text-[10px] md:text-xs text-white/80 mt-1">
              Installations
            </p>

          </div>


          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-5 text-center shadow-lg hover:scale-105 transition">

            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              <CountUp end={7} duration={2} />+
            </div>

            <p className="text-[10px] md:text-xs text-white/80 mt-1">
              Years Serving
            </p>

          </div>


          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-5 text-center shadow-lg hover:scale-105 transition">

            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              <CountUp end={100} duration={2} />%
            </div>

            <p className="text-[10px] md:text-xs text-white/80 mt-1">
              Satisfaction
            </p>

          </div>

        </div>


        {/* FEATURES */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-24 max-w-5xl mx-auto"
        >

          <FeatureCard
            icon={<Zap />}
            title="Fast Solar Installation"
            description="Quick and professional solar setup with subsidy assistance."
          />

          <FeatureCard
            icon={<Users />}
            title="Trusted by Families"
            description="Serving hundreds of happy customers across Junagadh."
          />

          <FeatureCard
            icon={<Shield />}
            title="Reliable Service"
            description="High quality solar systems and premium mandap decorations."
          />

        </motion.div>


        {/* SCROLL INDICATOR */}

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-14"
        >
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>

      </div>

    </SectionWrapper>
  )
}