import axios from 'axios';
import { LOGIN_USER } from './index';

const PATH = '/api'

export const loginUser = loginData => {
  return dispatch => {
    return axios.post(`${PATH}/login`, loginData)
      .then(response => {
        dispatch({
          type: LOGIN_USER,
          payload: response.data
        })
      })
  }
}