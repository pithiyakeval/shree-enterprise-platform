export const trackEvent=(

 event:string,
 category:string,
 label:string

)=>{

 if(!window.gtag) return;

 window.gtag('event',event,{

  event_category:category,

  event_label:label

 });

};