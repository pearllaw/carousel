import React, { Component } from 'react'
import Slider from './slider'

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
    this.autoplay = this.autoplay.bind(this)
    this.timeout = null
    this.isTransitioning = false
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  autoplay() {
    let timeout = this.timeout = setTimeout(() => {
      if (this.timeout !== timeout) return
      this.next()
    }, 3000)
  }

  transition(step) {
    if (this.isTransitioning) return
    this.isTransitioning = !!setTimeout(() => {
      this.isTransitioning = false
      this.autoplay()
    }, 500)
    this.setState({ currentIndex: step })
  }

  handlePrev() {
    const { currentIndex, dogs } = this.state
    return currentIndex ? currentIndex - 1 : dogs.length - 1
  }

  handleNext() {
    const { currentIndex, dogs } = this.state
    return currentIndex < dogs.length - 1 ? currentIndex + 1 : 0
  }

  prev() {
    this.transition(this.handlePrev())
  }

  next() {
    this.transition(this.handleNext())
  }

  componentDidMount() {
    this.autoplay()
  }

  render() {
    const { dogs, currentIndex } = this.state
    return (
      <div className="container">
        <h1 className="title">{dogs[currentIndex].breed}</h1>
        <p className="description">{dogs[currentIndex].description}</p>
        <div className="row">
          <div className="col-8 mx-auto">
            <Slider dogs={dogs} currentIndex={currentIndex} />
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto text-center">
            <div className="indicators">
              <i className={currentIndex === 0 ? 'fas fa-circle' : 'far fa-circle'} id="dot"></i>
              <i className={currentIndex === 1 ? 'fas fa-circle' : 'far fa-circle'} id="dot"></i>
              <i className={currentIndex === 2 ? 'fas fa-circle' : 'far fa-circle'} id="dot"></i>
            </div>
          </div>
        </div>
        <div className="controls">
          <i className="control prev fas fa-angle-left fa-5x"></i>
          <i className="control next fas fa-angle-right fa-5x"></i>
        </div>
      </div>
    )
  }
}
