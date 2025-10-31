import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import FriendsContainer from './Friends/FriendsContainer.jsx';

const Navbar = () => {
  function activeItem(isActive) {
    return isActive ? `${s.item} ${s.activeLink}` : s.item;
  }
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <div>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? `${s.item} ${s.activeLink}` : s.item)}
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={({ isActive }) => activeItem(isActive)}>
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" className={({ isActive }) => activeItem(isActive)}>
            Users
          </NavLink>
        </div>

        <div>
          <NavLink to="/news" className={({ isActive }) => activeItem(isActive)}>
            News
          </NavLink>
        </div>
        <div>
          <NavLink to="/music" className={({ isActive }) => activeItem(isActive)}>
            Music
          </NavLink>
        </div>
        <div>
          <NavLink to="/settings" className={({ isActive }) => activeItem(isActive)}>
            Settings
          </NavLink>
        </div>
      </nav>
      <FriendsContainer />
    </div>
  );
};

export default Navbar;
