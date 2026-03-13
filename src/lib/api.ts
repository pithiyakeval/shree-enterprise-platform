import axios from "axios";
import { getToken, clearToken } from "./auth";

const BASE =
  import.meta.env.VITE_API_BASE ||
  "https://shree-enterprise-backend-eqpg.onrender.com";

export const api = axios.create({

  baseURL:`${BASE}/api`,

  timeout:15000,

  headers:{
    "Content-Type":"application/json"
  }

});


// REQUEST INTERCEPTOR
api.interceptors.request.use(

(config)=>{

  const token=getToken();

  if(token){

    config.headers.Authorization =
    `Bearer ${token}`;

  }

  return config;

},

(error)=>Promise.reject(error)

);


// RESPONSE INTERCEPTOR
api.interceptors.response.use(

(response)=>response,

(error)=>{

  console.log(
    "API ERROR:",
    error.response?.data ||
    error.message
  );

  // TOKEN EXPIRED OR INVALID
  if(error.response?.status===401){

    clearToken();

    // prevent infinite redirect loop
    if(!window.location.pathname.includes("/admin/login")){

      window.location.href="/admin/login";

    }

  }

  // SERVER ERROR HANDLING
  if(error.response?.status===500){

    console.error("Server error");

  }

  // NETWORK ERROR
  if(!error.response){

    console.error("Network error");

  }

  return Promise.reject(error);

}

);

export default api;