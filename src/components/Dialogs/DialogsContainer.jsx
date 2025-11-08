import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';

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

// let AuthRedirectComponent = (props) => {
//   if (!this.props.isAuth) return <Navigate to={'/login'} />;
//   return <Dialogs {...props} />;
// };

// compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
