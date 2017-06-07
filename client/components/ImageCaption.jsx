import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class ImageCaption extends React.Component {
  render () {
    const id = Number(this.props.match.params.captionid)
    const singleCap = this.props.captionsList.find((caption) => {
      return caption.id === id
    })
    return (
      <div className='image-caption'>
        <Link to={`/images/${this.props.image.id}`}> <img src={this.props.image.path} /></Link>
        <p>{singleCap.caption_text}</p>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    image: state.singleImage,
    captionsList: state.captions
  }
}

export default connect(mapStateToProps)(ImageCaption)
