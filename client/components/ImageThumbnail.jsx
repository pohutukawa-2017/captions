import React from 'react'
import {Link} from 'react-router-dom'

const ImageThumbnail = (props) => {
  return (
    <div className='image-thumbnail-container'>
      <Link to={`/images/${props.id}`}><img src={props.img_url} /> </Link>
    </div>
  )
}

export default ImageThumbnail
