import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import './App.css';

const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];
const logoURL = 'https://th.bing.com/th/id/OIP.xpTtUBjzRDxWVNmnjtPQrwAAAA?pid=ImgDet&rs=1';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      username: randomUser,
      message: message,
      likeCount: 0,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleLikeClick = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index].likeCount += 1;
      return updatedMessages;
    });
  };

  const handleMentionClick = (username) => {
    const messageInput = document.getElementById('message-input');
    const currentMessage = messageInput.value;
    messageInput.value = currentMessage + `@${username} `;
    messageInput.focus();
  };

  return (
    <div className="container">
      <h1 className="first-header">please enter your message in search bar you will see the output!</h1>
      <h1 className="chat-header">Chat App</h1>
      <img src={logoURL} alt="Logo" className="logo" />
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          username={message.username}
          message={message.message}
          likeCount={message.likeCount}
          onLikeClick={() => handleLikeClick(index)}
          onMentionClick={() => handleMentionClick(message.username)}
        />
      ))}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
