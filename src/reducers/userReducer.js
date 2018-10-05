import { LOGIN_USER, REGISTER_USER, CHECK_USER } from '../actions';

const user = (user = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case CHECK_USER:
      return user = action.payload;
    default:
      return user;
  }
}

export default user;
