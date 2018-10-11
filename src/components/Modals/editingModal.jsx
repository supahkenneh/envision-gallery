import React, { Component } from 'react';
import { editPhoto } from '../../actions/photoActions';
import { connect } from 'react-redux';

class EditingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
  }

  handleDescriptionInput = (event) => {
    this.setState({ description: event.target.value })
  }

  submitEdit = e => {
    e.preventDefault();
    this.props.editPhoto(this.state, this.props.photo.id)
    this.props.onClick();
  }

  render() {
    return (
      <div className="editing-modal">
        <div className="modal-container">
          <form>
            <div className="form-headline">Edit Photo</div>
            <label htmlFor="description">Description</label>
            <textarea name="description"
              onChange={this.handleDescriptionInput}
              defaultValue={this.props.photo.description}
            ></textarea>
            <div className="button-container">
              <button className="action-button"
                onClick={this.submitEdit}
              >Edit</button>
              <button className="cancel-button" onClick={this.props.onClick}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { editPhoto })(EditingModal);