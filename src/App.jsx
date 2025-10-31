import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import NewsFeed from './components/NewsFeed/NewsFeed.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
