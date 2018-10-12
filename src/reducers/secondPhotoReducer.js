import { GET_OTHER_PHOTOS } from '../actions';

function photoList(state = [], action) {
  switch (action.type) {
    case GET_OTHER_PHOTOS:
      return [...action.payload];
    default:
      return state;
  }
}

export default photoList;