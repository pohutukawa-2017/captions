import React from 'react'
import {Link} from 'react-router-dom'

function Image (props) {
  console.log(props)
    return(
        <div>
          <img className='image' src={props.imgUrl} />
        </div>
    )
}

export default Image