import { combineReducers } from 'redux';
import userReducer from './userReducer';
import photos from './photoReducer';

export default combineReducers({ userReducer, photos })