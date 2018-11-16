import React from 'react'

export default function Slider({ dogs, currentIndex }) {
  switch (currentIndex) {
    case 0:
      return (
        <div className="carousel">
          <img src={dogs[0].imageUrl}
            className="image"></img>
          <img src={dogs[1].imageUrl}
            className="image next"></img>
          <img src={dogs[2].imageUrl}
            className="image prev"></img>
        </div>
      )
    case 1:
      return (
        <div className="carousel">
          <img src={dogs[0].imageUrl}
            className="image prev"></img>
          <img src={dogs[1].imageUrl}
            className="image"></img>
          <img src={dogs[2].imageUrl}
            className="image next"></img>
        </div>
      )
    case 2:
      return (
        <div className="carousel">
          <img src={dogs[0].imageUrl}
            className="image next"></img>
          <img src={dogs[1].imageUrl}
            className="image prev"></img>
          <img src={dogs[2].imageUrl}
            className="image"></img>
        </div>
      )
  }
}
