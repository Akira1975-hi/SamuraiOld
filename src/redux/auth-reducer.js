import { authAPI } from '../components/api/api.js';

const SET_USER_DATA = 'SET_USER_DATA';

// const initialState = { posts: [], newPostText: '' };
const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

// AC - Action Creator  ----
export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login)); // последовательность аргументов имеет значение и зависит от setAuthUserData в auth-reducer.js
      }
    });
  };
};

export default authReducer;
