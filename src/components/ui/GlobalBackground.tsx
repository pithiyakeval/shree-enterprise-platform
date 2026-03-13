import { motion } from "framer-motion"

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* BASE COLOR */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* FLOATING GRADIENT BLOBS */}

      <motion.div
        animate={{ y: [0, -80, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[180px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full bottom-0 right-0"
      />

      {/* GRID TEXTURE */}

      <div className="absolute inset-0 opacity-[0.08]
      bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
      bg-[size:60px_60px]" />

      {/* RADIAL LIGHT */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_60%)]" />

    </div>
  )
}