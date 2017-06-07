import React from 'react'
import { connect } from 'react-redux'

class ImageCaption extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const id = Number(this.props.match.params.captionid)
    const singleCap = this.props.captionsList.find((caption) => {
      return caption.id === id
    })
    return (
      <div className='image-caption'>
        <img src={this.props.image.singleImage} />
        <p>{singleCap.caption_text}</p>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    image: state.getImage,
    captionsList: state.getCaptions.captions
  }
}

export default connect(mapStateToProps)(ImageCaption)
