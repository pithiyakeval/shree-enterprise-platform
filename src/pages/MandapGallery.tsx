import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import mandapBg from "@/assets/hero-bg.jpg"

const sampleImages: string[] = [
  "/images/mandap1.jpg",
  "/images/mandap2.jpg",
  "/images/mandap3.jpg",
  "/images/mandap4.jpg",
  "/images/mandap5.jpg",
]

const MandapGallery = () => {

return (

<div className="relative min-h-screen overflow-hidden">

{/* BACKGROUND */}

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{ backgroundImage:`url(${mandapBg})` }}
/>

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-pink-50/90 backdrop-blur-[1px]" />


{/* HEADER */}

<section className="py-28">

<div className="container mx-auto px-4 text-center max-w-5xl">

<div className="relative">

<div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-yellow-400/30 blur-xl"/>

<div className="relative rounded-[40px] border bg-white/70 backdrop-blur-xl p-12 shadow-xl">

<h1 className="text-5xl font-bold mb-6">
Mandap Decoration Gallery
</h1>

<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
A glimpse of our premium mandap setups crafted for weddings,
engagements, and cultural celebrations.
</p>

</div>

</div>

</div>

</section>


{/* GALLERY */}

<section className="pb-24">

<div className="container mx-auto px-4 max-w-6xl">

<div className="relative">

{/* glow */}

<div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-yellow-400/20 blur-xl rounded-3xl"/>

<div className="relative grid md:grid-cols-3 gap-8 p-10 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl">

{sampleImages.map((src,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
transition={{duration:0.3}}
>

<Card className="overflow-hidden rounded-2xl shadow-lg">

<div className="relative group">

<img
src={src}
alt={`Mandap Design ${index+1}`}
className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
/>

{/* hover overlay */}

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<span className="text-white font-semibold">
View Design
</span>

</div>

</div>

</Card>

</motion.div>

))}

</div>

</div>

</div>

</section>

</div>

)

}

export default MandapGallery