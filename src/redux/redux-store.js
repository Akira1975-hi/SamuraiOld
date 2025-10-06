import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let reducers = combineReducers({
  // profileReducer: profileReducer,
  // dialogsReducer: dialogsReducer,
  // sidebarReducer: sidebarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = configureStore({ reducer: reducers });

export default store;
