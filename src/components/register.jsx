import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="register-form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default Register;