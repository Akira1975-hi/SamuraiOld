import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It is my first post', likesCount: 0 },
      ],
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Dmitriy',
          src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480614_klev-club-p-kartinki-litsa-lyudei-16.jpg',
        },
        {
          id: 3,
          name: 'Sveta',
          src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480620_klev-club-p-kartinki-litsa-lyudei-41.jpg',
        },
        {
          id: 6,
          name: 'Valera',
          src: 'https://klev.club/uploads/posts/2023-10/thumbs/1697480610_klev-club-p-kartinki-litsa-lyudei-8.jpg',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer это паттерн (по такому паттерну работает addEventListener)
  },

  dispatch(action) {
    // action - это объект который сообщает нам какое действие необходимо совершить и у него обязательно д.б. свойство type: { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
