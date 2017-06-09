import React from 'react'
import {connect} from 'react-redux'

import {getImagePath, getCaptionsList, fetchImages} from '../actions'
import CaptionList from './CaptionList'
import Image from './Image'

class ImageContainer extends React.Component {
  componentDidMount () {
    this.getImageAndCaptions(this.props.match.params.id)
  }

  getImageAndCaptions (imageId) {
    this.props.getImagePath(imageId)
    this.props.getCaptionsList(imageId)
    this.props.fetchImages()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.getImageAndCaptions(nextProps.match.params.id)
    }
  }

  render () {
    return (
      <div className='image-container container'>
        <Image image={this.props.image} images={this.props.images} />
        <CaptionList captions={this.props.captions} routerProps={this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.singleImage,
    captions: state.captions,
    images: state.images
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getImagePath: (id) => {
      dispatch(getImagePath(id))
    },
    getCaptionsList: (id) => {
      dispatch(getCaptionsList(id))
    },
    fetchImages: () => {
      dispatch(fetchImages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
