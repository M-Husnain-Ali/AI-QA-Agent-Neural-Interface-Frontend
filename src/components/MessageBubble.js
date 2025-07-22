import React from 'react';

const MessageBubble = ({ message, isUser, timestamp }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className={`message-bubble ${isUser ? 'user' : 'ai'}`}>
      <div className="message-content">
        <div className="message-text">{message}</div>
        <div className="message-timestamp">
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;