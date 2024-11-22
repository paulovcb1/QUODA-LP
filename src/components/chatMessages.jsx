import React from 'react';
import Message from './message';

const ChatMessages = ({ messages }) => (
  <div id="chat-messages" className="p-4 space-y-4 flex-1 overflow-y-auto">
    {messages.map((msg, index) => (
      <Message key={index} content={msg.content} sender={msg.sender} />
    ))}
  </div>
);

export default ChatMessages;
