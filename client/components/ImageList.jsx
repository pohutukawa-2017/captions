import React from 'react'
import {connect} from 'react-redux'

import ImageThumbnail from './ImageThumbnail'

function ImageList (props) {
  function createListImage () {
    return props.images.map((image, key) => {
      return (
        <div key={key} className='image-container'>
          <ImageThumbnail id={image.id} img_url={image.path} />
        </div>
      )
    })
  }
  return (
    <div className='listings-container'>
      {createListImage()}
    </div>
  )
}

function mapStateToProps (state) {
  console.log('this is state', state)
  return {
    images: state.images

  }
}

export default connect(mapStateToProps)(ImageList)
