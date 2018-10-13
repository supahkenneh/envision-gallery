import { combineReducers } from 'redux';
import user from './userReducer';
import photos from './photoReducer';
import photoList from './secondPhotoReducer';
import comments from './commentReducer';

export default combineReducers({
  user,
  photos,
  photoList,
  comments
})