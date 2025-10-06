const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = { messages: [], newMessageText: '' };

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
      };
      // state.messages.push(newMessage);
      // state.newMessageText = '';
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessage };
    // state.newMessageText = action.newMessage;
    // return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});
export default dialogsReducer;
