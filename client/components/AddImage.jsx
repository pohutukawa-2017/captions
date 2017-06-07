import React from 'react'
import { connect } from 'react-redux'
import { storePicture } from '../actions'

class UploadButton extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      error: null,
      addedImage: '',
      confirmUpload: ''
    }
  }

  uploadWidget () {
    cloudinary.openUploadWidget({cloud_name: 'dboovyrqb', upload_preset: 'p8w4fgph', tags: ['test']},
      (error, result) => {
        this.setState({ addedImage: result[0].url })
        this.props.storeIt(result[0].url)
        // Todo handle error
      })
  }

  render () {
    return (
      <div>
        <img src={this.state.addedImage} />
        <button onClick={this.uploadWidget.bind(this)} className='upload-button'>
            Add Image
        </button>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    storeIt: () => {
      const action = storePicture()
      dispatch(action)
    }
  }
}

function mapStateToProps (state) {
  return {
    
  }
}

export default connect(null, mapDispatchToProps)(UploadButton)
