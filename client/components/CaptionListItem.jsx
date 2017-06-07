import React from 'react'
import {Link} from 'react-router-dom'

function CaptionListItem (props) {
  return (
    <Link to={`/images/${props.image_id}/${props.id}`}><p>{props.caption}</p></Link>
  )
}

export default CaptionListItem
