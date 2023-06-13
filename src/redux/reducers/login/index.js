/* eslint-disable object-curly-newline */
import * as Types from 'ConfigsRoot/constants';

const initialState = {
  id: '',
  email: '',
  role: '',
  name: '',
  phone: '',
  avatarUrl: '',
};

const loginSuccess = (state, action) => {
  const { avatarUrl, email, id, name, phone, role } = action.payload;
  window.localStorage.setItem('auth', JSON.stringify(action.payload));
  return {
    ...state, avatarUrl, email, id, name, phone, role,
  };
};

const getCurrentAuthSuccess = (state, action) => {
  const { id, email, role, name } = action.payload;
  return {
    ...state, id, email, role, name,
  };
};

const logoutAuthSuccess = (state) => {
  window.localStorage.removeItem('auth');
  return {
    ...state,
    id: '',
    email: '',
    role: '',
    name: '',
  };
};

// eslint-disable-next-line default-param-last
const login = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case Types.GET_CURRENT_AUTH_SUCCESS:
      return getCurrentAuthSuccess(state, action);
    case Types.LOGOUT_SUCCESS:
      return logoutAuthSuccess(state, action);
    default:
      return state;
  }
};

export default login;
