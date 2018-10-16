import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photoActions';

import MainPhoto from './mainPhoto';
import PhotoCollection from './photoCollection';
class Body extends Component {

  componentDidMount = () => {
    this.props.getPhotos()
  }

  render() {
    //plucking out first photo to be used for MainPhoto
    //rest of photos passed to PhotoCollection
    //check for length to prevent backward navigation bug
    if (this.props.photos.length > 1) {
      const main = this.props.photos.splice(0, 1)[0];
      const mainId = main && main.id ? main.id : null;
      return (
        <div className="body">
          <Link to={`/photo/${mainId}`}>
            <MainPhoto main={main} />
          </Link>
          <PhotoCollection collection={this.props.photos} />
        </div>
      );
    }
    return (
      <div>No Photos</div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos
})

export default connect(mapStateToProps, { getPhotos })(Body);