const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

// const initialState = { messages: [], newMessageText: '' };
const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Dmitriy',
      src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480614_klev-club-p-kartinki-litsa-lyudei-16.jpg',
    },
    {
      id: 2,
      name: 'Andrey',
      src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480614_klev-club-p-kartinki-litsa-lyudei-17.jpg',
    },
    {
      id: 3,
      name: 'Sveta',
      src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480620_klev-club-p-kartinki-litsa-lyudei-41.jpg',
    },
    {
      id: 4,
      name: 'Sasha',
      src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480617_klev-club-p-kartinki-litsa-lyudei-29.jpg',
    },
    {
      id: 5,
      name: 'Viktor',
      src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480615_klev-club-p-kartinki-litsa-lyudei-21.jpg',
    },
    {
      id: 6,
      name: 'Valera',
      src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480610_klev-club-p-kartinki-litsa-lyudei-8.jpg',
    },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your day?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Bye' },
    { id: 5, message: 'Good day!!!' },
    { id: 6, message: 'Guess what?' },
  ],
  newMessageText: 'samurai.js',
};

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
