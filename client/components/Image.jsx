import React from 'react'

function Image (props) {
  const regex = /upload/
  const url = typeof props.imgUrl === 'string' ? props.imgUrl.replace(regex, '/upload/c_crop,g_custom') : props.imgUrl
  return (
    <div>
      <img className='image' src={url} />
    </div>
  )
}

export default Image
