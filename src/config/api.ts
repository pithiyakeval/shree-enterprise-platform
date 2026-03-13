// src/config/api.ts

// Use same env as axios api.ts
export const API_BASE =
import.meta.env.VITE_API_BASE ||
"https://shree-enterprise-backend-eqpg.onrender.com";


// POST helper
export async function apiPost<T>(
url:string,
body:any,
token?:string
):Promise<T>{

const res=await fetch(`${API_BASE}/api${url}`,{

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

msg=data?.detail || data?.error || msg;

}catch{}

throw new Error(msg);

}

return res.json();

}



// GET helper
export async function apiGet<T>(
url:string,
token?:string
):Promise<T>{

const res=await fetch(`${API_BASE}/api${url}`,{

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

msg=data?.detail || data?.error || msg;

}catch{}

throw new Error(msg);

}

return res.json();

}