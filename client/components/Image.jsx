import React from 'react'
import {Link} from 'react-router-dom'

function Image (props) {
    return(
        <div>
          <img src={props.imagePath} />
        </div>
    )
}

export default Image