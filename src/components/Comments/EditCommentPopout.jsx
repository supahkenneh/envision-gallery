import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editComment } from '../../actions/commentActions';

class EditCommentPopout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleContentInput = (event) => {
    this.setState({ content: event.target.value })
  }

  submitEdit = id => {
    this.props.editComment(id, this.state);
    this.props.toggle();
  }

  render() {
    return (
      <div className="edit-comment-container">
        <textarea
          onChange={this.handleContentInput}
          defaultValue={this.props.comment.content}
        ></textarea>
        <button
          className="small-action-button"
          onClick={() => this.submitEdit(this.props.comment.id)}
        >Edit</button>
      </div>
    );
  }
}

export default connect(null, { editComment })(EditCommentPopout);