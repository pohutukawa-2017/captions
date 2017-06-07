import React from 'react'
import {getNextImage} from '../actions'

function NextImage (props) {
  return(
    <div>
      <img className='next-image' src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" onClick={() => props.getNextImage(props.image)} />
    </div>
  )
}

export default NextImage
