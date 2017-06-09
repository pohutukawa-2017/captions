import React from 'react'
import {connect} from 'react-redux'
import {getImagePath, getCaptionsList} from '../actions/'
import CaptionList from './CaptionList'
import Image from './Image'

class ImageContainer extends React.Component {
  componentDidMount () {
    const imageId = this.props.match.params.id
    this.props.getImagePath(imageId)
    this.props.getCaptionsList(imageId)
  }

  render () {
    return (
      <div className='image-container container'>
        <Image imgUrl={this.props.image} />
        <CaptionList captions={this.props.captions} routerProps={this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.singleImage.path,
    captions: state.captions
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
