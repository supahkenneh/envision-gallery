import React, { Component } from 'react';
import axios from 'axios';

import MainPhoto from './mainPhoto';
class Body extends Component {
  constructor() {
    super()
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    return axios.get('/api/photos')
      .then(response => {
        this.setState({ photos: response.data })
      })
  }

  render() {
    return (
      <div className="body">
        <MainPhoto main={this.state.photos} />
      </div>
    );
  }
}

export default Body;