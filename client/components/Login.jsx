import React from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../actions'
import ErrorMessage from './ErrorMessage'

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
    this.props.loginUser(loginInfo, this.redirectToHomepage)
  }

  redirectToHomepage () {
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='login-page'>
        <input name='username' onChange={this.handleChange} placeholder='Username' />
        <input type='password' name='password' onChange={this.handleChange} placeholder='Password' />
        <button onClick={this.handleClick}>Login</button>
        <ErrorMessage />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (loginInfo, redirect) => dispatch(loginUser(loginInfo, redirect))
  }
}

export default connect(null, mapDispatchToProps)(Login)
