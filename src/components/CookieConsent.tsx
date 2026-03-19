import { useState,useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";

import {
Cookie,
Shield,
BarChart3,
Megaphone,
Settings
} from "lucide-react";

const CONSENT_KEY="cookie_consent_v2";

export type ConsentPrefs={

 analytics:boolean;

 marketing:boolean;

 preferences:boolean;

};

export function getStoredConsent(){

 try{

  const raw=localStorage.getItem(CONSENT_KEY);

  if(!raw) return null;

  return JSON.parse(raw);

 }

 catch{

  return null;

 }

}

function saveConsent(prefs:ConsentPrefs){

 localStorage.setItem(

  CONSENT_KEY,

  JSON.stringify({

   prefs,

   timestamp:Date.now()

  })

 );

}

function updateGA(prefs:ConsentPrefs,GA_ID?:string){

 if(!window.gtag) return;
 console.log("GA enabled")

 window.gtag("consent","update",{

  analytics_storage:
   prefs.analytics
    ?"granted"
    :"denied",

  ad_storage:
   prefs.marketing
    ?"granted"
    :"denied"

 });

 if(prefs.analytics && GA_ID){

  window.gtag(

   "config",

   GA_ID,

   {
    page_path:window.location.pathname,
    anonymize_ip:true
   }

  );

 }

}

interface Props{

 GA_ID?:string;

 companyName?:string;

 privacyPolicyUrl?:string;

 cookiePolicyUrl?:string;

}

export default function CookieConsent({

 GA_ID,

 companyName="Shree Enterprise",

 privacyPolicyUrl="/privacy",

 cookiePolicyUrl="/cookies"

}:Props){

const [visible,setVisible]=useState(false);

const [settings,setSettings]=useState(false);

const [compact,setCompact]=useState(false);

const [prefs,setPrefs]=useState<ConsentPrefs>({

 analytics:true,

 marketing:false,

 preferences:true

});

useEffect(()=>{

 const stored=getStoredConsent();

 if(stored){

  updateGA(stored.prefs,GA_ID);

  setCompact(true);

 }

 else{

  setVisible(true);

 }

},[]);

function acceptAll(){

 const all={

  analytics:true,

  marketing:true,

  preferences:true

 };

 saveConsent(all);

 updateGA(all,GA_ID);

 setVisible(false);

 setCompact(true);

}

function rejectAll(){

 const none={

  analytics:false,

  marketing:false,

  preferences:false

 };

 saveConsent(none);

 updateGA(none,GA_ID);

 setVisible(false);

 setCompact(true);

}

function save(){

 saveConsent(prefs);

 updateGA(prefs,GA_ID);

 setVisible(false);

 setCompact(true);

}

function toggle(key:keyof ConsentPrefs){

 setPrefs(prev=>({

  ...prev,

  [key]:!prev[key]

 }));

}

return(

<>

{/* FLOATING COOKIE SETTINGS BUTTON */}

<AnimatePresence>


</AnimatePresence>

{/* MAIN MODAL */}

<AnimatePresence>

{visible &&(

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

className="fixed inset-0 z-[99998]

bg-black/60 backdrop-blur-md

flex items-end justify-center">

<motion.div

initial={{y:window.innerWidth<768?200:80,scale:.96,opacity:0}}

animate={{y:0,scale:1,opacity:1}}

exit={{y:40,opacity:0}}

transition={{duration:.35}}

className="

w-full 

max-w-xl 

mb-0 md:mb-6

">

<div className="

rounded-t-3xl md:rounded-2xl

bg-gradient-to-br 

from-[#020617]

via-[#020617]

to-[#0f172a]

border border-white/10

shadow-[0_30px_80px_rgba(0,0,0,.7)]

backdrop-blur-xl

">

<div className="p-6 md:p-7 pt-5 md:pt-7">

{/* MOBILE HANDLE */}

<div className="md:hidden flex justify-center mb-4">

<div className="w-12 h-1.5 rounded-full bg-white/20"/>

</div>

{!settings &&(

<>

{/* HEADER */}

<div className="flex items-center gap-4 mb-4">

<div className="w-12 h-12 rounded-xl

bg-gradient-to-br 

from-[#f59e0b] 

to-[#f97316]

flex items-center justify-center">

<Cookie size={22} color="white"/>

</div>

<div>

<div className="text-white text-lg font-semibold">

Your Privacy Matters

</div>

<div className="text-xs text-gray-400">

Enterprise-grade privacy controls • {companyName}

</div>

</div>

</div>

{/* PREMIUM TEXT */}

<p className="text-sm text-gray-300 leading-relaxed mb-6">

We use cookies and similar technologies to enhance
security, improve performance, analyse usage trends
and deliver a reliable enterprise-grade experience.

You can manage your preferences anytime in our{" "}

<a
href={privacyPolicyUrl}
className="text-amber-400 hover:text-amber-300">

Privacy Policy

</a>

.

</p>

{/* BUTTONS */}

<div className="space-y-3">

<button

onClick={acceptAll}

className="w-full py-4 md:py-3 rounded-xl

bg-gradient-to-r

from-[#2563eb] to-[#7c3aed]

font-semibold text-white

shadow-lg

hover:scale-[1.02]

transition">

Accept All

</button>

<div className="flex gap-3">

<button

onClick={rejectAll}

className="flex-1 py-4 md:py-3 rounded-xl

border border-white/10

text-gray-300

hover:bg-white/5 transition">

Reject

</button>

<button

onClick={()=>setSettings(true)}

className="flex-1 py-4 md:py-3 rounded-xl

border border-white/10

text-gray-300

hover:bg-white/5 transition">

Customize

</button>

</div>

</div>

</>

)}

{settings &&(

<>

<div className="flex items-center gap-3 mb-5">

<button

onClick={()=>setSettings(false)}

className="text-gray-400 hover:text-white">

←

</button>

<div className="text-white font-semibold">

Privacy Preferences

</div>

</div>

{[

{

key:"analytics",

title:"Analytics",

icon:<BarChart3 size={18}/>,

desc:"Usage insights & performance metrics"

},

{

key:"marketing",

title:"Marketing",

icon:<Megaphone size={18}/>,

desc:"Personalised promotions"

},

{

key:"preferences",

title:"Preferences",

icon:<Shield size={18}/>,

desc:"Remember your settings"

}

].map((item:any)=>(

<div

key={item.key}

className="flex items-center justify-between

py-5 md:py-4 border-b border-white/5">

<div className="flex items-center gap-3">

<div className="text-amber-400">

{item.icon}

</div>

<div>

<div className="text-white text-sm font-medium">

{item.title}

</div>

<div className="text-xs text-gray-400">

{item.desc}

</div>

</div>

</div>

<button

onClick={()=>toggle(item.key)}

className={`

relative w-12 h-6 rounded-full transition

${prefs[item.key]

?"bg-gradient-to-r from-[#2563eb] to-[#7c3aed]"

:"bg-gray-600"}

`}>

<motion.div

layout

className="w-5 h-5 bg-white rounded-full mt-0.5 ml-0.5"

animate={{x:prefs[item.key]?22:0}}

/>

</button>

</div>

))}

{/* ESSENTIAL */}

<div className="flex items-center justify-between py-5 md:py-4">

<div className="flex items-center gap-3">

<Shield size={18} className="text-green-400"/>

<div>

<div className="text-white text-sm">

Essential

</div>

<div className="text-xs text-gray-400">

Required for security & functionality

</div>

</div>

</div>

<div className="w-12 h-6 rounded-full bg-green-500"/>

</div>

<button

onClick={save}

className="w-full mt-5 py-4 md:py-3 rounded-xl

bg-gradient-to-r

from-[#f59e0b] to-[#f97316]

text-white font-semibold

shadow-lg

hover:scale-[1.02]

transition">

Save Preferences

</button>

</>

)}

</div>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</>

);

}