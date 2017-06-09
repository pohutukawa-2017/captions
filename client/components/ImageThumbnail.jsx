import React from 'react'
import {Link} from 'react-router-dom'
import {cropUrl} from '../utils/cloudinary'

const ImageThumbnail = (props) => {
  const url = cropUrl(props.imgUrl)
  return (
    <div className='image-thumbnail-container'>
      <Link to={`/images/${props.id}`}><img src={url} /> </Link>
    </div>
  )
}

export default ImageThumbnail
