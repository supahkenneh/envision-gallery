import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';
import { checkUser } from '../../actions/userActions';

import EditCommentPopout from './EditCommentPopout';
class CommentOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      deleting: false
    }
  }

  componentDidMount() {
    this.props.checkUser();
  }

  handleDelete = id => {
    this.props.deleteComment(id);
  }

  toggleEdit = () => {
    if (!this.state.editing) {
      return this.setState({ editing: true })
    }
    this.setState({ editing: false })
  }

  toggleDelete = () => {
    if (!this.state.deleting) {
      return this.setState({ deleting: true })
    }
    this.setState({ deleting: false })
  }

  render() {
    if (this.props.user.username === this.props.comment.author.username) {
      return (
        <div className="comment-button-container">
          <button onClick={this.toggleEdit}>Edit</button>
          <button
            onClick={() => this.handleDelete(this.props.comment.id)}
          >Delete</button>
          <div>
            {
              this.state.editing
                ? <EditCommentPopout comment={this.props.comment} toggle={this.toggleEdit} />
                : null
            }
          </div>
        </div>
      );
    }
    return (
      null
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { deleteComment, checkUser })(CommentOptions);