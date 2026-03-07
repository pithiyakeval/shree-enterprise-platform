export default function ChatMessage({ from, text }) {
  return (
    <div className={`chat-msg ${from}`}>
      <div className="chat-bubble">{text}</div>
    </div>
  );
}
