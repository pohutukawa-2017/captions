import React from 'react'
import {connect} from 'react-redux'

import {loginUrl} from '../api'
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
          <p>
            <input name='username'
              placeholder='Username'
              onChange={this.handleChange} />
          </p>
          <p>
            <input name='password'
              placeholder='Password'
              type='password'
              onChange={this.handleChange} />
          </p>
          <p><button onClick={this.handleClick}>Login</button></p>
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
    loginUser: (loginInfo, route, redirect) => {
      dispatch(loginUser(loginInfo, route, redirect))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
