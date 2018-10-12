import React, { Component } from 'react';
import { getOtherPhotos } from '../actions/photoActions';
import { connect } from 'react-redux';

import SidebarPhoto from './sidebarPhoto';

class SidebarPhotoContainer extends Component {

  componentDidMount = id => {
    if (id) {
      this.props.getOtherPhotos(id)
    }
  }

  render() {
    if (this.props.ownerId && !this.props.photoList.length) {
      this.componentDidMount(this.props.ownerId)
    }
    const photoArr = this.props.photoList.filter(photo => photo.id !== this.props.photoId)
    return (
      <div className="sidebar-photos">
        <div className="user-headline">Photos By: @{this.props.owner}</div>
        {
          photoArr.map(photo => {
            return (
              <SidebarPhoto photo={photo} key={photo.id} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photoList: state.photoList
})

export default connect(mapStateToProps, { getOtherPhotos })(SidebarPhotoContainer);
