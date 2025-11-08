import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} src={dialog.src} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.MessageChange(text);
  };
  const onAddMessage = () => {
    props.sendMessage();
  };

  if (!props.isAuth) return <Navigate to={'/login'} />;
  return (
    <div className={s.dialogs}>
      <div>{dialogsElements}</div>
      <div>{messagesElements}</div>
      <div>
        <textarea onChange={onMessageChange} value={props.newMessageText} />
      </div>
      <div>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
