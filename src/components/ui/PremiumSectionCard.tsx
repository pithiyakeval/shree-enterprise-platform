import { ReactNode } from "react"

interface PremiumSectionCardProps {
  children: ReactNode
  className?: string
}

export default function PremiumSectionCard({
  children,
  className = "",
}: PremiumSectionCardProps) {
  return (
    <div className="relative">

      {/* glow border */}

      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-yellow-400/30 blur-xl opacity-60"></div>

      {/* main card */}

      <div
        className={`
        relative
        rounded-[40px]
        border border-white/20
        bg-white/10
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        px-8 md:px-16
        py-16
        ${className}
        `}
      >
        {children}
      </div>
    </div>
  )
}