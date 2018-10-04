import axios from 'axios';

export const LOGIN_USER = 'LOGIN USER';

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