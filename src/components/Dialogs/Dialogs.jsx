import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
  const { dialogs, messages } = props.dialogsPage;

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} src={dialog.src} />
  ));

  let messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div>{dialogsElements}</div>
      <div>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
