import { combineReducers } from 'redux';
import user from './userReducer';
import photos from './photoReducer';
import photoList from './secondPhotoReducer';

export default combineReducers({ user, photos, photoList })