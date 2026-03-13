import { Card } from "@/components/ui/card"
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import helpBg from "@/assets/hero-bg.jpg"
import { Helmet } from "react-helmet-async"
import {
Phone,
Mail,
MessageCircle,
HelpCircle
} from "lucide-react"

import { Link } from "react-router-dom"

const Help = () => {

const solarFaqs = [
{
question:"How much does a solar installation cost in junagadh?",
answer:"Solar installation costs vary based on system size (2.5kW to 5kW) and your specific requirements. After government subsidies, a typical 3kW system costs approximately ₹1,50,000 - ₹2,00,000."
},
{
question:"What government subsidies are available in Gujarat?",
answer:"Government of India provides subsidies up to 40% for residential solar installations under 3kW and 20% for systems between 3-10kW."
},
{
question:"How long does installation take ?",
answer:"Typical installations take 2-3 days once approvals are ready. The full process including approvals usually takes 3-4 weeks."
},
{
question:"What maintenance is required?",
answer:"Solar panels require minimal maintenance — mainly cleaning 3-4 times per year."
},
{
question:"What warranty do you provide?",
answer:"Panels have 25-year warranty, inverters 5–10 years, and we provide workmanship warranty."
}
]

const mandapFaqs = [
{
question:"How far in advance should I book?",
answer:"We recommend booking 2-3 months before weddings and 3-4 weeks before small events."
},
{
question:"Do you provide custom themes?",
answer:"Yes! Our team designs decorations based on your theme, colors and event style."
},
{
question:"What’s included in decoration packages?",
answer:"Stage setup, mandap, lighting, fabrics, floral arrangements, and event coordination."
},
{
question:"Can I see your previous work?",
answer:"Yes! You can visit our gallery section or contact us for our full portfolio."
},
{
question:"What areas around saurashtra do you serve?",
answer:"We serve Junagadh, Talala, Mangrol, Nagichana and surrounding villages."
}
]

return (
    <>
    <Helmet>

        <script type="application/ld+json">
{`
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [

{
"@type": "Question",
"name": "How much does solar installation cost in Junagadh?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Solar installation costs depend on system size. After subsidy, a 3kW system typically costs around ₹1.5–2 lakh."
}
},

{
"@type": "Question",
"name": "What government subsidy is available for solar panels?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Government provides up to 40% subsidy for residential solar systems under 3kW under PM Surya Ghar Yojana."
}
},

{
"@type": "Question",
"name": "How long does solar installation take?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Installation usually takes 2–3 days once approvals are completed."
}
},

{
"@type": "Question",
"name": "How early should I book mandap decoration?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We recommend booking 2–3 months before weddings and 3–4 weeks before small events."
}
},

{
"@type": "Question",
"name": "Which areas do you serve?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We provide solar installation and mandap decoration services across Junagadh, Mangrol, Talala and nearby villages."
}
}

]
}
`}
</script>

<title>
Help & FAQs | Solar Panel Installation & Mandap Decoration Junagadh
</title>

<meta
name="description"
content="Get answers to common questions about solar panel installation, government subsidy, and wedding mandap decoration services in Junagadh, Mangrol and nearby villages."
/>

<meta
name="keywords"
content="solar panel FAQ Gujarat, solar subsidy Junagadh, solar installation cost Gujarat, mandap decoration FAQ, event decoration Junagadh"
/>

<link
rel="canonical"
href="https://yourdomain.com/help"
/>

{/* OpenGraph */}

<meta
property="og:title"
content="Solar & Mandap Service FAQs | Shree Enterprise"
/>

<meta
property="og:description"
content="Find answers about solar installation, government subsidy and mandap decoration services across Junagadh district."
/>

<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourdomain.com/help" />
<meta property="og:image" content="/preview.jpg" />

{/* Twitter */}

<meta name="twitter:card" content="summary_large_image" />

<meta
name="twitter:title"
content="Solar Panel & Mandap Decoration Help Center"
/>

<meta
name="twitter:description"
content="Help center for solar installation, government subsidy and mandap decoration services."
/>

<meta name="twitter:image" content="/preview.jpg" />

{/* GEO SEO */}

<meta name="geo.region" content="IN-GJ" />
<meta name="geo.placename" content="Junagadh" />
<meta name="geo.position" content="21.0245;70.2212" />

</Helmet>

<div className="relative min-h-screen overflow-hidden">

{/* PARALLAX BACKGROUND */}

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{backgroundImage:`url(${helpBg})`}}
/>

{/* OVERLAY */}

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-indigo-50/90 backdrop-blur-[1px]" />


{/* HERO */}

<section className="relative py-28">

<motion.div
animate={{y:[0,-60,0]}}
transition={{duration:18,repeat:Infinity}}
className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full -top-40 -left-40"
/>

<motion.div
animate={{y:[0,60,0]}}
transition={{duration:20,repeat:Infinity}}
className="absolute w-[500px] h-[500px] bg-purple-400/20 blur-[150px] rounded-full bottom-0 right-0"
/>

<div className="container mx-auto px-4 text-center">

<div className="max-w-4xl mx-auto relative">

<div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-indigo-400/30 blur-xl"/>

<div className="relative rounded-[40px] border bg-white/70 backdrop-blur-xl p-14 shadow-xl">

<div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
<HelpCircle className="w-10 h-10 text-blue-600"/>
</div>

<h1 className="text-5xl md:text-6xl font-bold mb-6">
How Can We Help?
</h1>

<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
Find answers to common questions or contact our support team.
</p>

</div>

</div>

</div>

</section>


{/* CONTACT OPTIONS */}

<section className="py-20">

<div className="container mx-auto px-4 max-w-6xl">

<div className="grid md:grid-cols-3 gap-8">

<Card className="p-8 text-center rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-xl">

<Phone className="w-10 h-10 text-blue-500 mx-auto mb-4"/>

<h3 className="font-bold text-lg mb-2">Call Us</h3>

<p className="text-muted-foreground mb-3">
Mon–Sat, 9AM – 7PM
</p>

<a href="tel:+919876543210" className="text-blue-600 font-semibold">
+91 98765 43210
</a>

</Card>


<Card className="p-8 text-center rounded-2xl bg-gradient-to-br from-white to-green-50 shadow-xl">

<MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-4"/>

<h3 className="font-bold text-lg mb-2">WhatsApp</h3>

<p className="text-muted-foreground mb-3">
Quick responses
</p>

<a href="https://wa.me/919876543210" className="text-green-600 font-semibold">
Chat Now
</a>

</Card>


<Card className="p-8 text-center rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-xl">

<Mail className="w-10 h-10 text-purple-500 mx-auto mb-4"/>

<h3 className="font-bold text-lg mb-2">Email Us</h3>

<p className="text-muted-foreground mb-3">
24 hour response
</p>

<a href="mailto:info@shreeenterprise.com" className="text-purple-600 font-semibold">
Send Email
</a>

</Card>

</div>

</div>

</section>


{/* SOLAR FAQ */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-4xl">

<h2 className="text-4xl font-bold text-center mb-12">
Solar Energy FAQs
</h2>

<div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border">

<Accordion type="single" collapsible className="space-y-4">

{solarFaqs.map((faq,index)=>(

<AccordionItem
key={index}
value={`solar-${index}`}
className="border rounded-xl px-6"
>

<AccordionTrigger className="font-semibold">
{faq.question}
</AccordionTrigger>

<AccordionContent className="text-muted-foreground">
{faq.answer}
</AccordionContent>

</AccordionItem>

))}

</Accordion>

</div>

</div>

</section>


{/* MANDAP FAQ */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-4xl">

<h2 className="text-4xl font-bold text-center mb-12">
Mandap Decoration FAQs
</h2>

<div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border">

<Accordion type="single" collapsible className="space-y-4">

{mandapFaqs.map((faq,index)=>(

<AccordionItem
key={index}
value={`mandap-${index}`}
className="border rounded-xl px-6"
>

<AccordionTrigger className="font-semibold">
{faq.question}
</AccordionTrigger>

<AccordionContent className="text-muted-foreground">
{faq.answer}
</AccordionContent>

</AccordionItem>

))}

</Accordion>

</div>

</div>

</section>


{/* CTA */}

<section className="py-24">

<div className="container mx-auto px-4">

<div className="max-w-3xl mx-auto text-center p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">

<h2 className="text-4xl font-bold mb-4">
Still Have Questions?
</h2>

<p className="mb-8 text-white/90">
Our team is ready to help with solar or event decoration inquiries.
</p>

<Button
asChild
size="lg"
className="bg-white text-blue-700 hover:scale-105 transition"
>

<Link to="/contact?service=Support">
Contact Support Team
</Link>

</Button>

</div>

</div>

</section>

</div>
</>

)

}

export default Help