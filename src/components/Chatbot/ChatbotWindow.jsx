import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { apiPost } from "@/config/api";

export default function ChatbotWindow({ onClose }) {

  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      welcome:
        "Hello! I am the Shree Enterprise Assistant. I can help with solar installation, mandap decoration, pricing, and bookings.",
      placeholder: "Ask about solar, mandap, pricing...",
      solar: "⚡ Solar Installation",
      mandap: "💍 Mandap Decoration",
      pricing: "💰 Pricing",
      contact: "📞 Contact",
      whatsapp: "Chat on WhatsApp"
    },
    gu: {
      welcome:
        "નમસ્તે! હું Shree Enterprise નો સહાયક છું. હું તમને સોલાર ઇન્સ્ટોલેશન, મંડપ ડેકોરેશન અને પ્રાઈસિંગ વિશે માહિતી આપી શકું છું.",
      placeholder: "સોલાર અથવા મંડપ વિશે પૂછો...",
      solar: "⚡ સોલાર ઇન્સ્ટોલેશન",
      mandap: "💍 મંડપ ડેકોરેશન",
      pricing: "💰 કિંમત",
      contact: "📞 સંપર્ક",
      whatsapp: "WhatsApp પર વાત કરો"
    }
  };

  const t = translations[language];

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: t.welcome
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);


  /* SOLAR CALCULATOR */

  const solarCalculator = (units) => {

    if (units <= 300)
      return "Recommended: 2kW Solar System. Approx cost ₹1.2L – ₹1.6L. Saves ₹1200–₹1500/month.";

    if (units <= 500)
      return "Recommended: 3kW Solar System. Approx cost ₹1.8L – ₹2.4L. Saves ₹2000–₹2500/month.";

    return "Recommended: 5kW Solar System. Approx cost ₹3L – ₹3.8L. Saves ₹3500–₹4500/month.";
  };


  /* MANDAP PACKAGES */

  const mandapPackages = `
Basic Decoration – ₹25,000
✔ Simple Mandap
✔ Floral Backdrop
✔ Basic Lighting

Premium Decoration – ₹50,000
✔ Designer Mandap
✔ Floral Decoration
✔ Entry Gate Decoration

Royal Wedding Decoration – ₹90,000+
✔ Luxury Mandap
✔ Premium Floral Setup
✔ Reception Stage
`;


  /* QUICK BUTTON CLICK */

  const handleQuickQuestion = async (question) => {

    setMessages((prev) => [...prev, { role: "user", text: question }]);

    /* SOLAR CALCULATOR FLOW */

    if (question.includes("solar")) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "Please tell me your monthly electricity usage in units so I can recommend a solar system."
        }
      ]);
      return;
    }

    /* MANDAP PACKAGES */

    if (question.includes("mandap")) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: mandapPackages
        }
      ]);
      return;
    }

    setLoading(true);

    try {

      const data = await apiPost("/ai/chat", {
        question
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.answer || "Please try again."
        }
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "⚠️ Our assistant is temporarily unavailable. Please contact us on WhatsApp for quick help."
        }
      ]);

    } finally {
      setLoading(false);
    }
  };


  /* SEND MESSAGE */

  const sendMessage = async () => {

    if (!input.trim() || loading) return;

    const userText = input;

    setInput("");

    setMessages((prev) => [...prev, { role: "user", text: userText }]);


    /* CHECK IF USER SENT UNITS */

    const units = parseInt(userText);

    if (!isNaN(units)) {

      const result = solarCalculator(units);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: result
        }
      ]);

      return;
    }


    setLoading(true);

    try {

      const data = await apiPost("/ai/chat", {
        question: userText
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.answer || "Please try again."
        }
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "⚠️ Our assistant is temporarily unavailable. Please contact us on WhatsApp."
        }
      ]);

    } finally {

      setLoading(false);

    }
  };



  return (

    <div className="chatbot-window">


      {/* HEADER */}

      <div className="chatbot-header">

        <span>Shree Enterprise Assistant</span>

        <div>

          <button onClick={() => setLanguage("en")}>EN</button>
          <button onClick={() => setLanguage("gu")}>GU</button>

          <button onClick={onClose}>✕</button>

        </div>

      </div>



      {/* MESSAGES */}

      <div className="chatbot-messages">

        {messages.map((m, i) => (
          <ChatMessage key={i} from={m.role} text={m.text} />
        ))}


        {/* TYPING INDICATOR */}

        {loading && (
          <div className="msg bot">
            <div className="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />


        {/* QUICK SUGGESTIONS */}

        <div className="quick-buttons">

          <button onClick={() => handleQuickQuestion("solar installation")}>
            {t.solar}
          </button>

          <button onClick={() => handleQuickQuestion("mandap decoration")}>
            {t.mandap}
          </button>

          <button onClick={() => handleQuickQuestion("solar price")}>
            {t.pricing}
          </button>

          <button onClick={() => handleQuickQuestion("contact details")}>
            {t.contact}
          </button>

        </div>


        {/* WHATSAPP BUTTON */}

        <div style={{ marginTop: "12px" }}>

          <a
            href="https://wa.me/919898812423"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "#25D366",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "600",
              textDecoration: "none"
            }}
          >
            {t.whatsapp}
          </a>

        </div>


      </div>



      {/* INPUT */}

      <div className="chatbot-input">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>

      </div>

    </div>

  );

}