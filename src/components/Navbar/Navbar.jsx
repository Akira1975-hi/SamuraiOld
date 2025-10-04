import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import Friends from './Friends/Friends.jsx';

const Navbar = ({ state }) => {
  const { friends } = state;
  function activeItem(isActive) {
    return isActive ? `${s.item} ${s.activeLink}` : s.item;
  }
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? `${s.item} ${s.activeLink}` : s.item)}
          >
            Profile
          </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/dialogs" className={({ isActive }) => activeItem(isActive)}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" className={({ isActive }) => activeItem(isActive)}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" className={({ isActive }) => activeItem(isActive)}>
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" className={({ isActive }) => activeItem(isActive)}>
            Settings
          </NavLink>
        </div>
      </nav>
      <Friends friends={friends} />
    </div>
  );
};

export default Navbar;
