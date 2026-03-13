import axios from "axios";

const AI_BASE =
import.meta.env.VITE_API_BASE ||
"https://shree-enterprise-backend-eqpg.onrender.com";

export const aiApi = axios.create({

  baseURL: AI_BASE,

  timeout:60000,

  headers:{
    "Content-Type":"application/json"
  }

});

export async function askAI(question:string){

  try{

    const res =
    await aiApi.post("/api/ai/chat",{

      question

    });

    return res.data;

  }catch(e:any){

    console.log(
      "AI ERROR:",
      e.response?.data ||
      e.message
    );

    return {

      answer:
      "AI temporarily unavailable"

    };

  }

}