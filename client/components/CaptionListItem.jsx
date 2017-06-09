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
      {props.userId === props.authorId && <button className='btn btn-xs btn-danger' onClick={() => handleClick(props.imageId)}>Delete</button>}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    userId: state.auth.user.id
  }
}

export default connect(mapStateToProps)(CaptionListItem)
