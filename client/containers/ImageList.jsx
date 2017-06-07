import React, {Component} from 'react'
import ImageThumbnail from '../components/ImageThumbnail'
import {connect} from 'react-redux'

class ImageList extends Component {

  createListImage () {
    return this.props.images.map((image, key) => {
      return (
        <div key={key} className='image-container'>
          <ImageThumbnail />
        </div>
      )
    })
  }

  render () {
    return (
      <div className='listings-container'>
        {this.createListImage()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageList)
