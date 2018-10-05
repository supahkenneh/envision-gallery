import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './index';

const PATH = '/api'

export const registerUser = registerData => {
  return dispatch => {
    return axios.post(`${PATH}/register`, registerData)
      .then(response => {
        dispatch({
          type: REGISTER_USER,
          payload: response.data
        })
      })
  }
}

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