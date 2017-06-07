import React from 'react'
import {Link} from 'react-router-dom'

const ImageThumbnail = (props) => {
  return (
    <div className='image-thumbnail-container'>
      <Link to={props.id}><img src={props.imgUrl} /> </Link>
    </div>
  )
}

export default ImageThumbnail
