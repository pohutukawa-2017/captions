import React from 'react'
import {Link} from 'react-router-dom'

function isWithinBounds (index, arr) {
  return index >= 0 && (index < arr.length)
}

function Image (props) {
  const imageIndex = props.images.findIndex((image) => props.image.id === image.id)
  const prevArrayId = imageIndex - 1
  const nextArrayId = imageIndex + 1

  // Assign image object if the prev/next index is within bounds of the array, otherwise assign null
  const prevImage = isWithinBounds(prevArrayId, props.images) ? props.images[prevArrayId] : null
  const nextImage = isWithinBounds(nextArrayId, props.images) ? props.images[nextArrayId] : null

  return (
    <div className='image-and-nav-buttons-container container'>
      <div className='row'>
      <div className='previous-image col-md-2'>
        {prevImage &&
          <Link to={`/images/${prevImage.id}`}><img className='arrow' src='/previous-image.png' /></Link>
        }
      </div>
      <div className='image col-md-8'>
        <img src={props.image.path} />
      </div>
      <div className='next-image col-md-2'>
        {nextImage &&
          <Link to={`/images/${nextImage.id}`}><img className='arrow' src='/next-image.png' /></Link>
        }
      </div>
    </div>
  </div>
  )
}

export default Image
