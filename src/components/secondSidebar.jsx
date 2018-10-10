import React, { Component } from 'react';

class SecondSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  toggleEdit = id => {
    if (!this.state.editing) {
      return this.setState({ editing: true })
    }
    this.setState({ editing: false })
  }

  render() {
    const id = this.props.photo.id
    return (
      <div className="second-sidebar-container" >
        <div className="sidebar-button-container">
          <button
            onClick={() => this.toggleEdit(id)}
          >Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default SecondSidebar;