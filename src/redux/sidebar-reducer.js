// const initialState = { friends: [] };
const initialState = {
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
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
