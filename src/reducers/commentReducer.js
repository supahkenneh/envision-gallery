import { GET_COMMENTS, POST_COMMENT } from '../actions';

function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.payload];
    case POST_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default comments;