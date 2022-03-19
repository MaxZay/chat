import React, {useContext} from 'react';
import './Message.styles.css'
import {CurrentUserContext} from "../../App";

const Message = ({message, userId, time}) => {
  const currentUserId = useContext(CurrentUserContext)
  return (
    <div className={userId === currentUserId ? 'message my-message': 'message not-my-message'}>
      <p>{message}</p>
      <p className={'time'}>{time}</p>
    </div>
  );
};

export default Message;