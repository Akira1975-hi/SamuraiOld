import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import React from 'react';
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/dialogs-reducer.js';

const Dialogs = (props) => {
  const { dialogs = [], messages = [], newMessageText = '' } = props.dialogsPage;

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} src={dialog.src} />
  ));

  let messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  // let newMessageElement = React.createRef();

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(onMessageChangeActionCreator(text));
  };
  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  return (
    <div className={s.dialogs}>
      <div>{dialogsElements}</div>
      <div>{messagesElements}</div>
      <div>
        <textarea onChange={onMessageChange} value={newMessageText} />
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
