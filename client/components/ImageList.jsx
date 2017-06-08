import React from 'react'
import {connect} from 'react-redux'

import ImageThumbnail from './ImageThumbnail'


function ImageList (props) {
  componentDidMount () {
    props.fetchImages()
  }

  return (
    <div className='listings-container'>
      {props.images.map((image) => {
        return (
          <div key={image.id}>
            <ImageThumbnail id={image.id} imgUrl={image.path} />
          </div>
        )
      })}
    </div>
  )
}

function fetchImages () {
  return (dispatch) => {
    dispatch(requestImages())
    request
     .get('/api/v1/images')
     .end((err, res) => {
       if (err) {
         dispatch(showError(err.message))
         return
       }
       dispatch(receiveImages(res.body))
     })
  }
}

function mapStateToProps (state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageList)
