import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {deleteCaption} from '../actions'

function CaptionListItem (props) {
  function handleClick (id) {
    props.dispatch(deleteCaption(props.id, id))
  }
  return (
    <div>
      <Link to={`/images/${props.imageId}/${props.id}`}><p>{props.caption}</p></Link>
      <button className='btn btn-xs btn-danger' onClick={() => handleClick(props.imageId)}>Delete</button>
    </div>
  )
}

export default connect()(CaptionListItem)
