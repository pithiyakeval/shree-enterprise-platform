import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import { Button } from "@/components/ui/button"

import {
Menu,
X,
Sparkles,
ChevronDown
} from "lucide-react"

import {
motion,
AnimatePresence,
useScroll,
useSpring
} from "framer-motion"

import { cn } from "@/lib/utils"

import logoHorizontal from "@/assets/logo-horizontal.png"

const Navbar = () => {

const [isOpen,setIsOpen]=useState(false)
const [scrolled,setScrolled]=useState(false)

const location = useLocation()

/* Scroll progress */

const {scrollYProgress}=useScroll()

const scaleX = useSpring(scrollYProgress,{
stiffness:100,
damping:30,
restDelta:0.001
})

/* Scroll background */

useEffect(()=>{

const handleScroll=()=>setScrolled(window.scrollY>20)

window.addEventListener("scroll",handleScroll)

return()=>window.removeEventListener("scroll",handleScroll)

},[])

/* Active checker */

const isActive=(path:string)=>location.pathname===path

const isSolarActive =
location.pathname.includes("solar")

const isMandapActive =
location.pathname.includes("mandap")

return(
<>

{/* NAVBAR */}

<nav
className={cn(
"relative sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl",
scrolled ? "bg-white/80 border-b shadow-lg" : "bg-white/60"
)}
>

{/* SCROLL BAR */}

<motion.div
className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 origin-left"
style={{scaleX}}
/>

<div className="container mx-auto px-4">

<div className="flex h-16 items-center justify-between">

{/* LOGO */}

<Link to="/" className="flex items-center gap-3 group">

<motion.img
src={logoHorizontal}
alt="Shree Enterprise"
className="h-9 md:h-10 object-contain"
whileHover={{scale:1.05}}
/>

<span className="text-lg font-bold tracking-tight group-hover:text-blue-600 transition">
Shree Enterprise
</span>

</Link>


{/* DESKTOP NAV */}

<div className="hidden md:flex items-center gap-3">

{/* HOME */}

<Link
to="/"
className={cn(
"relative px-4 py-2 rounded-lg text-sm font-medium",
isActive("/") ? "text-blue-600" : "hover:text-blue-600"
)}
>

Home

{isActive("/") && (

<motion.span
layoutId="navbar-indicator"
className="absolute left-2 right-2 -bottom-1 h-[2px] bg-blue-600 rounded"
/>

)}

</Link>


{/* ABOUT */}

<Link
to="/about"
className={cn(
"relative px-4 py-2 rounded-lg text-sm font-medium",
isActive("/about") ? "text-blue-600" : "hover:text-blue-600"
)}
>

About

{isActive("/about") && (
<motion.span
layoutId="navbar-indicator"
className="absolute left-2 right-2 -bottom-1 h-[2px] bg-blue-600 rounded"
/>
)}

</Link>


{/* SOLAR DROPDOWN */}

<div className="relative group">

<div
className={cn(
"flex items-center gap-1 px-4 py-2 text-sm font-medium cursor-pointer",
isSolarActive ? "text-blue-600" : "hover:text-blue-600"
)}
>

Solar

<ChevronDown size={16}/>

</div>

<div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

<div className="bg-white rounded-xl shadow-xl border w-56 p-2">

<Link
to="/solar-projects"
className="block px-4 py-2 rounded-lg hover:bg-muted"
>
Solar Services
</Link>

<Link
to="/solar-projects"
className="block px-4 py-2 rounded-lg hover:bg-muted"
>
Solar Projects
</Link>

</div>

</div>

</div>

{/* MANDAP */}

<div className="relative group">

<div
className={cn(
"flex items-center gap-1 px-4 py-2 text-sm font-medium cursor-pointer",
isMandapActive ? "text-blue-600" : "hover:text-blue-600"
)}
>

Mandap

<ChevronDown size={16}/>

</div>

<div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

<div className="bg-white rounded-xl shadow-xl border w-56 p-2">

<Link
to="/mandap-services"
className="block px-4 py-2 rounded-lg hover:bg-muted"
>
Mandap Services
</Link>

<Link
to="/mandap-projects"
className="block px-4 py-2 rounded-lg hover:bg-muted"
>
Mandap Projects
</Link>

</div>

</div>

</div>


{/* HELP */}

<Link
to="/help"
className={cn(
"relative px-4 py-2 rounded-lg text-sm font-medium",
isActive("/help") ? "text-blue-600" : "hover:text-blue-600"
)}
>

Help

</Link>


{/* CONTACT */}

<Link
to="/contact"
className={cn(
"relative px-4 py-2 rounded-lg text-sm font-medium",
isActive("/contact") ? "text-blue-600" : "hover:text-blue-600"
)}
>

Contact

</Link>

</div>


{/* RIGHT SIDE */}

<div className="hidden md:flex items-center gap-4">

<span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">

<Sparkles size={14}/>
Govt Approved Vendor

</span>

<Button
asChild
className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow hover:scale-105 transition"
>

<Link to="/contact">
Get Quote
</Link>

</Button>

</div>


{/* MOBILE BUTTON */}

<button
onClick={()=>setIsOpen(true)}
className="md:hidden p-2"
>

<Menu size={22}/>

</button>

</div>

</div>

</nav>


{/* MOBILE MENU */}

<AnimatePresence>

{isOpen &&(

<>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={()=>setIsOpen(false)}
className="fixed inset-0 bg-black/40 z-40"
/>

<motion.div
initial={{y:"100%"}}
animate={{y:0}}
exit={{y:"100%"}}
transition={{duration:0.35}}
className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl"
>

<div className="flex justify-between px-6 py-4 border-b">

<span className="font-semibold text-lg">

Menu

</span>

<button onClick={()=>setIsOpen(false)}>
<X/>
</button>

</div>

<div className="flex flex-col">

{[
["Home","/"],
["About","/about"],
["Solar Services","/solar-services"],
["Solar Projects","/solar-projects"],
["Mandap Services","/mandap-services"],
["Mandap Projects","/mandap-projects"],
["Help","/help"],
["Contact","/contact"]
].map(([name,path])=>(

<Link
key={path}
to={path}
onClick={()=>setIsOpen(false)}
className={cn(
"px-6 py-4 text-base font-medium",
location.pathname===path
? "bg-blue-600 text-white"
: "hover:bg-muted"
)}
>

{name}

</Link>

))}

</div>

<div className="p-6 border-t">

<Button
asChild
className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-6"
>

<Link to="/contact" onClick={()=>setIsOpen(false)}>
Get Quote
</Link>

</Button>

</div>

</motion.div>

</>

)}

</AnimatePresence>

</>
)

}

export default Navbar