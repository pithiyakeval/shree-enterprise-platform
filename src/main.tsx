import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import CookieConsent, { getStoredConsent } from "./components/CookieConsent.tsx";

/* ================================
   GLOBAL TYPES (Production safety)
================================ */

declare global {
  interface Window {
    dataLayer:any[];
    gtag:any;
    clarity:any;
  }
}

/* ================================
   ENV VARIABLES
================================ */

const GA_ID = import.meta.env.VITE_GA_ID?.trim();
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

/* ================================
   GOOGLE ANALYTICS SETUP
   Consent Mode v2 (Production)
================================ */

if (GA_ID) {

  // Load GA script
  const script=document.createElement("script");

  script.async=true;

  script.src=
  `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

  document.head.appendChild(script);

  // Data layer
  window.dataLayer=window.dataLayer || [];

  function gtag(...args:any[]){
    window.dataLayer.push(args);
  }

  window.gtag=gtag;

  // Default consent denied (GDPR safe)
  gtag("consent","default",{

    analytics_storage:"denied",

    ad_storage:"denied",

    ad_user_data:"denied",

    ad_personalization:"denied",

    wait_for_update:500

  });

  gtag("js",new Date());

  gtag("config",GA_ID,{
  anonymize_ip:true,
  send_page_view:true
  });

  // Restore stored consent
  const stored=getStoredConsent();

  if(stored?.prefs?.analytics){

    gtag("consent","update",{
      analytics_storage:"granted",
      ad_storage:"granted"
    });

    }

    gtag("config",GA_ID,{

      page_path:window.location.pathname,

      anonymize_ip:true

    });

  }



/* ================================
   MICROSOFT CLARITY (Behavior analytics)
================================ */

if(CLARITY_ID && typeof window !== "undefined"){

 const script=document.createElement("script");

 script.innerHTML=`
 (function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){
   (c[a].q=c[a].q||[]).push(arguments)
  };

  t=l.createElement(r);

  t.async=1;

  t.src="https://www.clarity.ms/tag/"+i;

  y=l.getElementsByTagName(r)[0];

  y.parentNode.insertBefore(t,y);

 })(window,document,"clarity","script","${CLARITY_ID}");
 `;

 document.head.appendChild(script);

}

/* ================================
   APP RENDER
================================ */

createRoot(
 document.getElementById("root")!
).render(

 <HelmetProvider>

  <App/>

  

 </HelmetProvider>

);