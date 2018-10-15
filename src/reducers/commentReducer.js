import { GET_COMMENTS } from '../actions';

function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.payload]
    default:
      return state;
  }
}

export default comments;