import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

import SectionWrapper from "@/components/ui/SectionWrapper"
import SectionHeader from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/badge"

import { apiPost } from "@/config/api"
import { toast } from "sonner"

import solarBg from "@/assets/solar-1.jpg"
import mandapBg from "@/assets/mandap-2.jpg"

export default function ContactSection() {

const [mapLocation,setMapLocation]=useState("Nagichana Junagadh")

const [formData,setFormData]=useState({
name:"",
phone:"",
email:"",
service:"",
kw:"",
budget:"",
eventType:"",
city:"",
eventDate:"",
message:""
})

/* AUTO LOCATION */

useEffect(()=>{

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition((pos)=>{

const lat=pos.coords.latitude
const lng=pos.coords.longitude
setMapLocation(`${lat},${lng}`)

})

}

},[])

/* FORM SUBMIT */

const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{

e.preventDefault()

const payload={
name:formData.name,
phone:formData.phone,
email:formData.email||null,
city:formData.city,
message:formData.message,
service:formData.service,
kw:formData.kw||null,
budget:formData.budget||null,
eventType:formData.eventType||null,
eventDate:formData.eventDate||null,
where_from:"home"
}

try{

await apiPost("/lead/submit",payload)

toast.success("Thank you! We'll call you back within 30 minutes.")

setFormData({
name:"",
phone:"",
email:"",
service:"",
kw:"",
budget:"",
eventType:"",
city:"",
eventDate:"",
message:""
})

}catch(err){

toast.error("Server not reachable. Please try again.")

}

}

/* WHATSAPP */

const handleWhatsApp=()=>{

window.open(
"https://wa.me/919898812423?text=Hi I'm interested in your services",
"_blank"
)

}

