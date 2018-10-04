import { LOGIN_USER } from '../actions';

const user = (user = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return user = action.payload;
    default:
      return user;
  }
}

export default user;
