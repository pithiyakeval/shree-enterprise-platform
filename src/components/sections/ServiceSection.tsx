import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import SectionWrapper from "@/components/ui/SectionWrapper"
import SectionHeader from "@/components/ui/SectionHeader"
import GradientButton from "@/components/ui/GradientButton"
import { Badge } from "@/components/ui/badge"

import { toast } from "sonner"

import {
  Sun,
  Sparkles,
  Zap,
  Heart,
  Shield,
  Users
} from "lucide-react"

import solarBg from "@/assets/solar-1.jpg"
import mandapBg from "@/assets/mandap-2.jpg"

export default function ServicesSection() {

  const navigate = useNavigate()

  const handleSolarClick = () => {
    toast.success("Redirecting to Solar Services")
    navigate("/solar-services")
  }

  const handleMandapClick = () => {
    toast.success("Opening Decoration Gallery")
    navigate("/mandap-services")
  }

  return (

    <SectionWrapper className="relative py-32 overflow-hidden">

      {/* SPLIT BACKGROUND CARD (LIKE HERO) */}

      <motion.div
        animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 -z-10 overflow-hidden rounded-[80px] md:rounded-[140px] shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
      >

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

        {/* divider */}

        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/30 shadow-[0_0_30px_rgba(255,255,255,0.4)]" />

        {/* overlay */}

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />

        {/* radial light */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      </motion.div>


      {/* FLOATING BLOBS */}

      <motion.div
        animate={{ y: [0,-60,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute w-[520px] h-[520px] bg-blue-500/20 blur-[170px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y: [0,60,0] }}
        transition={{ duration:20, repeat:Infinity }}
        className="absolute w-[460px] h-[460px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-160px] right-[-120px]"
      />


      {/* CONTENT */}

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}

        <div className="text-center mb-20">

          <Badge className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
            Our Expertise
          </Badge>
      
          <SectionHeader
            title="Our Services"
            subtitle="Expert solutions for energy independence and memorable celebrations"
          />

        </div>


        {/* SERVICE CARDS */}

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* SOLAR */}

          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group"
          >

            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-xl group-hover:opacity-60 transition"></div>

            <div className="relative rounded-[28px] bg-white/[0.08] backdrop-blur-3xl border border-white/20 p-10 text-white">

              <div className="w-16 h-16 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-yellow-400"/>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Solar Energy Solutions
              </h3>

              <p className="text-white/80 mb-6">
                Professional solar installation with subsidy assistance and maintenance.
              </p>

              <ul className="space-y-3 text-white/70 mb-8">

                <li className="flex gap-2">
                  <Zap className="w-5 h-5 text-yellow-400"/>
                  Complete site survey & energy analysis
                </li>

                <li className="flex gap-2">
                  <Zap className="w-5 h-5 text-yellow-400"/>
                  2.5kW to 5kW installation
                </li>

                <li className="flex gap-2">
                  <Zap className="w-5 h-5 text-yellow-400"/>
                  Government subsidy paperwork
                </li>

                <li className="flex gap-2">
                  <Zap className="w-5 h-5 text-yellow-400"/>
                  Maintenance support
                </li>

              </ul>

              <GradientButton onClick={handleSolarClick}>
                Get Solar Pricing
              </GradientButton>

            </div>

          </motion.div>



          {/* MANDAP */}

          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group"
          >

            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 blur-xl group-hover:opacity-60 transition"></div>

            <div className="relative rounded-[28px] bg-white/[0.08] backdrop-blur-3xl border border-white/20 p-10 text-white">

              <div className="w-16 h-16 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-pink-400"/>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Mandap Decoration
              </h3>

              <p className="text-white/80 mb-6">
                Beautiful mandap decorations and premium event setups.
              </p>

              <ul className="space-y-3 text-white/70 mb-8">

                <li className="flex gap-2">
                  <Heart className="w-5 h-5 text-pink-400"/>
                  Wedding & engagement events
                </li>

                <li className="flex gap-2">
                  <Heart className="w-5 h-5 text-pink-400"/>
                  Floral stage arrangements
                </li>

                <li className="flex gap-2">
                  <Heart className="w-5 h-5 text-pink-400"/>
                  Professional lighting setups
                </li>

                <li className="flex gap-2">
                  <Heart className="w-5 h-5 text-pink-400"/>
                  Custom themes
                </li>

              </ul>

              <GradientButton onClick={handleMandapClick}>
                See Decoration Themes
              </GradientButton>

            </div>

          </motion.div>

        </div>


        {/* TRUST FEATURES */}

        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">

          <div className="rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 hover:bg-white/[0.12] transition p-6 text-white">

            <Shield className="w-8 h-8 text-blue-400 mb-3"/>

            <h4 className="font-semibold text-lg">
              Trusted Quality
            </h4>

            <p className="text-white/70 text-sm mt-1">
              High quality solar systems and decoration services.
            </p>

          </div>


          <div className="rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 hover:bg-white/[0.12] transition p-6 text-white">

            <Users className="w-8 h-8 text-indigo-400 mb-3"/>

            <h4 className="font-semibold text-lg">
              Experienced Team
            </h4>

            <p className="text-white/70 text-sm mt-1">
              Skilled professionals delivering reliable service.
            </p>

          </div>


          <div className="rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 hover:bg-white/[0.12] transition p-6 text-white">

            <Zap className="w-8 h-8 text-yellow-400 mb-3"/>

            <h4 className="font-semibold text-lg">
              Fast Installation
            </h4>

            <p className="text-white/70 text-sm mt-1">
              Quick project completion with full support.
            </p>

          </div>

        </div>

      </div>

    </SectionWrapper>
  )
}