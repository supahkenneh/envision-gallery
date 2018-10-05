import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, CHECK_USER, LOGOUT_USER } from './index';

const PATH = '/api'

export const registerUser = registerData => {
  return dispatch => {
    return axios.post(`${PATH}/register`, registerData)
      .then(response => {
        putInLocalStorage(response.data);
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
        putInLocalStorage(response.data);
        dispatch({
          type: LOGIN_USER,
          payload: response.data
        })
      })
  }
}

export const checkUser = () => {
  return dispatch => {
    if (localStorage.id && localStorage.username && localStorage.email) {
      //if user is in local storage, dispatch to props
      dispatch({
        type: CHECK_USER,
        payload: {
          id: localStorage.id,
          username: localStorage.username,
          email: localStorage.email,
        }
      })
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    return axios.get(`${PATH}/logout`)
      .then(response => {
        if (response.data.success) {
          removeFromLocalStorage();
          dispatch({
            type: LOGOUT_USER
          })
        }
      })
  }
}

function putInLocalStorage(data) {
  window.localStorage.setItem('id', data.id);
  window.localStorage.setItem('username', data.username);
  window.localStorage.setItem('email', data.email);
}

function removeFromLocalStorage() {
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('username');
  window.localStorage.removeItem('email');
}