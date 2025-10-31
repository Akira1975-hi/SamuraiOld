import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './Profileinfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
