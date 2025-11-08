import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  let contactsUser = Object.entries(props.profile.contacts);

  return (
    <div>
      {/*<div>*/}
      {/*  <img*/}
      {/*    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"*/}
      {/*    alt="nature photo"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <div className={s.blockDesc}>
          <div className={s.photo}>
            <img
              src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
              alt="photo"
            ></img>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          </div>
          <div className={s.dataUser}>
            <h2 className={s.title}>{props.profile.fullName}</h2>
            <div className={s.subtitle}>{props.profile.aboutMe}</div>
            <div className={s.contacts}>
              <div className={s.titleContacts}>Контакты</div>
              <div className={s.blockContacts}>
                {contactsUser.map((item) => {
                  return (
                    <div className={s.pair} key={item[0]}>
                      <span>{item[0]}</span>
                      <span>{item[1]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
