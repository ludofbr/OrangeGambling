import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io ("172.20.10.3:3000");
function Chat() {

const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');


useEffect(() => {
  socket.on('chat:message:receive', newMessage => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  });
  return() =>{
    socket.off('chat:message:receive');
  };
  
}, []);

const sendMessage = () => {
  socket.emit('chat:message:receive', input);
  setInput('');
  alert("Envoyer")
};
return (
 <section>
    <ul>
      {messages.map((msg,index) => (
        <li key={index}>{msg.text}</li>
      ))}
    </ul>
      <input type="text" value={input} onChange={(e) =>setInput(e.target.value)}/>
      <button onClick={sendMessage}>Envoyer</button>
 </section>
);
}

export default Chat;
