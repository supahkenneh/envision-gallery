import { GET_PHOTOS, LOAD_PHOTO } from '../actions';

function photos(state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return [...action.payload];
    case LOAD_PHOTO:
      return action.payload;
    default:
      return state;
  }
}

export default photos;