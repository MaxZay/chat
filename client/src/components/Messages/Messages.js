import React, {useEffect, useRef} from 'react';
import './Messages.styles.css'
import Message from "../Message/Message";

const Messages = ({messages}) => {
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className={'messages'} ref={scrollRef}>
      {messages.map((message, index) => (
        <Message key={index} message={message.message} userId={message.id} time={message.time} />
      ))}
    </div>
  );
};

export default Messages;