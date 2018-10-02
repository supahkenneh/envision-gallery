import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  state = {}

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-options">
          <Link to="/register">
            <button>Register</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;