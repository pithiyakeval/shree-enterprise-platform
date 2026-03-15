import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import mandapBg from "@/assets/hero-bg.jpg"
import { Helmet } from "react-helmet-async"
import {
Sparkles,
Heart,
Flower2,
Gift,
Star,
Check,
HelpCircle,
Timer,
Palette,
Users,
Feather,
Building2
} from "lucide-react"

import { Link } from "react-router-dom"

const MandapService = () => {

return (
    <>

    <Helmet>

<title>
Wedding Mandap Decoration in Junagadh | Shree Enterprise
</title>

<meta
name="description"
content="Professional wedding mandap decoration services in Junagadh, Mangrol, Talala and nearby villages. Traditional, modern and theme-based mandap decoration for weddings, engagements and events."
/>

<meta
name="keywords"
content="mandap decoration Junagadh, wedding mandap Mangrol, event decoration Junagadh, wedding stage decoration Gujarat, mandap near me"
/>

<link
rel="canonical"
href="https://shreeenterprise.live/mandap-services"
/>

{/* OpenGraph */}

<meta
property="og:title"
content="Wedding Mandap Decoration in Junagadh | Shree Enterprise"
/>

<meta
property="og:description"
content="Beautiful wedding mandap decoration and event stage setup services in Junagadh and nearby villages."
/>

<meta property="og:type" content="website" />

<meta
property="og:url"
content="https://shreeenterprise.live/mandap-services"
/>

<meta
property="og:image"
content="/mandap-preview.jpg"
/>

{/* Twitter */}

<meta name="twitter:card" content="summary_large_image" />

<meta
name="twitter:title"
content="Wedding Mandap Decoration in Junagadh | Shree Enterprise"
/>

<meta
name="twitter:description"
content="Traditional and modern mandap decoration services for weddings and events."
/>

<meta
name="twitter:image"
content="/mandap-preview.jpg"
/>

{/* GEO LOCAL SEO */}

<meta name="geo.region" content="IN-GJ" />
<meta name="geo.placename" content="Junagadh" />
<meta name="geo.position" content="21.0245;70.2212" />

{/* STRUCTURED DATA */}

<script type="application/ld+json">
{`
{
"@context": "https://schema.org",
"@type": "Service",
"name": "Wedding Mandap Decoration",
"provider": {
"@type": "LocalBusiness",
"name": "Shree Enterprise",
"address": {
"@type": "PostalAddress",
"streetAddress": "Main Chowk, Nagichana",
"addressLocality": "Mangrol",
"addressRegion": "Gujarat",
"postalCode": "362240",
"addressCountry": "IN"
}
},
"areaServed": {
"@type": "Place",
"name": "Junagadh District"
},
"description": "Wedding mandap decoration, engagement stage setup and event decoration services across Junagadh and nearby villages.",
"serviceType": [
"Wedding Mandap Decoration",
"Stage Decoration",
"Event Decoration",
"Theme Decoration"
],
"offers": {
"@type": "Offer",
"priceCurrency": "INR",
"price": "15000"
}
}
`}
</script>

</Helmet>

<div className="relative min-h-screen overflow-hidden">

{/* PARALLAX BACKGROUND */}

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{ backgroundImage:`url(${mandapBg})` }}
/>

{/* OVERLAY */}

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-pink-50/90 backdrop-blur-[1px]" />


{/* HERO */}

<section className="relative py-28">

<motion.div
animate={{y:[0,-60,0]}}
transition={{duration:18,repeat:Infinity}}
className="absolute w-[600px] h-[600px] bg-pink-400/20 blur-[150px] rounded-full -top-40 -left-40"
/>

<motion.div
animate={{y:[0,60,0]}}
transition={{duration:20,repeat:Infinity}}
className="absolute w-[500px] h-[500px] bg-purple-400/20 blur-[150px] rounded-full bottom-0 right-0"
/>

<div className="container mx-auto px-4">

<div className="max-w-5xl mx-auto relative">

<div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-yellow-400/30 blur-xl"/>

<div className="relative rounded-[40px] border bg-white/70 backdrop-blur-xl p-14 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]">

<span className="inline-block mb-6 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
MANDAP DECORATION SERVICES
</span>

<h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
Beautiful Wedding & Event Decorations
</h1>

<p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
Traditional, modern, and theme-based mandap decorations crafted
for weddings, engagements, and celebrations.
</p>

</div>

</div>

</div>

</section>


{/* WHY CHOOSE US */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<div className="relative">

<div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-yellow-400/20 blur-xl rounded-3xl"/>

<div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl">

{[
{icon:Heart,title:"Elegant & Traditional Designs",desc:"Perfect blend of cultural elements and modern creativity."},
{icon:Users,title:"Trusted by Local Families",desc:"Serving Saurashtra families with honesty."},
{icon:Palette,title:"Custom Theme Creation",desc:"Match decoration with your event theme."},
{icon:Star,title:"Affordable for Everyone",desc:"Premium decoration at budget-friendly pricing."},
{icon:Feather,title:"Eco-Friendly Options",desc:"Sustainable décor options available."},
{icon:Building2,title:"Full Setup & Management",desc:"Stage, lighting, entry gate, backdrop — all handled."},
].map((item,i)=>{

const Icon=item.icon

return(

<motion.div key={i} whileHover={{y:-10,scale:1.05}}>

<Card className="p-6 rounded-2xl bg-gradient-to-br from-white to-pink-50 shadow-lg">

<Icon className="w-10 h-10 text-pink-500 mb-4"/>

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


{/* WHAT WE OFFER */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<h2 className="text-4xl font-bold mb-16 text-center">
What We Offer
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{[
"Theme-based mandap decoration",
"Wedding mandap setup",
"Engagement stage setup",
"Birthday & kids stage decoration",
"Haldi, Garba & Pooja mandap",
"Photo booth & backdrop design",
"Complete lighting setup",
"Flower decoration",
"Material delivery & pickup",
"Generator & entry gate setup"
].map((item,i)=>(

<Card key={i} className="p-6 shadow-lg rounded-xl flex gap-3">

<Check className="text-pink-500"/>

<p className="text-muted-foreground">{item}</p>

</Card>

))}

</div>

</div>

</section>


{/* PACKAGES */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<h2 className="text-4xl font-bold text-center mb-16">
Decoration Packages
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
{title:"Basic Package",price:"₹15k – ₹30k",items:["Simple Mandap Setup","Basic Lighting","Entry Gate"]},
{title:"Standard Package",price:"₹40k – ₹50k",items:["Decorated Mandap","Stage + Backdrop","Lighting Setup","Balloon / Floral"]},
{title:"Premium Wedding",price:"₹60k – ₹80k",items:["Full Wedding Mandap","Premium Lighting","Entry Gate + Walkway","Custom Theme Setup"]},
].map((pkg,i)=>(

<motion.div key={i} whileHover={{scale:1.05}}>

<Card className="p-8 rounded-2xl border bg-gradient-to-br from-white to-purple-50 shadow-xl">

<h3 className="text-3xl font-bold text-purple-600 mb-3">
{pkg.title}
</h3>

<ul className="space-y-2 mb-6 text-muted-foreground">

{pkg.items.map((it,idx)=>(
<li key={idx} className="flex gap-2">
<Check className="text-purple-500"/> {it}
</li>
))}

</ul>

<p className="text-2xl font-bold mb-4">
{pkg.price}
</p>

<Button asChild className="w-full">

<Link to="/contact">Get Quote</Link>

</Button>

</Card>

</motion.div>

))}

</div>

</div>

</section>


{/* EVENT THEMES */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl">

<h2 className="text-4xl font-bold mb-16 text-center">
Popular Event Themes
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
"Floral Paradise",
"Golden Royal Theme",
"Eco Traditional Theme",
"Color Pop Theme",
"Temple Style Decoration",
"Modern Minimalist Theme"
].map((theme,i)=>(

<Card key={i} className="p-6 shadow-lg rounded-xl">

<Gift className="text-purple-500 mb-3"/>

<p className="text-muted-foreground">{theme}</p>

</Card>

))}

</div>

</div>

</section>


{/* TIMELINE */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-4xl">

<h2 className="text-4xl font-bold mb-12">
Event Planning Timeline
</h2>

<div className="space-y-6">

{[
"Booking: 30 days before",
"Theme finalization: 20 days before",
"Setup: 1–2 days before event",
"Execution: Event day"
].map((item,i)=>(

<Card key={i} className="p-6 flex gap-3 shadow-lg rounded-xl">

<Timer className="text-purple-500"/>

<p className="text-muted-foreground">{item}</p>

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
["Can I see previous work?","Yes we show real event photos."],
["Do you handle outdoor venues?","Yes indoor and outdoor setups."],
["Can themes be customized?","Absolutely you can choose colors and elements."]
].map(([q,a],i)=>(

<Card key={i} className="p-6 shadow-lg rounded-xl">

<h3 className="font-bold text-lg mb-2 flex gap-2">

<HelpCircle className="text-purple-500"/>

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

<div className="max-w-4xl mx-auto text-center p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white">

<h2 className="text-4xl font-bold mb-4">
Plan Your Perfect Event
</h2>

<p className="mb-8 text-white/90">
Contact us for theme ideas and decoration planning.
</p>

<Button asChild size="lg" className="bg-white text-black">

<Link to="/contact">
Get Free Quote
</Link>

</Button>

</div>

</div>

</section>

</div>
</>
)

}

export default MandapService