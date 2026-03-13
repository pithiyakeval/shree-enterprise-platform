import { motion } from "framer-motion"
import { Users, DollarSign, Package, Award } from "lucide-react"

import SectionWrapper from "@/components/ui/SectionWrapper"
import SectionHeader from "@/components/ui/SectionHeader"
import GradientButton from "@/components/ui/GradientButton"
import { Badge } from "@/components/ui/badge"

import CountUp from "react-countup"

export default function WhyChooseSection() {

  const features = [
    {
      icon: Users,
      title: "Happy Families",
      number: 200,
      suffix: "+",
      desc: "Trusted across Talala & Junagadh region",
      color: "from-blue-400 to-indigo-500",
      iconColor: "text-blue-500"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      number: 100,
      suffix: "%",
      desc: "No hidden charges, clear quotes upfront",
      color: "from-yellow-400 to-orange-500",
      iconColor: "text-yellow-500"
    },
    {
      icon: Package,
      title: "Complete Setup",
      number: 5,
      suffix: "+",
      desc: "Full material & installation services",
      color: "from-indigo-400 to-purple-500",
      iconColor: "text-indigo-500"
    },
    {
      icon: Award,
      title: "Govt Approved",
      number: 1,
      suffix: "",
      desc: "Certified vendor for solar subsidy programs",
      color: "from-pink-500 to-purple-600",
      iconColor: "text-pink-500"
    }
  ]

  return (

    <SectionWrapper className="relative py-32 overflow-hidden">

      {/* SOFT PREMIUM BACKGROUND */}

      <div className="absolute inset-0 -z-10 
      bg-gradient-to-b from-slate-50 via-white to-indigo-50
      rounded-[80px] md:rounded-[140px]
      shadow-[0_20px_80px_rgba(0,0,0,0.08)]" />

      {/* FLOATING BLOBS */}

      <motion.div
        animate={{ y:[0,-50,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-300/20 blur-[120px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y:[0,60,0] }}
        transition={{ duration:20, repeat:Infinity }}
        className="absolute w-[420px] h-[420px] bg-purple-300/20 blur-[120px] rounded-full bottom-[-160px] right-[-120px]"
      />

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}

        <div className="text-center mb-20">

          <Badge className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
            Trusted Excellence
          </Badge>

          <SectionHeader
            title="Why Choose Us"
            subtitle="Trusted by families across Junagadh for quality and reliability"
          />

        </div>


        {/* FEATURE CARDS */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {features.map((item,i)=>{

            const Icon = item.icon

            return(

              <motion.div
                key={i}
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.1}}
                whileHover={{y:-14,scale:1.04}}
                className="group relative"
              >

                {/* glow */}

                <div className={`absolute -inset-1 rounded-[28px] bg-gradient-to-r ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition`} />

                {/* glass card */}

                <div className="relative rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/40 p-8 text-center shadow-lg group-hover:shadow-xl transition">

                  {/* icon */}

                  <motion.div
                    whileHover={{scale:1.15,rotate:6}}
                    className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-5"
                  >
                    <Icon className={`w-8 h-8 ${item.iconColor}`} />
                  </motion.div>

                  {/* counter */}

                  <div className="text-3xl font-bold mb-1">

                    <CountUp end={item.number} duration={2}/>
                    {item.suffix}

                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            )

          })}

        </div>


        {/* CTA */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mt-24"
        >

          <GradientButton>
            Request Free Consultation
          </GradientButton>

        </motion.div>

      </div>

    </SectionWrapper>

  )

}