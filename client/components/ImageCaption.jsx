import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ImageCaption extends React.Component {
  render () {
    return (
      <div className='image-caption'>
        <Link to={`/images/${this.props.image.id}`}> <img src={this.props.image.path} /></Link>
        <p>{this.props.caption.caption_text}</p>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const captionId = Number(ownProps.match.params.captionid)
  const singleCap = state.captions.find((caption) => {
    return caption.id === captionId
  })
  return {
    image: state.singleImage,
    caption: singleCap
  }
}

export default connect(mapStateToProps)(ImageCaption)
