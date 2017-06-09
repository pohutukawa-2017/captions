import React from 'react'
import {Link} from 'react-router-dom'

function isWithinBounds (index, arr) {
  return index >= 0 && (index < arr.length)
}

function Image (props) {
  const regex = /upload/
  const url = typeof props.image.path === 'string' ? props.image.path.replace(regex, '/upload/c_crop,g_custom') : props.image.path
  const imageIndex = props.images.findIndex((image) => props.image.id === image.id)
  const prevArrayId = imageIndex - 1
  const nextArrayId = imageIndex + 1

  // Assign image object if the prev/next index is within bounds of the array, otherwise assign null
  const prevImage = isWithinBounds(prevArrayId, props.images) ? props.images[prevArrayId] : null
  const nextImage = isWithinBounds(nextArrayId, props.images) ? props.images[nextArrayId] : null

  return (
    <div className='image-and-nav-buttons-container'>
      <div className='previous-image'>
        {prevImage &&
          <Link to={`/images/${prevImage.id}`}><img src='/previous-image.png' /></Link>
        }
      </div>
      <div className='image'>
        <img src={url} />
      </div>
      <div className='next-image'>
        {nextImage &&
          <Link to={`/images/${nextImage.id}`}><img src='/next-image.png' /></Link>
        }
      </div>
    </div>
  )
}

export default Image
