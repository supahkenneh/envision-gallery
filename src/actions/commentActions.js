import { GET_COMMENTS, POST_COMMENT, EDIT_COMMENT } from './index';
import axios from 'axios';

const PATH = '/api'

export const getComments = id => {
  return dispatch => {
    return axios.get(`${PATH}/photos/${id}/comments`)
      .then(response => {
        dispatch({
          type: GET_COMMENTS,
          payload: response.data
        })
      })
  }
}