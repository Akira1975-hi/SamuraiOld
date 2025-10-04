import Friend from './Friend/Friend.jsx';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <div className={s.friends}>
      <h3 className={s.title}>Friends</h3>
      <div className={s.wrapper}>
        {friends.map((f) => (
          <Friend key={f.id} friend={f} />
        ))}
      </div>
    </div>
  );
};
export default Friends;
