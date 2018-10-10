import { GET_PHOTOS, LOAD_PHOTO, ADD_PHOTO } from '../actions';

function photos(state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return [...action.payload];
    case LOAD_PHOTO:
      return action.payload;
    case ADD_PHOTO:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default photos;