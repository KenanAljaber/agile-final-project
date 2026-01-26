import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: 'welcome',
    message: 'Hi! I am the Creative Suite assistant. What can I help you with today?',
    trigger: 'options'
  },
  {
    id: 'options',
    options: [
      { value: 'pricing', label: 'Pricing', trigger: 'pricing' },
      { value: 'projects', label: 'Projects', trigger: 'projects' },
      { value: 'account', label: 'Account help', trigger: 'account' },
      { value: 'support', label: 'Support', trigger: 'support' }
    ]
  },
  {
    id: 'pricing',
    message: 'We offer flexible plans for teams of any size. Want a quick quote?',
    trigger: 'quote'
  },
  {
    id: 'projects',
    message: 'You can create and manage projects from the Projects screen. Need tips?',
    trigger: 'tips'
  },
  {
    id: 'account',
    message: 'Account help includes resetting passwords and updating profiles.',
    trigger: 'more-help'
  },
  {
    id: 'support',
    message: 'Support is available 24/7. Should I open a ticket for you?',
    trigger: 'ticket'
  },
  {
    id: 'quote',
    message: 'Great! A plan specialist will reach out shortly with pricing details.',
    trigger: 'anything-else'
  },
  {
    id: 'tips',
    message: 'Use the + New project button to create a workspace and invite collaborators.',
    trigger: 'anything-else'
  },
  {
    id: 'more-help',
    message: 'Visit the Settings screen to update profile info and security options.',
    trigger: 'anything-else'
  },
  {
    id: 'ticket',
    message: 'Ticket created! Our team will follow up soon.',
    trigger: 'anything-else'
  },
  {
    id: 'anything-else',
    message: 'Anything else I can help with?',
    trigger: 'options'
  }
];

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot">
      {isOpen ? (
        <div className="chatbot__panel">
          <ChatBot
            steps={steps}
            headerTitle="Creative Suite Assistant"
            placeholder="Type your response..."
            hideBotAvatar
            hideUserAvatar
            width="100%"
          />
        </div>
      ) : null}
      <button className="chatbot__toggle" type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? '×' : 'Chat'}
      </button>
    </div>
  );
};

export default ChatbotWidget;
