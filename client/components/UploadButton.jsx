import React, {Component} from 'react'

class UploadButton extends Component {
  uploadWidget () {
    cloudinary.openUploadWidget({cloud_name: 'dboovyrqb', upload_preset: 'p8w4fgph', tags: ['test']},
      function (error, result) {
        console.log(result[0].url)
      })
  }

  render () {
    return (
      <button onClick={this.uploadWidget.bind(this)} className='upload-button'>
          Add Image
      </button>
    )
  }
}
export default UploadButton
