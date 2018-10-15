import {
  GET_COMMENTS,
  POST_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions';

function comments(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.payload];
    case POST_COMMENT:
      return [...state, action.payload];
    case EDIT_COMMENT:
      console.log('edit reducer', action.payload);
      break;
    case DELETE_COMMENT:
      return [...action.payload];
    default:
      return state;
  }
}

export default comments;