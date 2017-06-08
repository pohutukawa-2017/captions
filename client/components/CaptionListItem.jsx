import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {deleteCaption} from '../actions'

function CaptionListItem (props) {
  function handleClick () {
    props.dispatch(deleteCaption(props.id, props.imageId))
  }
  return (
    <div>
      <p>
        <Link to={`/images/${props.imageId}/${props.id}`}>
          {props.caption}
        </Link>
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default connect()(CaptionListItem)
