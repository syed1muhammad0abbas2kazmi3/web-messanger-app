import React, { useState, useEffect } from 'react';
import './MessageList.css'; // Import the CSS file

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Array of different messages
    const differentMessages = [
      "How's it going?",
      "What's up?",
      "Nice weather today!",
      "Did you watch the game?",
      "Any plans for the weekend?",
      "Have you seen the latest movie?"
    ];
  
    const interval = setInterval(() => {
      // Select a random message from the differentMessages array
      const randomMessage = differentMessages[Math.floor(Math.random() * differentMessages.length)];
      const newMessage = { sender: 'Friend', text: randomMessage };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    }, 3000); // Simulate receiving a new message every 3 seconds
  
    return () => clearInterval(interval);
  }, []); // Run only once when the component mounts
  
  

  return (
    <div className="message-list">
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}: </strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
