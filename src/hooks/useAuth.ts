import { useState, useEffect } from "react";
import api from "@/lib/api";

import {
setToken,
clearToken,
getToken
} from "@/lib/auth";


export const useAuth = () => {

const [user,setUser]=useState<any>(null);

const [loading,setLoading]=useState(true);


/* ================= AUTO LOGIN ================= */

useEffect(()=>{

const token=getToken();

if(token){

setUser({

email:"admin"

});

}

setLoading(false);

},[]);



/* ================= RETRY HELPER ================= */

const wait=(ms:number)=>
new Promise(r=>setTimeout(r,ms));


const retryLogin=async(

email:string,
password:string

)=>{

for(let i=0;i<2;i++){

try{

const res=
await api.post(

"/admin/login",

{
email,
password
}

);

return res;

}catch(e:any){

// Cold start retry
if(!e.response){

await wait(5000);

continue;

}

throw e;

}

}

return null;

};



/* ================= LOGIN ================= */

const login=async(

email:string,
password:string

)=>{

try{

// if already logged in skip login
const existingToken=getToken();

if(existingToken){

setUser({email});

return true;

}


// clear old
clearToken();


let res=
await retryLogin(

email,
password

);


if(!res){

return false;

}


const token=
res.data?.access_token;


if(!token){

return false;

}


setToken(token);

setUser({

email

});

return true;


}catch(err:any){

console.log(

"LOGIN ERROR:",

err.response?.data ||
err.message

);


// Cold start fallback message
if(err.code==="ECONNABORTED"){

console.log(

"Server waking up"

);

}

return false;

}

};



/* ================= LOGOUT ================= */

const logout=()=>{

clearToken();

setUser(null);

window.location.href=
"/admin/login";

};



return{

user,

login,

logout,

loading,

isAuthenticated:!!user

};

};