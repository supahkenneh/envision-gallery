import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    const { loggedIn } = this.props;
    if (!loggedIn) {
      return (
        <div className="sidebar">
          <div className="sidebar-options">
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="sidebar">
        <div className="sidebar-options">
          <button>Your Profile</button>
          <button>Upload</button>
          <button>Logout</button>
        </div>
      </div>
    )
  }
}

export default Sidebar;