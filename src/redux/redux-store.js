// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import usersReducer from './users-reducer.js';
import authReducer from './auth-reducer.js';

// let reducers = combineReducers({
//   // profileReducer: profileReducer,
//   // dialogsReducer: dialogsReducer,
//   // sidebarReducer: sidebarReducer,
//   profilePage: profileReducer,
//   dialogsPage: dialogsReducer,
//   sidebar: sidebarReducer,
// });

// let store = configureStore({ reducer: reducers });

let store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
  },
});
window.store = store;
export default store;
