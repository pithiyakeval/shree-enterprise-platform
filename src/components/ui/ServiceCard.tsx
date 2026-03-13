import { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative p-8 rounded-2xl overflow-hidden 
      border border-white/10
      bg-white/5 backdrop-blur-xl
      shadow-xl
      transition-all duration-300"
    >
      {/* glowing gradient background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
        bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
      />

      {/* icon */}
      <div
        className="relative w-14 h-14 flex items-center justify-center 
        rounded-xl mb-6
        bg-gradient-to-br from-blue-500/20 to-purple-500/20
        text-primary text-2xl
        group-hover:scale-110 transition"
      >
        {icon}
      </div>

      {/* title */}
      <h3 className="text-xl font-semibold mb-3 relative">
        {title}
      </h3>

      {/* description */}
      <p className="text-muted-foreground relative">
        {description}
      </p>
    </motion.div>
  )
}