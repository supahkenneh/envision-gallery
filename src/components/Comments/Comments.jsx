import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import NewCommentForm from './CommentForm';

import { getComments } from '../../actions/commentActions';

class Comments extends Component {

  componentDidMount = id => {
    if (id) {
      this.props.getComments(id);
    }
  }

  render() {
    if (this.props.photoId && !this.props.comments.length) {
      this.componentDidMount(this.props.photoId)
    }
    if (this.props.comments.length > 0) {
      return (
        <div className="comment-container">
          {
            this.props.comments.map(comment => {
              return (
                <Comment comment={comment} key={comment.id} />
              )
            })
          }
          <NewCommentForm />
        </div>
      )
    }
    return (
      <NewCommentForm />
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, { getComments })(Comments);