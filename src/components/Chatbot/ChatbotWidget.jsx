import { useState } from "react";
import ChatbotWindow from "./ChatbotWindow";
import "./Chatbot.css";
import ShreeLogo from "./shree-logo.png"; // or chatbot.png

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="chatbot-fab"
        onClick={() => setOpen(!open)}
        aria-label="Open Shree Assistant"
      >
        <img src={ShreeLogo} alt="Shree AI Assistant" />
      </button>

      {/* Chat Window */}
      {open && <ChatbotWindow onClose={() => setOpen(false)} />}
    </>
  );
}
