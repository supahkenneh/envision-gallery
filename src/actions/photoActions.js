import axios from 'axios';
import { GET_PHOTOS, LOAD_PHOTO } from './index';

const PATH = '/api';

export const getPhotos = () => {
  return dispatch => {
    return axios.get(`${PATH}/photos`)
      .then(response => {
        dispatch({
          type: GET_PHOTOS,
          payload: response.data
        })
      })
  }
}

export const loadPhoto = id => {
  return dispatch => {
    return axios.get(`${PATH}/photos/${id}`)
      .then(response => {
        dispatch({
          type: LOAD_PHOTO,
          payload: response.data
        })
      })
  }
}