import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import {uploadImage} from '../actions'

class AddImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      uploadDone: false
    }
  }
  componentWillReceiveProps () {
    this.setState({
      uploadDone: true
    })
  }

  render () {
    return (
      <div>
        {this.state.uploadDone && (<Redirect to={`/images/${this.props.addedImage.id}`} />)}
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
    addedImage: state.imageUpload
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImage)