return(

<SectionWrapper id="contact" className="relative py-32 overflow-hidden">

{/* PREMIUM SPLIT BACKGROUND */}

<motion.div
animate={{scale:[1,1.03,1]}}
transition={{duration:20,repeat:Infinity}}
className="absolute inset-0 -z-10 overflow-hidden rounded-[80px] md:rounded-[140px] shadow-[0_30px_120px_rgba(0,0,0,0.15)]"
>

<div className="grid grid-cols-2 h-full">

<div
className="bg-cover bg-center opacity-15"
style={{backgroundImage:`url(${solarBg})`}}
/>

<div
className="bg-cover bg-center opacity-15"
style={{backgroundImage:`url(${mandapBg})`}}
/>

</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-indigo-50"/>

</motion.div>

{/* NOISE TEXTURE */}

<div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"/>

{/* FLOATING BLOBS */}

<motion.div
animate={{y:[0,-60,0]}}
transition={{duration:18,repeat:Infinity}}
className="absolute w-[520px] h-[520px] bg-blue-400/20 blur-[140px] rounded-full -top-40 -left-40"
/>

<motion.div
animate={{y:[0,60,0]}}
transition={{duration:20,repeat:Infinity}}
className="absolute w-[450px] h-[450px] bg-purple-400/20 blur-[140px] rounded-full bottom-[-150px] right-[-120px]"
/>

<div className="container mx-auto px-6 relative">

{/* HEADER */}

<div className="text-center mb-20">

<Badge className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
Contact Us
</Badge>

<SectionHeader
title="Get Started Today"
subtitle="Fill the form below and we'll call you back within 30 minutes"
/>

</div>

{/* FORM CARD */}

<motion.div whileHover={{y:-4}} className="relative group max-w-4xl mx-auto">

<div className="absolute -inset-[2px] rounded-[40px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-md animate-[spin_10s_linear_infinite]" />

<Card className="relative p-10 rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl">

<form onSubmit={handleSubmit} className="space-y-6">

<div className="grid md:grid-cols-2 gap-6">

<Input
required
value={formData.name}
onChange={(e)=>setFormData({...formData,name:e.target.value})}
placeholder="Your Name *"
/>

<Input
required
type="tel"
value={formData.phone}
onChange={(e)=>setFormData({...formData,phone:e.target.value})}
placeholder="Phone Number *"
/>

</div>

<Input
type="email"
value={formData.email}
onChange={(e)=>setFormData({...formData,email:e.target.value})}
placeholder="Email (optional)"
/>

{/* SERVICE */}

<select
required
value={formData.service}
onChange={(e)=>setFormData({...formData,service:e.target.value})}
className="w-full h-12 rounded-md border px-3"
>

<option value="">Select Service *</option>
<option value="Solar">Solar Energy Solutions</option>
<option value="Mandap">Mandap Decoration</option>
<option value="Both">Both Services</option>

</select>

{/* SOLAR FIELDS */}

{(formData.service==="Solar"||formData.service==="Both")&&(

<div className="grid md:grid-cols-2 gap-6">

<select
value={formData.kw}
onChange={(e)=>setFormData({...formData,kw:e.target.value})}
className="h-12 rounded-md border px-3"
>

<option value="">Solar Capacity</option>
<option>2.5 kW</option>
<option>3 kW</option>
<option>5 kW</option>

</select>

<select
value={formData.budget}
onChange={(e)=>setFormData({...formData,budget:e.target.value})}
className="h-12 rounded-md border px-3"
>

<option value="">Solar Budget</option>
<option>₹50k – ₹80k</option>
<option>₹80k – ₹1.2L</option>
<option>₹1.2L – ₹2L</option>
<option>₹2L+</option>

</select>

</div>

)}

{/* MANDAP FIELDS */}

{(formData.service==="Mandap"||formData.service==="Both")&&(

<div className="grid md:grid-cols-2 gap-6">

<select
value={formData.eventType}
onChange={(e)=>setFormData({...formData,eventType:e.target.value})}
className="h-12 rounded-md border px-3"
>

<option value="">Event Type</option>
<option>Wedding</option>
<option>Engagement</option>
<option>Garba</option>
<option>Reception</option>
<option>Birthday</option>
<option>Pooja</option>

</select>

<Input
type="date"
value={formData.eventDate}
onChange={(e)=>setFormData({...formData,eventDate:e.target.value})}
/>

</div>

)}

<Input
required
placeholder="City / Gaam *"
value={formData.city}
onChange={(e)=>setFormData({...formData,city:e.target.value})}
/>

<Textarea
required
rows={4}
placeholder="Describe your requirement..."
value={formData.message}
onChange={(e)=>setFormData({...formData,message:e.target.value})}
/>

{/* SUBMIT */}

<div className="flex justify-center">

<Button
type="submit"
size="lg"
className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-6 hover:scale-[1.03] transition"
>

<Phone className="mr-2 h-5 w-5"/>

Get Callback in 30 Minutes

</Button>

</div>

</form>

{/* WHATSAPP */}

<div className="mt-6 pt-6 border-t">

<Button
onClick={handleWhatsApp}
variant="outline"
className="w-full text-lg py-6 border-green-500 text-green-600 hover:bg-green-50"
>

<MessageCircle className="mr-2 h-5 w-5"/>

WhatsApp Quick Contact

</Button>

</div>

</Card>

</motion.div>

{/* CONTACT INFO */}

<div className="mt-16 grid md:grid-cols-3 gap-8 text-center">

{[
{
icon:MapPin,
line1:"Main Chowk, Nagichana",
line2:"Junagadh – 362240"
},
{
icon:Phone,
line1:"+91 9898812423",
line2:"+91 9974852378"
},
{
icon:Mail,
line1:"jagdishbhai.pithiya@gmail.com",
line2:"sarmanbhai.pithiya@gmail.com"
}
].map((item,i)=>{

const Icon=item.icon

return(

<motion.div
key={i}
whileHover={{y:-8}}
className="group relative"
>

<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-lg transition"/>

<div className="relative p-6 rounded-xl bg-white/70 backdrop-blur border shadow">

<Icon className="mx-auto mb-3 text-primary"/>

<p>{item.line1}</p>
<p>{item.line2}</p>

</div>

</motion.div>

)

})}

</div>

{/* MAP */}

<div className="mt-12 rounded-xl overflow-hidden shadow-lg">

<iframe
src={`https://maps.google.com/maps?q=${mapLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
width="100%"
height="320"
loading="lazy"
/>

</div>

</div>

{/* FLOATING QUICK CONTACT */}

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

<a href="tel:+919898812423" className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
<Phone size={18}/>
</a>

<a href="https://wa.me/919898812423" className="bg-green-500 text-white p-3 rounded-full shadow-lg">
<MessageCircle size={18}/>
</a>

<a href="https://maps.google.com/?q=Nagichana Junagadh" className="bg-purple-600 text-white p-3 rounded-full shadow-lg">
<MapPin size={18}/>
</a>

</div>

</SectionWrapper>

)

}