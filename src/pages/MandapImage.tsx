import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

import mandapBg from "@/assets/hero-bg.jpg"

import m1 from "@/assets/mandap-1.jpg"
import m2 from "@/assets/mandap-2.jpg"
import m3 from "@/assets/mandap-3.jpg"
import m4 from "@/assets/mandap-4.jpg"
import m5 from "@/assets/mandap-5.jpg"
import m6 from "@/assets/mandap-6.jpg"
import m7 from "@/assets/mandap-7.jpg"
import m8 from "@/assets/mandap-8.jpg"
import m9 from "@/assets/mandap-9.jpg"
import m10 from "@/assets/mandap-10.jpg"
import m11 from "@/assets/mandap-11.jpg"
import m12 from "@/assets/mandap-12.jpg"

const projects = [
{title:"Traditional Wedding Mandap",location:"Junagadh",type:"Wedding",details:"Royal floral mandap decoration with traditional lighting.",image:m1},
{title:"Luxury Wedding Stage",location:"Mangrol",type:"Wedding",details:"Premium wedding mandap setup with grand floral backdrop.",image:m2},
{title:"Engagement Ceremony Stage",location:"Talala",type:"Engagement",details:"Beautiful engagement ring ceremony stage.",image:m3},
{title:"Elegant Engagement Setup",location:"Junagadh",type:"Engagement",details:"Modern engagement decoration with floral backdrop.",image:m4},
{title:"Garba Night Decoration",location:"Mangrol",type:"Garba",details:"Colorful lighting setup for Navratri Garba night.",image:m5},
{title:"Dandiya Night Event Setup",location:"Junagadh",type:"Garba",details:"Traditional Gujarati garba night decoration.",image:m6},
{title:"Haldi Ceremony Decoration",location:"Talala",type:"Haldi",details:"Yellow themed haldi ceremony decoration.",image:m7},
{title:"Haldi Function Setup",location:"Junagadh",type:"Haldi",details:"Traditional haldi ceremony stage.",image:m8},
{title:"Wedding Entry Gate Decoration",location:"Mangrol",type:"Entry",details:"Grand wedding entrance gate with floral arch.",image:m9},
{title:"Luxury Wedding Entrance",location:"Talala",type:"Entry",details:"Beautiful wedding entry decoration.",image:m10},
{title:"Reception Stage Decoration",location:"Junagadh",type:"Reception",details:"Elegant reception stage setup.",image:m11},
{title:"Wedding Reception Setup",location:"Mangrol",type:"Reception",details:"Premium reception decoration.",image:m12}
]

const filters = ["All","Wedding","Engagement","Garba","Haldi","Entry","Reception"]

const MandapImages = () => {

const [selected,setSelected] = useState<any>(null)
const [activeFilter,setActiveFilter] = useState("All")

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
<title>Mandap Decoration Gallery | Shree Enterprise</title>
<meta
name="description"
content="Wedding mandap decoration, engagement stage design, haldi ceremony setup and garba night decoration services by Shree Enterprise in Junagadh."
/>
<link rel="canonical" href="https://yourdomain.com/mandap-projects"/>
</Helmet>

<div className="relative min-h-screen overflow-hidden">

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{backgroundImage:`url(${mandapBg})`}}
/>

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/80 to-pink-50/90"/>

{/* HERO */}

<section className="py-28 text-center">

<h1 className="text-5xl font-bold mb-6">
Mandap Decoration Gallery
</h1>

