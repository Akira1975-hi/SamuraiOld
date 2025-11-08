import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './Profileinfo/ProfileInfo.jsx';

import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
