import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import solarBg from "@/assets/hero-bg.jpg"
import { Helmet } from "react-helmet-async"
import {
  Sun,
  Shield,
  Check,
  Factory,
  Timer,
  Leaf,
  HelpCircle,
  TrendingUp,
  Battery
} from "lucide-react"

import { Link } from "react-router-dom"

const SolarServices = () => {

  return (
<>

  <Helmet>

  <title>
  Solar Panel Installation in Junagadh | Shree Enterprise
  </title>

  <meta
  name="description"
  content="Professional solar panel installation services in Junagadh, Mangrol, Talala and nearby villages. Government subsidy assistance available under PM Surya Ghar Yojana."
  />

  <meta
  name="keywords"
  content="solar installation Junagadh, solar panel Mangrol, solar subsidy Gujarat, rooftop solar Junagadh, solar company Junagadh"
  />

  <link
  rel="canonical"
  href="https://shreeenterprise.live/solar-services"
  />

  {/* OpenGraph */}

  <meta property="og:title" content="Solar Panel Installation in Junagadh | Shree Enterprise" />

  <meta
  property="og:description"
  content="Reduce electricity bills with professional rooftop solar installation services in Junagadh and Mangrol."
  />

  <meta property="og:type" content="website" />

  <meta property="og:url" content="https://shreeenterprise.live//solar-services" />

  <meta property="og:image" content="/solar-preview.jpg" />

  {/* Twitter */}

  <meta name="twitter:card" content="summary_large_image" />

  <meta
  name="twitter:title"
  content="Solar Panel Installation in Junagadh | Shree Enterprise"
  />

  <meta
  name="twitter:description"
  content="Affordable rooftop solar installation with subsidy assistance."
  />

  <meta
  name="twitter:image"
  content="/solar-preview.jpg"
  />

  {/* Geo tags */}

  <meta name="geo.region" content="IN-GJ" />
  <meta name="geo.placename" content="Junagadh" />
  <meta name="geo.position" content="21.0245;70.2212" />

  {/* Structured Data */}

  <script type="application/ld+json">
  {`
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Solar Panel Installation",
  "provider": {
  "@type": "LocalBusiness",
  "name": "Shree Enterprise"
  },
  "areaServed": {
  "@type": "Place",
  "name": "Junagadh District"
  },
  "serviceType": "Solar Panel Installation",
  "description": "Professional rooftop solar panel installation services in Junagadh, Mangrol and nearby villages.",
  "offers": {
  "@type": "Offer",
  "priceCurrency": "INR",
  "price": "65000"
  }
  }
  `}
  </script>

  </Helmet>

  <div className="relative min-h-screen overflow-hidden">

{/* PARALLAX BACKGROUND */}

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{ backgroundImage:`url(${solarBg})` }}
/>

{/* OVERLAY */}

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-indigo-50/90 backdrop-blur-[1px]" />


{/* HERO */}

<section className="relative py-28">

<motion.div
animate={{y:[0,-60,0]}}
transition={{duration:18,repeat:Infinity}}
className="absolute w-[600px] h-[600px] bg-yellow-400/20 blur-[150px] rounded-full -top-40 -left-40"
/>

<motion.div
animate={{y:[0,60,0]}}
transition={{duration:20,repeat:Infinity}}
className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[150px] rounded-full bottom-0 right-0"
/>

<div className="container mx-auto px-4">

<div className="max-w-5xl mx-auto relative">

<div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-yellow-400/30 via-blue-400/30 to-green-400/30 blur-xl"/>

<div className="relative rounded-[40px] border bg-white/70 backdrop-blur-xl p-14 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]">

<span className="inline-block mb-6 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
SOLAR ENERGY SERVICES
</span>

<h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
Smart Solar Solutions for Your Home
</h1>

<p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
Clean energy solutions that reduce electricity bills, increase savings,
and power a sustainable future.
</p>

</div>

</div>

</div>

</section>


{/* WHY GO SOLAR */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<div className="relative">

<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-blue-400/20 to-green-400/20 blur-xl rounded-3xl"/>

<div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl">

{[
{icon:TrendingUp,title:"Save ₹1,500–₹4,000/month",desc:"Reduce electricity bills with efficient solar panel systems."},
{icon:Shield,title:"Up to 40% Subsidy",desc:"Government financial support under PM Surya Ghar Yojana."},
{icon:Battery,title:"25+ Year Panel Life",desc:"Durable long-lasting solar technology."},
{icon:Sun,title:"Works in Rural Areas",desc:"Hybrid systems work even with unstable grid."},
{icon:Check,title:"Increases Property Value",desc:"Homes with solar have higher value."},
{icon:Leaf,title:"Eco-Friendly Energy",desc:"Reduce pollution and carbon emissions."},
].map((item,i)=>{

const Icon = item.icon

return(

<motion.div key={i} whileHover={{y:-10,scale:1.05}}>

<Card className="p-6 rounded-2xl bg-gradient-to-br from-white to-yellow-50 shadow-lg">

<Icon className="w-10 h-10 text-yellow-500 mb-4"/>

<h3 className="text-xl font-bold mb-2">{item.title}</h3>

<p className="text-muted-foreground">{item.desc}</p>

</Card>

</motion.div>

)

})}

</div>

</div>

</div>

</section>


{/* SOLAR PACKAGES */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<h2 className="text-4xl font-bold text-center mb-16">
Solar Packages
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
{kw:"2.5 kW",units:"10 units/day avg.",savings:"₹1,500–₹2,000 monthly"},
{kw:"3 kW",units:"12–14 units/day",savings:"₹2,000–₹2,500 monthly"},
{kw:"5 kW",units:"20 units/day",savings:"₹3,000–₹4,000 monthly"},
].map((p,i)=>(

<motion.div key={i} whileHover={{y:-10,scale:1.05}}>

<Card className="p-8 rounded-2xl border bg-white/80 backdrop-blur-lg shadow-xl">

<h3 className="text-3xl font-bold text-yellow-600 mb-2">{p.kw}</h3>

<p className="text-muted-foreground mb-4">{p.units}</p>

<p className="text-green-600 font-semibold">{p.savings}</p>

</Card>

</motion.div>

))}

</div>

</div>

</section>


{/* SOLAR PRICING */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<h2 className="text-4xl font-bold text-center mb-16">
Solar Pricing (After Subsidy)
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
{kw:"2.5 kW",price:"₹65k – ₹75k",units:"10 units/day"},
{kw:"3 kW",price:"₹80k – ₹95k",units:"12–14 units/day"},
{kw:"5 kW",price:"₹1.4L – ₹1.6L",units:"20+ units/day"},
].map((item,i)=>(

<motion.div key={i} whileHover={{scale:1.05}}>

<Card className="p-8 rounded-2xl border bg-gradient-to-br from-white to-blue-50 shadow-xl">

<h3 className="text-3xl font-bold text-primary mb-3">
{item.kw}
</h3>

<div className="text-2xl font-bold mb-4">
{item.price}
</div>

<ul className="space-y-2 text-muted-foreground mb-6">

<li className="flex gap-2"><Check className="text-primary"/> {item.units} output</li>
<li className="flex gap-2"><Check className="text-primary"/> Subsidy assistance</li>
<li className="flex gap-2"><Check className="text-primary"/> Installation included</li>

</ul>

<Button asChild className="w-full">
<Link to="/contact">Get Quote</Link>
</Button>

</Card>

</motion.div>

))}

