import { ReactNode } from "react"
import SmoothScroll from "@/components/providers/SmoothScroll"
import heroBg from "@/assets/hero-bg.jpg"

interface LayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <SmoothScroll>

      <div className="relative min-h-screen overflow-x-hidden">

        {/* GLOBAL BACKGROUND IMAGE */}

        <div
          className="fixed inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* GLOBAL OVERLAY */}

        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-indigo-50/90 backdrop-blur-[1px]" />

        {/* PAGE CONTENT */}

        <main className="relative z-10">
          {children}
        </main>

      </div>

    </SmoothScroll>
  )
}