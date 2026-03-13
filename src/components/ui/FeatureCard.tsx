import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative group"
    >

      {/* glow border */}

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* card */}

      <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-2xl p-8 text-center hover:bg-white/[0.12] transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">

        {/* icon */}

        <div className="flex justify-center mb-4 text-blue-300">
          {icon}
        </div>

        {/* title */}

        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        {/* description */}

        <p className="text-sm text-white/80 leading-relaxed">
          {description}
        </p>

      </div>

    </motion.div>
  )
}