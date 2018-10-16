import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  CHECK_USER,
  LOGOUT_USER,
  GET_USER_PHOTOS
} from './index';

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
    if (localStorage.id && localStorage.username) {
      //if user is in local storage, dispatch to props
      dispatch({
        type: CHECK_USER,
        payload: {
          id: localStorage.id,
          username: localStorage.username,
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

export const getUserPhotos = id => {
  return dispatch => {
    return axios.get(`${PATH}/users/${id}`)
      .then(response => {
        dispatch({
          type: GET_USER_PHOTOS,
          payload: response.data
        })
      })
  }
}

function putInLocalStorage(data) {
  window.localStorage.setItem('id', data.id);
  window.localStorage.setItem('username', data.username);
}

function removeFromLocalStorage() {
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('username');
}