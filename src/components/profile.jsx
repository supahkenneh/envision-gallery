import React, { Component } from 'react';
import { getUserPhotos } from '../actions/userActions';
import { connect } from 'react-redux';

import UserPhoto from './userPhoto';

class Profile extends Component {

  componentDidMount() {
    this.props.getUserPhotos(this.props.match.params.id);
  }

  render() {
    if (this.props.userPhotos) {
      return (
        <div className="user-photos-container">
          {this.props.userPhotos.map(photo => {
            return (
              <UserPhoto
                photo={photo}
                key={photo.id}
              />
            )
          })}
        </div>
      )
    }
    return (
      <div>User has no photos</div>
    )
  }
}

const mapStateToProps = state => ({
  userPhotos: state.photos
})

export default connect(mapStateToProps, { getUserPhotos })(Profile);