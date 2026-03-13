// import { useState } from "react";
// import ShreeLogo from "./shree-logo.png";

// export default function ChatMessage({ from, text }) {

//   const [copied, setCopied] = useState(false);

//   const time = new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit"
//   });

//   const copyMessage = () => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   return (
//     <div className={`chat-message ${from}`}>

//       {/* Avatar */}

//       {from === "bot" && (
//         <div className="chat-avatar">
//           <img src={ShreeLogo} alt="AI Assistant" />
//         </div>
//       )}

//       {/* Message Content */}

//       <div className="chat-content">

//         <div className="chat-bubble">

//           {text}

//           {/* Copy Button for AI messages */}

//           {from === "bot" && (
//             <button
//               className="copy-btn"
//               onClick={copyMessage}
//             >
//               {copied ? "Copied" : "Copy"}
//             </button>
//           )}

//         </div>

//         {/* Timestamp */}

//         <div className="chat-time">
//           {time}
//         </div>

//       </div>

//     </div>
//   );
// }

import { useState } from "react";
import ShreeLogo from "./shree-logo.png";

export default function ChatMessage({ from, text }) {

  const [copied, setCopied] = useState(false);

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const copyMessage = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (

    <div className={`chat-message ${from}`}>

      {/* BOT AVATAR */}

      {from === "bot" && (
        <div className="chat-avatar">
          <img src={ShreeLogo} alt="AI Assistant" />
        </div>
      )}

      {/* MESSAGE CONTENT */}

      <div className="chat-body">

        {/* BUBBLE */}

        <div className="chat-bubble">

          <div className="chat-text">
            {text}
          </div>

          {/* COPY BUTTON */}

          {from === "bot" && (
            <button
              className="copy-btn"
              onClick={copyMessage}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          )}

        </div>

        {/* TIME */}

        <div className="chat-time">
          {time}
        </div>

      </div>

    </div>

  );
}