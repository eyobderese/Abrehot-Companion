// src/ChatBot.js
import React, { useState } from 'react';
import './ChatBot.css';
import profile from '../assets/robot.png'

const ChatBot = () => {
  const [messages, setMessages] = useState([ { sender: 'user', text: "Hi I am AI, what Can I help you?"}]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      // Here you would typically call an API to get the bot's response
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Hello! How can I help you?' }]);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot">
        <header className='chatBootHeader'>
            <img src={profile} alt="" />
            <p>Online</p>
        </header>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
