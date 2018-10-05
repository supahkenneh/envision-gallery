import { GET_PHOTOS } from '../actions';

function photos(state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default photos;