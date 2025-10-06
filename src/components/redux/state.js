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

  // addPost() {
  //   let newPost = {
  //     id: this._state.profilePage.posts.length + 1,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }, // action - это объект который сообщает нам какое действие необходимо совершить и у него обязательно д.б. свойство type: { type: 'ADD-POST' }
};

export default store;
window.store = store;
