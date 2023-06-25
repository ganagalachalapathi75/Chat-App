import React, { useState } from 'react';

const ChatMessage = ({ username, message }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <strong>{username}:</strong> {message}
      <button onClick={handleLikeClick}>Like ({likeCount})</button>
    </div>
  );
};

export default ChatMessage;
