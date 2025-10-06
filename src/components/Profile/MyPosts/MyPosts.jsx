import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { addPostActionCreator } from '../../../redux/profile-reducer.js';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';

const MyPosts = (props) => {
  const { posts, newPostText } = props.profilePage;
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
