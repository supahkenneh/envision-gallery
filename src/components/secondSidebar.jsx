import React, { Component } from 'react';
import EditingModal from './Modals/editingModal';
import DeleteModal from './Modals/deleteModal';

class SecondSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      deleting: false
    }
  }

  toggleEdit = id => {
    if (!this.state.editing) {
      return this.setState({ editing: true })
    }
    this.setState({ editing: false })
  }

  toggleDelete = id => {
    if (!this.state.deleting) {
      return this.setState({ deleting: true })
    }
    this.setState({ deleting: false })
  }

  render() {
    const id = this.props.photo.id
    return (
      <div className="second-sidebar-container" >
        {this.state.editing ?
          <EditingModal
            onClick={() => this.toggleEdit(id)}
            photo={this.props.photo}
          />
          : null}
        {this.state.deleting ?
          <DeleteModal
            onClick={() => this.toggleDelete(id)}
            photoId={this.props.photo.id}
          />
          : null
        }
        <div className="sidebar-button-container">
          <button
            onClick={() => this.toggleEdit(id)}
          >Edit</button>
          <button
            onClick={() => this.toggleDelete(id)}
          >Delete</button>
        </div>
      </div >
    );
  }
}

export default SecondSidebar;