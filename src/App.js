import './App.css';
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function App() {
  return (
    // app.js
    <div className="App">
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;

