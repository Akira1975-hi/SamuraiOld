import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://cdn-icons-png.flaticon.com/128/2333/2333464.png" alt="logo" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink className={s.loginLink} to={'/login'}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
