import { LOGIN_USER, REGISTER_USER, CHECK_USER, LOGOUT_USER } from '../actions';

const user = (user = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case CHECK_USER:
      return user = action.payload;
    case LOGOUT_USER:
      return {}
    default:
      return user;
  }
}

export default user;
