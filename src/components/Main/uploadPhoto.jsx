import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postPhoto } from '../../actions/photoActions';

class PhotoUpload extends Component {
  redirect = false;
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postPhoto(this.state);
    this.redirect = true;
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
          <input
            type="file"
            id="photo"
            accept=".png, .jpg, .jpeg"
            onChange={event => this.handlePhotoInput(event)}
          />
          <label htmlFor="description"
          >Description</label>
          <textarea name="description"
            onChange={this.handleDescriptionInput}
          ></textarea>
          <div className="button-container">
            <button
              className="action-button"
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