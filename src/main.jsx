import './index.css';
import store from './redux/redux-store.js';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  const state = store.getState();
  root.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch} />
    </BrowserRouter>,
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
