import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleUsernameInput = (event) => {
    this.setState({ username: event.target.value })
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
  }

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value })
  }

  handleRegistration = (e) => {
    e.preventDefault();
    return axios.post('/api/register', this.state)
      .then(response => {
        if (!response.data.success) {
          //show error here
        }
        let loginInfo = {
          username: this.state.username,
          password: this.state.password
        }
        return axios.post('/api/login', loginInfo)
      })
      .then(response => {
        //save logged in user to localStorage
        window.localStorage.setItem('id', response.data.id);
        window.localStorage.setItem('username', response.data.username);
        window.localStorage.setItem('email', response.data.email);
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="auth-form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={this.handleUsernameInput}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            onChange={this.handlePasswordInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={this.handleEmailInput}
          />
          <div className="button-container">
            <button
              className="action-button"
              onClick={this.handleRegistration}
            >Register</button>
            <Link to="/">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;