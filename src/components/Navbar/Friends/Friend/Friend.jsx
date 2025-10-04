import s from './Friend.module.css';

const Friend = ({ friend }) => {
  return (
    <div className={s.block}>
      <img className={s.image} src={friend.src} alt="photo" />
      <div>{friend.name}</div>
    </div>
  );
};
export default Friend;
