import React from 'react'
import {Link} from 'react-router-dom'

const ImageThumbnail = (props) => {
  const regex = /upload/
  const url = typeof props.imgUrl === 'string' ? props.imgUrl.replace(regex, '/upload/c_crop,g_custom') : props.imgUrl
  return (
    <div className='image-thumbnail-container'>
      <Link to={`/images/${props.id}`}><img src={url} /> </Link>
    </div>
  )
}

export default ImageThumbnail
