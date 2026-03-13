import axios from "axios";

const AI_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://shree-enterprise-backend-eqpg.onrender.com";

export const aiApi = axios.create({
  baseURL: AI_BASE,
  timeout: 60000, // 60s for LLM responses
  headers: {
    "Content-Type": "application/json",
  },
});

export async function askAI(question: string) {

  if (!question || !question.trim()) {
    return { answer: "Please ask a valid question." };
  }

  try {

    const res = await aiApi.post("/api/ai/chat", {
      question: question.trim(),
    });

    return res.data;

  } catch (e: any) {

    console.log(
      "AI ERROR:",
      e.response?.data ||
      e.message
    );

    let msg = "AI temporarily unavailable";

    if (e.code === "ECONNABORTED") {
      msg = "AI response timeout. Please try again.";
    }

    return {
      answer: msg
    };

  }

}