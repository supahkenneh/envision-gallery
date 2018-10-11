import axios from 'axios';
import { GET_PHOTOS, LOAD_PHOTO, ADD_PHOTO, EDIT_PHOTO } from './index';

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

export const postPhoto = data => {
  const form = new FormData();
  form.append('photo', data.photo);
  form.append('description', data.description);

  return dispatch => {
    return axios.post(`${PATH}/photos/upload`, form)
      .then(response => {
        dispatch({
          type: ADD_PHOTO,
          payload: response.data
        })
      })
  }
}

export const editPhoto = (data, id) => {
  return dispatch => {
    return axios.put(`${PATH}/photos/${id}`, data)
      .then(response => {
        dispatch({
          type: EDIT_PHOTO,
          payload: response.data
        })
      })
  }
}