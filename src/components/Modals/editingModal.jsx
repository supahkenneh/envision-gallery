import React, { Component } from 'react';

class EditingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="editing-modal">
        <div className="modal-container">
          <form>
            <div className="form-headline">Edit Photo</div>
            <label htmlFor="description">Description</label>
            <textarea name="description">{this.props.photo.description}</textarea>
            <div className="button-container">
              <button className="action-button">Edit</button>
              <button className="cancel-button" onClick={this.props.onClick}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditingModal;