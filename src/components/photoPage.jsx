import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadPhoto } from '../actions/photoActions';
import { getComments } from '../actions/commentActions';
import { getOtherPhotos } from '../actions/photoActions';

import SecondSidebar from '../components/secondSidebar';
import SidebarPhotoContainer from '../components/sidebarPhotos';
import Comments from './Comments/Comments';
import NewCommentForm from './Comments/CommentForm';

class PhotoPage extends Component {

  componentDidMount() {
    this.props.loadPhoto(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    if (this.props.photo) {
      const ownerId = this.props.photo.owner
        && this.props.photo.owner.id
        ? this.props.photo.owner.id
        : null;
      const ownerUsername = this.props.photo.owner
        && this.props.photo.owner.username
        ? this.props.photo.owner.username
        : null;
      return (
        <React.Fragment>
          <div className="photo-detail-container">
            <div className="image-container">
              <img src={this.props.photo.link} alt="" />
            </div>
            <div className="details-container">
              <Link to={`/users/${ownerId}`}>
                <div>@{ownerUsername}</div>
              </Link>
              <div>{this.props.photo && this.props.photo.description}</div>
            </div>
          </div>
          <SecondSidebar photo={this.props.photo}>
            <SidebarPhotoContainer photoId={ownerId} />
          </SecondSidebar>
          <div className="comment-section-container">
            {
              this.props.comments ?
                <Comments comments={this.props.comments} /> :
                null
            }
            <NewCommentForm photoId={this.props.photo.id} />
          </div>
        </React.Fragment>

      );
    }
    return (
      <div>Error loading photo</div>
    )
  }
}

const mapStateToProps = state => ({
  photo: state.photos,
  comments: state.comments
})

export default connect(mapStateToProps, {
  loadPhoto,
  getComments,
  getOtherPhotos
})(PhotoPage);