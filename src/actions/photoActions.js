import axios from 'axios';
import { GET_PHOTOS } from './index';

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