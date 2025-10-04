import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const { id, name, src } = props;
  let path = '/dialogs/' + id;
  return (
    <div className={s.dialogItem}>
      <img src={src} alt="photo" />
      <NavLink className={s.dialogItem} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
