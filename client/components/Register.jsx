import React from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'

import {loginUser, loginError} from '../actions'
import ErrorMessage from './ErrorMessage'
import {registerUrl, handleImageUpload} from '../api'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: '',
      profilePic: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.redirectToHomepage = this.redirectToHomepage.bind(this)
    this.onImageDrop = this.onImageDrop.bind(this)
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

  onImageDrop (files) {
    this.setState({
      uploadedFile: files[0]
    })
    handleImageUpload(files[0], (err, res) => {
      if (err) return console.log(err) // TODO: handle error
      this.setState(res)
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
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            {this.state.profilePic &&
              <div>
                <h4>Upload Successful</h4>
              </div>}
              <p><button onClick={this.handleClick}>Register</button></p>
            <div className='error-message'>
              <ErrorMessage />
            </div>
          </div>
        </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (userInfo, route, redirect) => dispatch(loginUser(userInfo, route, redirect)),
    loginError: (message) => dispatch(loginError(message))
  }
}

export default connect(null, mapDispatchToProps)(Register)
