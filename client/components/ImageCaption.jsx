import React from 'react'
import { connect } from 'react-redux'

class ImageCaption extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.image)
    const id = this.props.match.params.id - 1
    return (
      <div className='image-caption'>
        <img src={`${this.props.captionsList[2].image}`} />
        <p>{this.props.captionsList[id].caption}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.getImage.singleImage,
    captionsList: state.captions.captions
  }
}

export default connect(mapStateToProps)(ImageCaption)
