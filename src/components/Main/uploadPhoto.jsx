import React, { Component } from 'react';

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      description: '',
    }
  }

  render() {
    return (
      <div className="upload-form-container">
        <div className="form-headline">Add to the Gallery</div>
        <form className="upload-form">
          <input type="file" id="photo" accept=".png, .jpg, .jpeg" />
          <label htmlFor="photo">Choose A Photo</label>
          <label htmlFor="description">Description</label>
          <textarea name="description"></textarea>
        </form>
      </div>
    );
  }
}

export default PhotoUpload;