import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    MessageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
