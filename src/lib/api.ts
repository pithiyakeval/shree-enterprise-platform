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

  // attach token except login
  if(token && !config.url?.includes("/admin/login")){

    config.headers.Authorization=
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

  // AUTO LOGOUT IF TOKEN INVALID
  if(error.response?.status===401){

    clearToken();

    window.location.href="/admin/login";

  }

  return Promise.reject(error);

}

);

export default api;