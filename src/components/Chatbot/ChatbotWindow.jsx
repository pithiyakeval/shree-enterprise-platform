import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { apiPost } from "@/config/api";

export default function ChatbotWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! I am the Shree Enterprise Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const data = await apiPost("/api/ai/chat", {
        question: userText,
      });

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.answer || "Please try again." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "⚠️ Our assistant is temporarily unavailable. Please call or WhatsApp us for immediate help.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>Shree Enterprise Assistant</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <ChatMessage key={i} from={m.role} text={m.text} />
        ))}
        {loading && <ChatMessage from="bot" text="Typing…" />}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about solar, mandap, pricing…"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}
