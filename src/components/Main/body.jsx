import React, { Component } from 'react';
import axios from 'axios';

import MainPhoto from './mainPhoto';
import PhotoCollection from './photoCollection';
class Body extends Component {
  constructor() {
    super()
    this.state = {
      photos: [],
      collection: [],
    }
  }

  componentDidMount() {
    return axios.get('/api/photos')
      .then(response => {
        this.setState({ photos: response.data[0] })
        //pluck out first photo, put the remaining photos into collection
        let collection = response.data.filter(photo => photo.link !== response.data[0].link);
        this.setState({ collection })
      })
  }

  render() {
    return (
      <div className="body">
        <MainPhoto main={this.state.photos} user={this.state.photos.owner}/>
        <PhotoCollection collection={this.state.collection} />
      </div>
    );
  }
}

export default Body;