// import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer.js';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';
import { StoreContext } from '../../../StoreContext.jsx';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          // props.updateNewPostText(text);
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
