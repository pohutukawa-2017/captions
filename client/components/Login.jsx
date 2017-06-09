import React from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../actions'
import {loginUrl} from '../api'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
    const loginInfo = {
      username: this.state.username.trim(),
      password: this.state.password.trim()
    }
    this.props.loginUser(loginInfo, loginUrl, this.redirectToHomepage)
  }

  redirectToHomepage () {
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='login-page'>
        <div className='login-form'>
          <h2>Login</h2>
          <p><input className='form-control' name='username' onChange={this.handleChange} placeholder='Username' /></p>
          <p><input className='form-control' type='password' name='password' onChange={this.handleChange} placeholder='Password' /></p>
          <p><button className='btn btrn-primary' onClick={this.handleClick}>Login</button></p>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (loginInfo, route, redirect) => dispatch(loginUser(loginInfo, route, redirect))
  }
}

export default connect(null, mapDispatchToProps)(Login)
