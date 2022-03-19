import React, {useContext, useState} from 'react';
import './SendForm.styles.css'
import {CurrentUserContext, SocketContext} from "../../App";

const SendForm = ({messages, setMessages}) => {
  const [text, setText] = useState('')
  const socket = useContext(SocketContext)
  const id = useContext(CurrentUserContext)

  const submitForm = (event) => {
    event.preventDefault()
    socket.emit('send message', {
      id: id,
      message: text
    })
    setText('')
  }

  return (
    <div className={'send-form'}>
      <form className={'send-form__form'} onSubmit={submitForm}>
        <input className={'form__input'} value={text} onChange={(e) => setText(e.target.value)} placeholder={'message'} />
        <button className={'form__button'}>send</button>
      </form>
    </div>
  );
};

export default SendForm;