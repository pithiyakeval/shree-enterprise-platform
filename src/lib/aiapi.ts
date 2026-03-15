import axios from "axios";

const AI_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://shree-enterprise-backend-eqpg.onrender.com";

export const aiApi = axios.create({

  baseURL: `${AI_BASE}/api`,

  timeout:90000,

  headers:{
    "Content-Type":"application/json",
    Accept:"application/json"
  },

  withCredentials:false

});


// ======================================================
// AI CHAT FUNCTION
// ======================================================

export async function askAI(question:string){

  if(!question?.trim()){

    return{
      answer:"Please ask a valid question."
    };

  }

  try{

    const res =
    await aiApi.post("/ai/chat",{

      question:question.trim()

    });

    if(!res?.data){

      return{
        answer:"AI returned empty response"
      };

    }

    return res.data;

  }
  catch(e:any){

    console.log(
      "AI ERROR:",
      e.response?.data ||
      e.message
    );


    // Timeout
    if(e.code==="ECONNABORTED"){

      return{
        answer:
        "AI is taking too long. Please try again."
      };

    }


    // Render cold start
    if(e.message?.includes("Network Error")){

      return{
        answer:
        "Server waking up. Try again in 10 seconds."
      };

    }


    // Server error
    if(e.response?.status>=500){

      return{
        answer:
        "AI service temporarily unavailable"
      };

    }


    return{
      answer:
      "AI temporarily unavailable"
    };

  }

}
