import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatbotWindow from "./ChatbotWindow";
import "./Chatbot.css";
import ShreeLogo from "./shree-logo.png";

export default function ChatbotWidget() {

  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Floating Assistant Container */}

      <div className="chatbot-container">

        {/* Floating Chat Button */}

        <motion.button
          className="chatbot-fab"
          onClick={toggleChat}
          aria-label="Open Shree Enterprise Assistant"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >

          {/* AI Avatar */}

          <div className="chatbot-avatar">

            <img
              src={ShreeLogo}
              alt="Shree Enterprise Assistant"
            />

            {/* Online Status */}

            <span className="chatbot-status"></span>

          </div>

          {/* Tooltip */}

          <span className="chatbot-tooltip">
            Ask about Solar or Mandap Services
          </span>

          {/* Notification Badge */}

          {!open && (
            <span className="chatbot-badge">
              AI
            </span>
          )}

        </motion.button>

      </div>



      {/* Chat Window Animation */}

      <AnimatePresence>

        {open && (

          <motion.div
            className="chatbot-window-wrapper"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >

            <ChatbotWindow onClose={() => setOpen(false)} />

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}