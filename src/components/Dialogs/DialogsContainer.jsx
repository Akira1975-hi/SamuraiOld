import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import { StoreContext } from '../../StoreContext.jsx';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const onMessageChange = (text) => {
          store.dispatch(onMessageChangeActionCreator(text));
        };
        const onSendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        return (
          <Dialogs
            MessageChange={onMessageChange}
            sendMessage={onSendMessage}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
