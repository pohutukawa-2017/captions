import React from 'react'
import ImageThumbnail from './ImageThumbnail'

class ImageList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: []
    }
  }

  render () {
    return (
      <div className='listings-container'>
        {this.state.images.map((image, key) => {
          return (
            <div key={key} className='image-container'>
              <ImageThumbnail />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ImageList
