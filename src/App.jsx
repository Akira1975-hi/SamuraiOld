import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import NewsFeed from './components/NewsFeed/NewsFeed.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}
          />
          <Route
            path="/profile"
            element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
          />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
