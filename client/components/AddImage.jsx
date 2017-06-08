import React from 'react'
import {connect} from 'react-redux'
import {uploadImage} from '../actions'

class AddImage extends React.Component {

  render () {
    return (
      <div>
        <img src={this.state.addedImage} />
        <button onClick={this.props.uploadImage} className='upload-button'>
            Add Image
        </button>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    uploadImage: () => {
      dispatch(uploadImage())
    }
  }
}

function mapStateToProps (state) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(AddImage)
