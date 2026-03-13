import { motion } from "framer-motion"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
    >
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {children}
      </div>
    </section>
  )
}