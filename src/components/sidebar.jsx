import React, { Component } from 'react';

class Sidebar extends Component {
  state = {}

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-options">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;