import React, { Component } from 'react'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: [
        {breed: 'Corgi', description: 'Origin: Wales', imageUrl: 'https://d3qvqlc701gzhm.cloudfront.net/thumbs/4ffc0db4e2fdb1c2bbb21218e1f77a78e154961df90dc485de5e7121fd99e431-750.jpg'},
        {breed: 'German Shepherd', description: 'Origin: Germany', imageUrl: 'http://texasworkingshepherds.com/wp-content/uploads/2013/09/German-SHepherd.png'},
        {breed: 'Golden Retriever', description: 'Origin: Scotland', imageUrl: 'http://images6.fanpop.com/image/photos/41400000/cute-golden-retrievers-eating-ice-cream-golden-retreivers-41435145-500-500.jpg'}
      ],
      currentIndex: 0
    }
  }

  render() {
    const { dogs, currentIndex } = this.state
    return (
      <div className="container">
        <h1 className="title">{dogs[currentIndex].breed}</h1>
        <p className="description">{dogs[currentIndex].description}</p>
        <div className="row">
          <div className="col-8 mx-auto">
            // Images
          </div>
        </div>
      </div>
    )
  }
}
