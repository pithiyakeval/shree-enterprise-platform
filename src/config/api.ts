// src/config/api.ts

export const API_BASE =
import.meta.env.VITE_API_BASE ||
"https://shree-enterprise-backend-eqpg.onrender.com";


function normalizeUrl(url:string){

if(url.startsWith("/api")){
return url;
}

return `/api${url}`;

}


// POST
export async function apiPost<T>(
url:string,
body:any,
token?:string
):Promise<T>{

const res = await fetch(

`${API_BASE}${normalizeUrl(url)}`,

{
method:"POST",

headers:{
"Content-Type":"application/json",

...(token && {
Authorization:`Bearer ${token}`
})

},

body:JSON.stringify(body)

});

if(!res.ok){

let msg="API Error";

try{

const data=await res.json();

msg=
data?.detail ||
data?.error ||
msg;

}catch{}

throw new Error(msg);

}

return res.json();

}


// GET
export async function apiGet<T>(
url:string,
token?:string
):Promise<T>{

const res = await fetch(

`${API_BASE}${normalizeUrl(url)}`,

{
headers:{
...(token && {
Authorization:`Bearer ${token}`
})
}

});

if(!res.ok){

let msg="API Error";

try{

const data=await res.json();

msg=
data?.detail ||
data?.error ||
msg;

}catch{}

throw new Error(msg);

}

return res.json();

}
