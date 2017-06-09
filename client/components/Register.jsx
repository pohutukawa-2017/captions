import React from 'react'
import {connect} from 'react-redux'

import {loginUser, loginError} from '../actions'
import ErrorMessage from './ErrorMessage'
import {registerUrl} from '../api'

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

  render () {
    return (
      <div className='login-page'>
        <div>
          <h2>Register an Account</h2>
          <p><input className='form-control' name='username' onChange={this.handleChange} placeholder='Username' /></p>
          <p><input className='form-control' type='password' name='password' onChange={this.handleChange} placeholder='Password' /></p>
          <p><input className='form-control' type='password' name='confirm' onChange={this.handleChange} placeholder='Confirm Password' /></p>
          <p><input className='form-control' name='profilePic' onChange={this.handleChange} placeholder='Profile Pic Url' /></p>
          <p><button className='btn btn-primary' onClick={this.handleClick}>Register</button></p>
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
