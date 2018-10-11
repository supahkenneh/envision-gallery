import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { deletePhoto } from '../../actions/photoActions';
import { connect } from 'react-redux';

class DeleteModal extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }

  deletePhoto = () => {
    this.props.deletePhoto(this.props.photoId);
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="modal" >
        <div className="modal-container">
          <div>Confirm Delete</div>
          <div className="button-container">
            <button
              className="action-button"
              onClick={this.deletePhoto}
            >Delete</button>
            <button
              className="cancel-button"
              onClick={this.props.onClick}
            >Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deletePhoto })(DeleteModal);