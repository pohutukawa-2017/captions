import React from 'react'
import {connect} from 'react-redux'

import {fetchImages} from '../actions'
import ImageThumbnail from './ImageThumbnail'

class ImageList extends React.Component {
  componentDidMount () {
    this.props.fetchImages()
  }

  render () {
    return (
      <div className='container'>
        <div className='listings-container'>
          {this.props.images.map((image) => {
            return (
              <div key={image.id} className='image-wrapper col-md-3'>
                <ImageThumbnail id={image.id} imgUrl={image.path} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchImages: () => {
      dispatch(fetchImages())
    }
  }
}

function mapStateToProps (state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)
