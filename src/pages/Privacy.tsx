import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

import {
Shield,
Lock,
Database,
Cookie,
Mail,
CheckCircle
} from "lucide-react"

import solarBg from "@/assets/hero-bg.jpg"

const Privacy = () => {

return(

<>

<Helmet>

<title>
Privacy Policy | Shree Enterprise Junagadh
</title>

<meta
name="description"
content="Privacy policy of Shree Enterprise describing how we collect, use and protect customer information."
/>

<link
rel="canonical"
href="https://shreeenterprise.live/privacy"
/>

</Helmet>

<div className="relative min-h-screen overflow-hidden">

{/* BACKGROUND */}

<div
className="fixed inset-0 -z-20 bg-cover bg-center"
style={{backgroundImage:`url(${solarBg})`}}
/>

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/80 to-indigo-50/90"/>

{/* HERO CARD (Same style as Mandap) */}

<section className="py-24">

<div className="max-w-5xl mx-auto px-4">

<div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/40 p-12 text-center">

<div className="inline-block px-5 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">

PRIVACY & DATA PROTECTION

</div>

<h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">

Privacy Policy

</h1>

<p className="text-lg text-slate-600 max-w-2xl mx-auto">

Your privacy is important to us. This page explains how Shree Enterprise
collects, uses and protects your information when you use our website
or request our solar and event decoration services.

</p>

</div>

</div>

</section>

{/* CONTENT */}

<section className="pb-28">

<div className="container mx-auto px-4 max-w-5xl space-y-10">

{/* INFO */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<Card className="p-8 rounded-2xl shadow-xl">

<div className="flex gap-3 mb-4">

<Database className="text-blue-600"/>

<h2 className="text-xl font-semibold">
Information We Collect
</h2>

</div>

<ul className="text-muted-foreground space-y-3">

<li>• Contact details such as name, phone number and email.</li>

<li>• Service enquiry information for solar and mandap projects.</li>

<li>• Website usage analytics.</li>

<li>• Device and browser information.</li>

</ul>

</Card>

</motion.div>

{/* USE */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<Card className="p-8 rounded-2xl shadow-xl">

<div className="flex gap-3 mb-4">

<Lock className="text-green-600"/>

<h2 className="text-xl font-semibold">
How We Use Your Information
</h2>

</div>

<ul className="text-muted-foreground space-y-3">

<li>• Respond to enquiries and provide quotations.</li>

<li>• Improve website performance.</li>

<li>• Provide project updates.</li>

<li>• Maintain service communication.</li>

</ul>

</Card>

</motion.div>

{/* COOKIES */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<Card className="p-8 rounded-2xl shadow-xl">

<div className="flex gap-3 mb-4">

<Cookie className="text-amber-500"/>

<h2 className="text-xl font-semibold">
Cookies & Analytics
</h2>

</div>

<p className="text-muted-foreground leading-relaxed">

We use cookies and analytics technologies such as Google Analytics and
Microsoft Clarity to understand visitor behaviour and improve service
quality. You can manage cookie preferences anytime.

</p>

</Card>

</motion.div>

{/* USER RIGHTS */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<Card className="p-8 rounded-2xl shadow-xl">

<div className="flex gap-3 mb-4">

<Shield className="text-purple-600"/>

<h2 className="text-xl font-semibold">
Your Privacy Rights
</h2>

</div>

<ul className="text-muted-foreground space-y-3">

<li>• Request correction of your information.</li>

<li>• Request deletion of your data.</li>

<li>• Request a copy of your information.</li>

<li>• Withdraw consent anytime.</li>

</ul>

</Card>

</motion.div>

{/* COMPLIANCE */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<Card className="p-8 rounded-2xl shadow-xl">

<h2 className="text-xl font-semibold mb-4">
Compliance & Security
</h2>

<p className="text-muted-foreground">

We follow industry privacy practices and apply reasonable technical
measures to protect customer information.

</p>

</Card>

</motion.div>

{/* TRUST BLOCK */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<div className="grid md:grid-cols-3 gap-6">

<Card className="p-6 text-center">

<CheckCircle className="mx-auto mb-3 text-green-600"/>

<h3 className="font-semibold">
Secure Website
</h3>

<p className="text-sm text-muted-foreground">
SSL protected infrastructure
</p>

</Card>

<Card className="p-6 text-center">

<CheckCircle className="mx-auto mb-3 text-blue-600"/>

<h3 className="font-semibold">
Protected Data
</h3>

<p className="text-sm text-muted-foreground">
Information stored securely
</p>

</Card>

<Card className="p-6 text-center">

<CheckCircle className="mx-auto mb-3 text-purple-600"/>

<h3 className="font-semibold">
Trusted Service
</h3>

<p className="text-sm text-muted-foreground">
Used only for business needs
</p>

</Card>

</div>

</motion.div>

{/* CONTACT */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
>

<Card className="p-8 rounded-2xl shadow-xl">

<div className="flex gap-3 mb-4">

<Mail className="text-cyan-600"/>

<h2 className="text-xl font-semibold">
Contact Information
</h2>

</div>

<div className="text-muted-foreground space-y-2">

<p>Email: jagdishbhai.pithiya@gmail.com</p>

<p>Phone: 9898812423</p>

<p>Location: Junagadh, Gujarat</p>

</div>

</Card>

</motion.div>

</div>

</section>

</div>

</>

)

}

export default Privacy
