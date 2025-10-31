// import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer.js';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      // props.updateNewPostText(text);
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
