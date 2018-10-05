import { LOGIN_USER, REGISTER_USER } from '../actions';

const user = (user = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return user = action.payload;
    case LOGIN_USER:
      return user = action.payload;
    default:
      return user;
  }
}

export default user;
