import { useState } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '0000000000';

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) {
      return;
    }
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(trimmed)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
  };

  return (
    <div className="chatbot">
      {isOpen ? (
        <div className="chatbot__panel">
          <div className="chatbot__header">
            <div>
              <strong>Assistant</strong>
              <p>Send a message via WhatsApp.</p>
            </div>
            <button className="ghost" type="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
          <form className="chatbot__form" onSubmit={handleSubmit}>
            <textarea
              rows="3"
              placeholder="How can we help?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button className="primary" type="submit">
              Send on WhatsApp
            </button>
          </form>
          <p className="chatbot__hint">
            Configure <code>VITE_WHATSAPP_NUMBER</code> to route chats to your number.
          </p>
        </div>
      ) : null}
      <button className="chatbot__toggle" type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? '×' : 'Chat'}
      </button>
    </div>
  );
};

export default ChatbotWidget;
