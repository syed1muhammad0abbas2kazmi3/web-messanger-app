import './App.css';
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function App() {
  return (
    <div className="App">
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;

