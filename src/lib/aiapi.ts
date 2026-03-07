// src/lib/aiApi.ts
import axios from "axios";

const AI_BASE = process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000"; // adjust if needed

export const aiApi = axios.create({
  baseURL: AI_BASE,
  timeout: 60_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function askAI(question: string) {
  const res = await aiApi.post("/api/ai/chat", { question });
  return res.data;
}