<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
Explore wedding, engagement, haldi, garba night and reception decoration projects completed across Junagadh district.
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
? "bg-pink-600 text-white"
: "bg-white"
}`}
>
{filter}
</button>
))}

</div>


{/* GALLERY */}

<section className="pb-28">

<div className="container mx-auto px-4 max-w-6xl">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{filteredProjects.map((project,i)=>(

<motion.div
key={i}
whileHover={{y:-10,scale:1.03}}
className="cursor-pointer"
onClick={()=>setSelected(project)}
>

<Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition">

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

<p className="text-sm text-pink-600 font-medium mt-2">
{project.type} Decoration
</p>

</div>

</Card>

</motion.div>

))}

</div>

</div>

</section>


{/* GALLERY SEO CONTENT */}

<section className="py-20 max-w-5xl mx-auto text-center px-4">

<h2 className="text-4xl font-bold mb-6">
Wedding Decoration Services in Junagadh
</h2>

<p className="text-muted-foreground leading-relaxed">
Shree Enterprise provides professional wedding decoration services including mandap decoration,
engagement stage setup, haldi ceremony decoration, garba night decoration, reception stage
design and wedding entry gate decoration across Junagadh, Mangrol, Talala and nearby villages.
Our team specializes in creating beautiful floral backdrops, elegant stage setups and customized
theme decorations for weddings and events.
</p>

</section>


{/* PACKAGES */}

<section className="py-24 bg-white">

<h2 className="text-4xl font-bold text-center mb-16">
Wedding Decoration Packages
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">

<Card className="p-8 text-center">
<h3 className="text-xl font-bold mb-4">Basic Decoration</h3>
<p>✔ Simple Mandap</p>
<p>✔ Floral Backdrop</p>
<p>✔ Basic Lighting</p>
<p>✔ Stage Seating</p>
<p className="text-2xl font-bold mt-4">₹25,000+</p>
</Card>

<Card className="p-8 text-center border-2 border-pink-500">
<h3 className="text-xl font-bold mb-4">Premium Decoration</h3>
<p>✔ Designer Mandap</p>
<p>✔ Floral Decoration</p>
<p>✔ LED Lighting</p>
<p>✔ Entry Gate Decoration</p>
<p className="text-2xl font-bold mt-4">₹50,000+</p>
</Card>

<Card className="p-8 text-center">
<h3 className="text-xl font-bold mb-4">Royal Wedding</h3>
<p>✔ Luxury Mandap</p>
<p>✔ Premium Floral Setup</p>
<p>✔ Wedding Entry Gate</p>
<p>✔ Reception Stage</p>
<p className="text-2xl font-bold mt-4">₹90,000+</p>
</Card>

</div>

</section>


{/* SERVICES */}

<section className="py-24 bg-pink-50 text-center">

<h2 className="text-4xl font-bold mb-12">
Our Event Decoration Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

<p>✔ Wedding Mandap Decoration</p>
<p>✔ Engagement Stage Decoration</p>
<p>✔ Haldi Ceremony Decoration</p>
<p>✔ Garba Night Decoration</p>
<p>✔ Birthday Party Decoration</p>
<p>✔ Reception Stage Decoration</p>
<p>✔ Wedding Entry Gate Decoration</p>
<p>✔ Floral Decoration</p>

</div>

</section>


{/* WHY CHOOSE */}

<section className="py-24 text-center">

<h2 className="text-4xl font-bold mb-12">
Why Choose Shree Enterprise
</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<p>✔ 5+ Years Decoration Experience</p>
<p>✔ 100+ Wedding Events Completed</p>
<p>✔ Professional Decoration Team</p>
<p>✔ Custom Theme Decoration</p>
<p>✔ Affordable Packages</p>
<p>✔ Service Across Junagadh District</p>

</div>

</section>


{/* PROCESS */}

<section className="py-24 bg-indigo-50">

<h2 className="text-4xl font-bold text-center mb-12">
Our Decoration Process
</h2>

<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">

<Card className="p-6">
<h3 className="font-semibold">Consultation</h3>
<p>Discuss event theme and decoration requirements.</p>
</Card>

<Card className="p-6">
<h3 className="font-semibold">Design Planning</h3>
<p>We design the stage and decoration layout.</p>
</Card>

<Card className="p-6">
<h3 className="font-semibold">Setup & Installation</h3>
<p>Our team prepares decoration before the event.</p>
</Card>

<Card className="p-6">
<h3 className="font-semibold">Event Ready</h3>
<p>Your venue becomes a beautiful celebration space.</p>
</Card>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center">

<h2 className="text-4xl font-bold mb-6">
Planning a Wedding or Event?
</h2>

<p className="mb-6 text-muted-foreground">
Get professional decoration services for your special event.
</p>

<Button
className="bg-pink-600 text-white"
onClick={()=>window.location.href="/contact?service=Mandap"}
>
Book Decoration
</Button>

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

<p className="text-muted-foreground">
📍 {selected.location}
</p>

<p className="mt-4 text-gray-600">
{selected.details}
</p>

<div className="flex gap-4 mt-6">

<Button onClick={prevProject}>Previous</Button>
<Button onClick={nextProject}>Next</Button>

<Button
className="bg-pink-600 text-white"
onClick={()=>window.location.href="/contact?service=Mandap"}
>
Book Decoration
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

export default MandapImages