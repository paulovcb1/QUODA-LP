import React, { useState } from 'react';
import Header from './components/header';
import ChatMessages from './components/chatMessages';
import InputArea from './components/inputArea';
import { fetchCocktailInfo } from './api/cocktailService';

const App = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', content: 'Olá! Me diga o nome de um coquetel e eu lhe darei informações sobre ele.' },
  ]);

  const addMessage = (content, sender) => {
    setMessages((prevMessages) => [...prevMessages, { sender, content }]);
  };

  const handleSendMessage = (message) => {
    addMessage(message, 'user');
    fetchCocktailInfo(message)
      .then((info) => addMessage(info, 'bot'))
      .catch(() => addMessage('Desculpe, houve um problema ao se comunicar com o servidor.', 'bot'));
  };

  return (
    <div className="bg-white w-full max-w-sm h-screen flex flex-col">
      <Header />
      <ChatMessages messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
