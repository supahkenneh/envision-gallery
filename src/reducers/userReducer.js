import { LOGIN_USER } from '../actions';

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return user = action.payload;
    default:
      return user;
  }
}

export default userReducer;
