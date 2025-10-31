import React from 'react';
import Header from './Header.jsx';

import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer.js';
import { authAPI } from '../api/api.js';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        this.props.setAuthUserData(id, email, login); // последовательность аргументов имеет значение и зависит от setAuthUserData в auth-reducer.js
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
