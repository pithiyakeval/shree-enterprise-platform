import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

import solarBg from "@/assets/hero-bg.jpg"

import solar1 from "@/assets/solar-1.jpg"
import solar2 from "@/assets/solar-2.jpg"
import solar3 from "@/assets/solar-3.jpg"
import solar4 from "@/assets/solar-4.jpg"
import solar5 from "@/assets/solar-5.jpg"
import solar6 from "@/assets/solar-6.jpg"

const projects = [
{
title:"3kW Rooftop Solar Installation",
location:"Mangrol, Junagadh",
capacity:"3kW",
type:"3kW",
panels:"Waaree 550W Mono",
inverter:"Growatt Hybrid",
generation:"420 Units / Month",
installation:"2 Days",
savings:"₹2,000/month",
image:solar1
},
{
title:"Residential Balcony Solar Setup",
location:"Junagadh City",
capacity:"2kW",
type:"2kW",
panels:"Adani 540W",
inverter:"Micro Inverter",
generation:"280 Units / Month",
installation:"1 Day",
savings:"₹1,500/month",
image:solar2
},
{
title:"5kW Large Rooftop Solar System",
location:"Talala",
capacity:"5kW",
type:"5kW",
panels:"Waaree 550W",
inverter:"Growatt 5kW",
generation:"700 Units / Month",
installation:"3 Days",
savings:"₹3,500/month",
image:solar3
},
{
title:"Industrial Solar Panel Installation",
location:"Junagadh District",
capacity:"Commercial",
type:"Commercial",
panels:"Adani 600W",
inverter:"Industrial Inverter",
generation:"1200 Units / Month",
installation:"5 Days",
savings:"Huge Energy Savings",
image:solar4
},
{
title:"Solar Panel Cleaning & Maintenance",
location:"Mangrol",
capacity:"Maintenance",
type:"Commercial",
panels:"Panel Cleaning",
inverter:"System Check",
generation:"Efficiency Boost",
installation:"Half Day",
savings:"Higher Efficiency",
image:solar5
},
{
title:"Commercial Rooftop Solar Setup",
location:"Talala Area",
capacity:"5kW",
type:"5kW",
panels:"Waaree Solar",
inverter:"Hybrid Inverter",
generation:"650 Units / Month",
installation:"2 Days",
savings:"₹3,000/month",
image:solar6
}
]

const filters = ["All","2kW","3kW","5kW","Commercial"]

