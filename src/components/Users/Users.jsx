import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

import { followAPI } from '../api/api.js';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.selectedPage : s.ordinaryPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={s.blockUser}>
          <div className={s.blockFollow}>
            <div className={s.photoFrame}>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.photo}
                  alt="photo"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.includes(u.id)}
                  className={s.button}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    followAPI
                      .setUnfollow(u.id)
                      .then((resultCode) => {
                        if (resultCode == 0) {
                          props.unfollow(u.id);
                        }
                        // props.toggleFollowingProgress(false, u.id);
                      })
                      .finally(() => props.toggleFollowingProgress(false, u.id));
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.includes(u.id)}
                  className={s.button}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    followAPI
                      .setFollow(u.id)
                      .then((resultCode) => {
                        if (resultCode == 0) {
                          props.follow(u.id);
                        }
                        // props.toggleFollowingProgress(false, u.id);
                      })
                      .finally(() => props.toggleFollowingProgress(false, u.id));
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.blockData}>
            <div className={s.blockData_left}>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.blockData_right}>
              <div className={s.country}>{'u.location.country'}</div>
              <div className={s.city}>{'u.location.city'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
