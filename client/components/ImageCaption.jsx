import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  ShareButtons,
  generateShareIcon
} from 'react-share'
import {getImagePath, getCaptionsList} from '../actions/'

const {FacebookShareButton, RedditShareButton} = ShareButtons
const FacebookIcon = generateShareIcon('facebook')
const RedditIcon = generateShareIcon('reddit')
const currentUrl = window.location.href

class ImageCaption extends React.Component {
  componentDidMount () {
    const imageId = this.props.match.params.id
    this.props.getImagePath(imageId)
    this.props.getCaptionsList(imageId)
  }

  render () {
    return (
      <div className='image-caption'>
        <Link to={`/images/${this.props.image.id}`}>
          <img className='image-caption-image' src={this.props.image.path} /></Link>
        <p>{this.props.caption.captionText}</p>
        <FacebookShareButton
          url={currentUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <RedditShareButton
          url={currentUrl}
          windowWidth={660}
          windowHeight={460}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    )
  }
}

ImageCaption.defaultProps = {
  image: {
    id: 0,
    path: ''
  },
  caption: {
    caption_text: ''
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

function mapDispatchToProps (dispatch) {
  return {
    getImagePath: (id) => {
      dispatch(getImagePath(id))
    },
    getCaptionsList: (id) => {
      dispatch(getCaptionsList(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCaption)
