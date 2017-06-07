import React from 'react'

class UploadButton extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      error: null,
      addedImage: ''
    }
  }

  uploadWidget () {
    cloudinary.openUploadWidget({cloud_name: 'dboovyrqb', upload_preset: 'p8w4fgph', tags: ['test']},
      (error, result) => {
        this.setState({ addedImage: result[0].url })
      })
  }

  render () {
    return (
      <div>
        {console.log(this.state.addedImage)}
        <img src={this.state.addedImage} />
        <button onClick={this.uploadWidget.bind(this)} className='upload-button'>
            Add Image
        </button>
      </div>
    )
  }
}
export default UploadButton

// {if (!!result[0].url) {<img src={result[0].url} />} }
