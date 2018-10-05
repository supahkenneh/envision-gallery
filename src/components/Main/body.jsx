import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photoActions';

import MainPhoto from './mainPhoto';
import PhotoCollection from './photoCollection';
class Body extends Component {

  componentDidMount() {
    this.props.getPhotos()
  }

  render() {
    //plucking out first photo to be used for MainPhoto
    //rest of photos passed to PhotoCollection
    let main = this.props.photos.splice(0, 1)[0];
    return (
      <div className="body">
        <MainPhoto main={main} />
        <PhotoCollection collection={this.props.photos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
})

export default connect(mapStateToProps, { getPhotos })(Body);