</div>

</div>

</section>


{/* INSTALLATION TIMELINE */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-5xl">

<h2 className="text-4xl font-bold mb-12">
Installation Timeline
</h2>

<div className="space-y-6">

{[
"Site Survey: 1–2 days — roof analysis",
"Documentation: 1–3 days — subsidy forms",
"Installation: 2–4 days — panels & inverter",
"Inspection: 1–2 days — DISCOM activation",
].map((t,i)=>(

<Card key={i} className="p-6 flex gap-3 shadow-lg rounded-xl">

<Timer className="text-primary"/>

<p className="text-muted-foreground">{t}</p>

</Card>

))}

</div>

</div>

</section>


{/* FAQ */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-5xl">

<h2 className="text-4xl font-bold mb-12">
Frequently Asked Questions
</h2>

<div className="space-y-6">

{[
["How much money will I save?","Most households save ₹1,500–₹4,000 monthly."],
["How long does installation take?","Usually 5–10 working days."],
["Does solar work in villages?","Yes hybrid systems work even with unstable grid."],
].map(([q,a],i)=>(

<Card key={i} className="p-6 shadow-lg rounded-xl">

<h3 className="font-bold text-lg mb-2 flex gap-2">
<HelpCircle className="text-primary"/>
{q}
</h3>

<p className="text-muted-foreground">{a}</p>

</Card>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24">

<div className="container mx-auto px-4">

<div className="max-w-4xl mx-auto text-center p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white">

<h2 className="text-4xl font-bold mb-4">
Start Saving with Solar Today
</h2>

<p className="mb-8 text-white/90">
Contact us for a free site survey and solar consultation.
</p>

<Button asChild size="lg" className="bg-white text-black">

<Link to="/contact">Request Free Quote</Link>

</Button>

</div>

</div>

</section>

</div>
</>

)
}

export default SolarServices