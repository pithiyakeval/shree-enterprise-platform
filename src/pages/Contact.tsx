import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiPost } from "@/config/api";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
Phone,
Mail,
MapPin,
Clock,
MessageCircle
} from "lucide-react";

import { toast } from "sonner";

import contactBg from "@/assets/hero-bg.jpg";

const Contact = () => {

const [searchParams] = useSearchParams();

const [formData,setFormData]=useState({
name:"",
phone:"",
email:"",
service:searchParams.get("service") || "",
city:"",
eventType:searchParams.get("eventType") || "",
kw:searchParams.get("kw") || "",
budget:"",
eventDate:"",
message:""
})

const handleChange=(field:string,value:string)=>{
setFormData({...formData,[field]:value})
}

const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{

e.preventDefault()

const payload={
name:formData.name,
phone:formData.phone,
email:formData.email || null,
city:formData.city,
message:formData.message,
service:formData.service,

kw:formData.kw || null,
budget:formData.budget || null,

eventType:formData.eventType || null,
eventDate:formData.eventDate || null,

where_from:"contact"
}

try{

await apiPost("/lead/submit",payload)

toast.success("Message sent successfully!",{
description:"We'll contact you within 30 minutes."
})

setFormData({
name:"",
phone:"",
email:"",
service:"",
city:"",
eventType:"",
kw:"",
budget:"",
eventDate:"",
message:""
})

}catch(error){

console.error(error)

toast.error("Server not reachable. Please try again later.")

}

}

return(
    <>
    <Helmet>

<title>
Contact Shree Enterprise | Solar Installation & Mandap Decoration Junagadh
</title>

<meta
name="description"
content="Contact Shree Enterprise for solar panel installation and wedding mandap decoration services in Junagadh, Mangrol and nearby villages. Call or WhatsApp for free consultation."
/>

<meta
name="keywords"
content="solar installation Junagadh contact, mandap decoration Junagadh contact, solar company Mangrol, event decorator Junagadh"
/>

<link
rel="canonical"
href="https://shreeenterprise.live/contact"
/>

{/* OpenGraph */}

<meta property="og:title" content="Contact Shree Enterprise Solar & Mandap Services" />

<meta
property="og:description"
content="Get in touch with Shree Enterprise for solar panel installation and mandap decoration services."
/>

<meta property="og:type" content="website" />

<meta property="og:url" content="https://shreeenterprise.live/contact" />

<meta property="og:image" content="/preview.jpg" />

{/* Twitter */}

<meta name="twitter:card" content="summary_large_image" />

<meta
name="twitter:title"
content="Contact Shree Enterprise Solar & Mandap Services"
/>

<meta
name="twitter:description"
content="Contact us for solar installation and wedding mandap decoration services."
/>

<meta
name="twitter:image"
content="/preview.jpg"
/>

{/* GEO LOCATION */}

<meta name="geo.region" content="IN-GJ" />
<meta name="geo.placename" content="Junagadh" />
<meta name="geo.position" content="21.0245;70.2212" />

{/* Structured Data */}

<script type="application/ld+json">
{`
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Shree Enterprise",
"image": "https://shreeenterprise.live/logo.png",
"telephone": "+91-9898812423",
"email": "jagdishbhai.pithiya@gmail.com",
"address": {
"@type": "PostalAddress",
"streetAddress": "Main Chowk, Nagichana",
"addressLocality": "Mangrol",
"addressRegion": "Gujarat",
"postalCode": "362240",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": "21.0245",
"longitude": "70.2212"
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
],
"opens": "09:00",
"closes": "19:00"
}
],
"areaServed": {
"@type": "Place",
"name": "Junagadh District"
},
"serviceType": [
"Solar Panel Installation",
"Solar Maintenance",
"Wedding Mandap Decoration",
"Event Decoration"
]
}
`}
</script>

</Helmet>

<div className="relative min-h-screen overflow-hidden">

{/* PARALLAX BACKGROUND */}

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{backgroundImage:`url(${contactBg})`}}
/>

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

<h1 className="text-5xl md:text-6xl font-bold mb-6">
Contact Us
</h1>

<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
Get in touch for solar installations, mandap decoration, or event setup
</p>

</div>

</div>

</div>

</section>


{/* CONTACT INFO */}

<section className="py-20">

<div className="container mx-auto px-4 max-w-6xl">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<Card className="p-6 text-center bg-gradient-to-br from-white to-blue-50 shadow-xl">
<Phone className="w-8 h-8 text-blue-600 mx-auto mb-3"/>
<h3 className="font-semibold mb-2">Phone</h3>
<p className="text-muted-foreground text-sm">
<a href="tel:+919898812423">+91 98988 12423</a><br/>
<a href="tel:+919974852378">+91 99748 52378</a>
</p>
</Card>

<Card className="p-6 text-center bg-gradient-to-br from-white to-purple-50 shadow-xl">
<Mail className="w-8 h-8 text-purple-600 mx-auto mb-3"/>
<h3 className="font-semibold mb-2">Email</h3>
<a href="mailto:jagdishbhai.pithiya@gmail.com" className="text-muted-foreground">
jagdishbhai.pithiya@gmail.com
</a>
</Card>

<Card className="p-6 text-center bg-gradient-to-br from-white to-green-50 shadow-xl">
<MapPin className="w-8 h-8 text-green-600 mx-auto mb-3"/>
<h3 className="font-semibold mb-2">Location</h3>
<p className="text-muted-foreground text-sm">
Main Chowk, Nagichana<br/>
Mangrol, Junagadh
</p>
</Card>

<Card className="p-6 text-center bg-gradient-to-br from-white to-yellow-50 shadow-xl">
<Clock className="w-8 h-8 text-yellow-600 mx-auto mb-3"/>
<h3 className="font-semibold mb-2">Working Hours</h3>
<p className="text-muted-foreground text-sm">
Mon–Sat: 9 AM – 7 PM<br/>
Sunday: By Appointment
</p>
</Card>

</div>

</div>

</section>


{/* CONTACT FORM */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-4xl">

<div className="relative">

<div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 blur-xl rounded-3xl"/>

<Card className="relative p-10 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl">

<h2 className="text-3xl font-bold text-center mb-8">
Send Us a Message
</h2>

<form onSubmit={handleSubmit} className="space-y-6">

<div className="grid md:grid-cols-2 gap-6">

<Input
required
placeholder="Your Name *"
value={formData.name}
onChange={(e)=>handleChange("name",e.target.value)}
/>

<Input
required
placeholder="Phone Number *"
value={formData.phone}
onChange={(e)=>handleChange("phone",e.target.value)}
/>

</div>

<Input
placeholder="Email (optional)"
value={formData.email}
onChange={(e)=>handleChange("email",e.target.value)}
/>


<select
required
value={formData.service}
onChange={(e)=>handleChange("service",e.target.value)}
className="w-full px-3 py-2 rounded-md border"
>

<option value="">Select Service *</option>
<option value="Solar">Solar Installation</option>
<option value="Mandap">Mandap Decoration</option>
<option value="Both">Both Services</option>

</select>


{/* Solar fields */}

{(formData.service==="Solar" || formData.service==="Both") && (

<div className="space-y-4">

<select
value={formData.kw}
onChange={(e)=>handleChange("kw",e.target.value)}
className="w-full px-3 py-2 rounded-md border"
>

<option value="">Solar Capacity</option>
<option value="2.5 kW">2.5 kW</option>
<option value="3 kW">3 kW</option>
<option value="5 kW">5 kW</option>

</select>

<select
value={formData.budget}
onChange={(e)=>handleChange("budget",e.target.value)}
className="w-full px-3 py-2 rounded-md border"
>

<option value="">Solar Budget</option>
<option>₹50k – ₹80k</option>
<option>₹80k – ₹1.2L</option>
<option>₹1.2L – ₹2L</option>
<option>₹2L+</option>

</select>

</div>

)}

{/* Mandap fields */}

{(formData.service==="Mandap" || formData.service==="Both") && (

<div className="space-y-4">

<select
value={formData.eventType}
onChange={(e)=>handleChange("eventType",e.target.value)}
className="w-full px-3 py-2 rounded-md border"
>

<option value="">Event Type</option>
<option>Wedding</option>
<option>Engagement</option>
<option>Garba</option>
<option>Birthday</option>
<option>Pooja</option>

</select>

</div>

)}

<Input
required
placeholder="City / Gaam *"
value={formData.city}
onChange={(e)=>handleChange("city",e.target.value)}
/>

<Input
type="date"
value={formData.eventDate}
onChange={(e)=>handleChange("eventDate",e.target.value)}
/>

<Textarea
required
placeholder="Describe your requirement..."
value={formData.message}
onChange={(e)=>handleChange("message",e.target.value)}
/>

<Button type="submit" className="w-full py-6 text-lg">
Send Message
</Button>


<div className="grid gap-3 pt-4">

<Button
variant="outline"
onClick={()=>window.open("https://wa.me/919898812423")}
>

<MessageCircle className="mr-2"/>
WhatsApp 98988 12423

</Button>

<Button
variant="outline"
onClick={()=>window.open("https://wa.me/919974852378")}
>

<MessageCircle className="mr-2"/>
WhatsApp 99748 52378

</Button>

</div>

</form>

</Card>

</div>

</div>

</section>


{/* MAP */}

{/* MAP */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-5xl text-center">

<h2 className="text-4xl font-bold mb-4">
Visit Our Office
</h2>

<p className="text-muted-foreground mb-10">
Main Chowk, Nagichana, Mangrol, Junagadh
</p>

<div className="relative">

{/* Glow background */}

<div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 blur-2xl rounded-[40px]" />

{/* Map Card */}

<motion.div
whileHover={{ scale: 1.01 }}
className="relative overflow-hidden rounded-[32px] border bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
></motion.div>

<iframe
src="https://maps.google.com/maps?q=Nagichana%20Junagadh&t=&z=13&ie=UTF8&iwloc=&output=embed"
title="Shree Enterprise Location Map"
className="w-full h-[420px] border-0"
/>

</div>

</div>


</section>

{/* GOOGLE REVIEWS */}

{/* GOOGLE REVIEWS */}

<section className="py-24">

<div className="container mx-auto px-4 max-w-6xl text-center">

<h2 className="text-4xl font-bold mb-4">
What Our Customers Say
</h2>

<p className="text-muted-foreground mb-12">
Real feedback from happy families across Junagadh & nearby villages
</p>

<div className="relative">

{/* glow background */}

<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-pink-400/20 blur-3xl rounded-[40px]" />

<div className="relative grid md:grid-cols-3 gap-8 p-10 rounded-[36px] border bg-white/70 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.18)]">


{/* REVIEW 1 */}

<motion.div whileHover={{y:-8,scale:1.03}}>

<Card className="p-6 text-left rounded-2xl bg-gradient-to-br from-white to-yellow-50 shadow-lg">

<div className="flex items-center mb-3">

<img
src="https://randomuser.me/api/portraits/men/75.jpg"
className="w-10 h-10 rounded-full mr-3"
/>

<div>
<p className="font-semibold">Jethabhai Pithiya</p>
<p className="text-xs text-muted-foreground">Nagichana</p>
</div>

</div>

<div className="flex mb-3 text-yellow-500">
★★★★★
</div>

<p className="text-sm text-muted-foreground">
Solar panels installed very quickly and subsidy paperwork handled properly.
Electricity bill reduced a lot.
</p>

</Card>

</motion.div>


{/* REVIEW 2 */}

<motion.div whileHover={{y:-8,scale:1.03}}>

<Card className="p-6 text-left rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-lg">

<div className="flex items-center mb-3">

<img
src="https://randomuser.me/api/portraits/men/62.jpg"
className="w-10 h-10 rounded-full mr-3"
/>

<div>
<p className="font-semibold">Devjibhai Ahir</p>
<p className="text-xs text-muted-foreground">Mangrol</p>
</div>

</div>

<div className="flex mb-3 text-yellow-500">
★★★★★
</div>

<p className="text-sm text-muted-foreground">
Mandap decoration for my daughter's wedding was beautiful.
Everything was arranged on time and guests loved it.
</p>

</Card>

</motion.div>


{/* REVIEW 3 */}

<motion.div whileHover={{y:-8,scale:1.03}}>

<Card className="p-6 text-left rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-lg">

<div className="flex items-center mb-3">

<img
src="https://randomuser.me/api/portraits/men/68.jpg"
className="w-10 h-10 rounded-full mr-3"
/>

<div>
<p className="font-semibold">Rameshbhai Solanki</p>
<p className="text-xs text-muted-foreground">Talala</p>
</div>

</div>

<div className="flex mb-3 text-yellow-500">
★★★★★
</div>

<p className="text-sm text-muted-foreground">
Very professional solar installation service. System working perfectly
since last year.
</p>

</Card>

</motion.div>

</div>

</div>


{/* GOOGLE BUTTON */}

<div className="mt-12">

<Button
size="lg"
className="px-8 py-6 text-lg"
onClick={()=>window.open("https://g.page/r/CZmU0BQtHjSuEAE/review")}
>

View More Reviews on Google

</Button>

</div>

</div>

</section>

</div>
</>

)

}

export default Contact