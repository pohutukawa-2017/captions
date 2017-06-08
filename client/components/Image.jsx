import React from 'react'
import {Link} from 'react-router-dom'

function Image (props) {
  return(
    <div className='image-and-nav-buttons-container'>
      <div className='previous-image'>
        <Link to="/images/2"><img src="/previous-image.png" />
      </Link></div>
      <div className='image'>
        <img src={props.imgUrl} />
      </div>
      <div className='next-image'>
        <Link to="/images/2"><img src="/next-image.png" />
      </Link></div>
    </div>
  )
}

export default Image