const SolarImages = () => {

const [selected,setSelected] = useState<any>(null)
const [activeFilter,setActiveFilter] = useState("All")
const [bill,setBill] = useState("")

const filteredProjects =
activeFilter === "All"
? projects
: projects.filter(p => p.type === activeFilter)

const currentIndex =
projects.findIndex(p => p === selected)

const nextProject = () => {
const next = (currentIndex + 1) % projects.length
setSelected(projects[next])
}

const prevProject = () => {
const prev = (currentIndex - 1 + projects.length) % projects.length
setSelected(projects[prev])
}

return(
<>

<Helmet>

<title>
Solar Installation Projects | Shree Enterprise Junagadh
</title>

<meta
name="description"
content="Explore rooftop solar installations completed by Shree Enterprise across Junagadh, Mangrol and Talala."
/>

<link rel="canonical" href="https://yourdomain.com/solar-projects"/>

</Helmet>

<div className="relative min-h-screen overflow-hidden">

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{backgroundImage:`url(${solarBg})`}}
/>

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/80 to-indigo-50/90"/>

{/* HERO */}

<section className="py-28 text-center">

<h1 className="text-5xl font-bold mb-6">
Solar Installation Projects
</h1>

<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
Real rooftop solar installations completed across Junagadh district.
</p>

</section>

{/* FILTER */}

<div className="flex justify-center gap-4 mb-12 flex-wrap">

{filters.map(filter=>(
<button
key={filter}
onClick={()=>setActiveFilter(filter)}
className={`px-4 py-2 rounded-full border ${
activeFilter===filter
? "bg-blue-600 text-white"
: "bg-white"
}`}
>
{filter}
</button>
))}

</div>

{/* PROJECT GRID */}

<section className="pb-28">

<div className="container mx-auto px-4 max-w-6xl">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{filteredProjects.map((project,i)=>(

<motion.div
key={i}
whileHover={{y:-10,scale:1.03}}
onClick={()=>setSelected(project)}
className="cursor-pointer"
>

<Card className="overflow-hidden rounded-2xl shadow-xl">

<img
src={project.image}
alt={project.title}
loading="lazy"
className="h-56 w-full object-cover"
/>

<div className="p-6">

<h3 className="font-bold text-lg mb-1">
{project.title}
</h3>

<p className="text-sm text-muted-foreground">
📍 {project.location}
</p>

<p className="text-sm text-blue-600 font-medium mt-2">
Savings: {project.savings}
</p>

</div>

</Card>

</motion.div>

))}

</div>

</div>

</section>

{/* STATS */}

<section className="py-20 text-center">

<div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">

<div>
<h3 className="text-4xl font-bold text-blue-600">200+</h3>
<p>Solar Installations</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">5+</h3>
<p>Years Experience</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">25</h3>
<p>Panel Warranty</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">500kW+</h3>
<p>Total Capacity Installed</p>
</div>

</div>

</section>

{/* BEFORE AFTER */}

<section className="py-24 text-center">

<h2 className="text-4xl font-bold mb-12">
Before vs After Solar
</h2>

<div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

<Card className="p-10">
<h3 className="font-bold text-xl mb-4">Before Solar</h3>
<p>High electricity bills</p>
<p>Power cuts during summer</p>
<p>No control over electricity costs</p>
</Card>

<Card className="p-10 bg-green-50">
<h3 className="font-bold text-xl mb-4">After Solar</h3>
<p>Save ₹2000–₹4000 monthly</p>
<p>Clean renewable energy</p>
<p>25 year reliable power generation</p>
</Card>

</div>

</section>

{/* INSTALLATION PROCESS */}

<section className="py-24 bg-white">

<div className="max-w-5xl mx-auto px-4">

<h2 className="text-4xl font-bold text-center mb-12">
How Our Solar Installation Works
</h2>

<div className="grid md:grid-cols-2 gap-8">

<Card className="p-6"><h3 className="font-semibold">Site Inspection</h3><p>Roof inspection and electricity usage analysis.</p></Card>

<Card className="p-6"><h3 className="font-semibold">System Design</h3><p>Designing 2kW, 3kW, or 5kW systems.</p></Card>

<Card className="p-6"><h3 className="font-semibold">Subsidy Assistance</h3><p>We help apply for solar subsidy.</p></Card>

<Card className="p-6"><h3 className="font-semibold">Installation</h3><p>Panels, inverter and wiring installed.</p></Card>

<Card className="p-6"><h3 className="font-semibold">Net Metering</h3><p>Connect your system with the electricity grid.</p></Card>

<Card className="p-6"><h3 className="font-semibold">Start Saving</h3><p>Your system begins generating electricity.</p></Card>

</div>

</div>

</section>

{/* SOLAR BILL CALCULATOR */}

<section className="py-24 text-center">

<h2 className="text-4xl font-bold mb-6">
Solar Savings Calculator
</h2>

<p className="mb-6">Enter your monthly electricity bill</p>

<input
value={bill}
onChange={(e)=>setBill(e.target.value)}
placeholder="Enter electricity bill"
className="border px-4 py-2 rounded"
/>

{bill && (
<p className="mt-4 text-lg font-semibold">
Estimated Savings: ₹{Math.floor(Number(bill)*0.7)}
</p>
)}

</section>

{/* MODAL */}

<AnimatePresence>

{selected &&(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
>

<div className="bg-white rounded-xl p-6 max-w-3xl">

<img src={selected.image} className="rounded-lg mb-4"/>

<h3 className="text-2xl font-bold">{selected.title}</h3>

<p className="text-muted-foreground">📍 {selected.location}</p>

<div className="grid grid-cols-2 gap-4 mt-4">

<p><b>Capacity:</b> {selected.capacity}</p>
<p><b>Panels:</b> {selected.panels}</p>
<p><b>Inverter:</b> {selected.inverter}</p>
<p><b>Generation:</b> {selected.generation}</p>
<p><b>Installation:</b> {selected.installation}</p>
<p className="text-green-600 font-semibold">Savings: {selected.savings}</p>

</div>

<div className="flex gap-4 mt-6">

<Button onClick={prevProject}>Previous</Button>
<Button onClick={nextProject}>Next</Button>

<Button
className="bg-yellow-400 text-black"
onClick={()=>window.location.href="/contact?service=Solar"}
>
Get Solar Quote
</Button>

</div>

</div>

</motion.div>

)}

</AnimatePresence>

</div>

</>
)

}

export default SolarImages