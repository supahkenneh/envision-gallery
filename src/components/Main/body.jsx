import React, { Component } from 'react';
import axios from 'axios';
class Body extends Component {
  state = {}

  componentDidMount() {
    return axios.get('/api')
      .then(response => {
        console.log(response);
      })
  }
  render() {
    return (
      <div className="body">
        <div>body</div>
      </div>
    );
  }
}

export default Body;