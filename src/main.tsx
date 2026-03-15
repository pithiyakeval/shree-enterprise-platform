import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";


// ================= GOOGLE ANALYTICS =================

const GA_ID = import.meta.env.VITE_GA_ID;

if(GA_ID){

const script=document.createElement("script");

script.async=true;

script.src=
`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

document.head.appendChild(script);


window.dataLayer=
window.dataLayer || [];


function gtag(...args:any[]){

window.dataLayer.push(args);

}

window.gtag=gtag;


gtag('js',new Date());

gtag('config',GA_ID,{

page_path:window.location.pathname

});

}


// ================= APP =================

createRoot(
document.getElementById("root")!
).render(

<HelmetProvider>

<App/>

</HelmetProvider>

);