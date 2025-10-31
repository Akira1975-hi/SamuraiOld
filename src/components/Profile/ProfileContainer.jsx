import React from 'react';
import Profile from './Profile.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer.js';

// import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    // let location = useLocation();
    // let navigate = useNavigate();
    let params = useParams();
    // return <Component {...props} router={{ location, navigate, params }} />;
    return <Component {...props} router={{ params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile });
// let mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
