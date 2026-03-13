import { ReactNode } from "react"
import { motion, HTMLMotionProps } from "framer-motion"

interface GradientButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
}

export default function GradientButton({
  children,
  className = "",
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`
        inline-flex items-center justify-center
        px-8 py-4
        rounded-xl
        font-semibold
        bg-gradient-to-r from-blue-600 to-purple-600
        text-white
        shadow-lg
        hover:shadow-xl
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}