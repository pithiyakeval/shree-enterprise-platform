import axios from "axios";
import { getToken, clearToken } from "./auth";

const BASE =
  import.meta.env.VITE_API_BASE ||
  "https://shree-enterprise-backend-eqpg.onrender.com";

export const api = axios.create({

  baseURL: `${BASE}/api`,

  // Render cold start protection
  timeout: 30000,

  headers:{
    "Content-Type":"application/json",
    Accept:"application/json"
  },

  // IMPORTANT (prevents CORS credential issues)
  withCredentials:false

});


// ==========================================================
// REQUEST INTERCEPTOR
// ==========================================================

api.interceptors.request.use(

(config)=>{

  const token = getToken();

  if(token){

    config.headers.Authorization =
    `Bearer ${token}`;

  }

  return config;

},

(error)=>Promise.reject(error)

);


// ==========================================================
// RESPONSE INTERCEPTOR
// ==========================================================

api.interceptors.response.use(

(response)=>response,

(error)=>{

  console.log(
    "API ERROR:",
    error.response?.data ||
    error.message
  );


  // TOKEN EXPIRED
  if(error.response?.status===401){

    clearToken();

    if(!window.location.pathname.includes("/admin/login")){

      window.location.href="/admin/login";

    }

  }


  // SERVER ERROR
  if(error.response?.status===500){

    console.error("Server error");

  }


  // NETWORK ERROR (Render sleep / DNS / CORS)
  if(!error.response){

    console.error("Network error");

  }


  // TIMEOUT ERROR
  if(error.code==="ECONNABORTED"){

    console.error("Request timeout");

  }


  return Promise.reject(error);

}

);

export default api;