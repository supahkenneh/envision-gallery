import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postPhoto } from '../../actions/photoActions';

class PhotoUpload extends Component {
  redirect = false;
  showErrors = false;
  disabled = true;
  photoValid = false;
  descriptionValid = false;

  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      description: '',
    }
  }

  handlePhotoInput = event => {
    const photo = event.target.files[0];
    this.setState({ photo: photo });
  }

  handleDescriptionInput = event => {
    this.setState({ description: event.target.value })
    this.validateInputs();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.disabled) {
      this.props.postPhoto(this.state);
      this.redirect = true;
    }
  }

  validateInputs = () => {
    if (this.state.description.length) {
      this.descriptionValid = true;
    } else {
      this.showErrors = true;
      this.photoValid = false;
    }
    if (this.state.photo && this.descriptionValid) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  render() {
    if (this.redirect) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="upload-form-container">
        <div className="form-headline">Add to the Gallery</div>
        <form className="upload-form">
          <div className="file-upload-wrapper">
            <button className="action-button">Upload A Photo</button>
            <input
              type="file"
              id="photo"
              accept=".png, .jpg, .jpeg"
              onChange={event => this.handlePhotoInput(event)}
            />
          </div>
          {
            this.state.photo
              && this.state.photo.name
              ? <div className="photo-name">{this.state.photo.name}</div>
              : null
          }
          <label htmlFor="description">Description
            {
              this.showErrors
                && !this.descriptionValid
                ? <span>Description required, say something about your photo!</span>
                : null
            }
          </label>
          <textarea name="description"
            onChange={this.handleDescriptionInput}
          ></textarea>
          <div className="button-container">
            <button
              className="action-button"
              disabled={this.disabled}
              onClick={this.handleSubmit}
            >Submit</button>
            <Link to="/">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { postPhoto })(PhotoUpload);