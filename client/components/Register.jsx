import React from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'

import {loginUser, loginError} from '../actions'
import {registerUrl, uploadImage} from '../api'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: '',
      profilePic: '',
      displayUpload: true,
      imageUploading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.redirectToHomepage = this.redirectToHomepage.bind(this)
    this.handleImageDrop = this.handleImageDrop.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    if (this.state.password.trim() !== this.state.confirm) {
      return this.props.loginError('Passwords do not match!')
    }
    const userInfo = {
      username: this.state.username.trim(),
      password: this.state.password.trim(),
      profilePic: this.state.profilePic.trim()
    }
    this.props.loginUser(userInfo, registerUrl, this.redirectToHomepage)
  }

  redirectToHomepage () {
    this.props.history.push('/')
  }

  handleImageDrop (files) {
    this.setState({imageUploading: true})
    uploadImage(files[0], (err, res) => {
      if (err) return this.props.imageError(err.message)
      this.setState({
        profilePic: res,
        displayUpload: false,
        imageUploading: false
      })
    })
  }

  render () {
    return (
      <div className='login-page'>
        <div>
          <h2>Register an Account</h2>
          <p><input name='username' onChange={this.handleChange} placeholder='Username' /></p>
          <p><input type='password' name='password' onChange={this.handleChange} placeholder='Password' /></p>
          <p><input type='password' name='confirm' onChange={this.handleChange} placeholder='Confirm Password' /></p>
          {this.state.displayUpload &&
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.handleImageDrop}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>}

          {this.state.profilePic &&
          <div>
            <h4>Upload Successful</h4>
            <img src={this.state.profilePic} />
          </div>}

          <p><button onClick={this.handleClick} disabled={this.state.imageUploading}>Register</button></p>

        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (userInfo, route, redirect) => dispatch(loginUser(userInfo, route, redirect)),
    loginError: (authMessage) => dispatch(loginError(authMessage)),
    imageError: (error) => dispatch(error(error))
  }
}

export default connect(null, mapDispatchToProps)(Register)
