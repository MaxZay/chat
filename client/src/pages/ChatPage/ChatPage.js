import React, {useCallback, useContext, useEffect, useState} from 'react';
import './ChatPage.styles.css'
import Messages from "../../components/Messages/Messages";
import SendForm from "../../components/SendForm/SendForm";
import {SocketContext} from "../../App";

const ChatPage = () => {
  const [messages, setMessages] = useState([])
  const socket = useContext(SocketContext)

  useEffect(() => {
    socket?.on('get message', obj => {
      setMessages((messages) => [...messages, obj])
    })
  }, [socket])

  return (
    <div className={'chat-page'}>
      <Messages messages={messages} />
      <SendForm messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default ChatPage;