import React from 'react'
import { connect } from 'react-redux'

class ImageCaption extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this.props.image)
    const id = Number(this.props.match.params.captionid)
    const singleCap = this.props.captionsList.find((caption) => {
      return caption.id === id
    })
    return (
      <div className='image-caption'>
        <img src={this.props.image.path} />
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
