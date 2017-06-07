import React from 'react'
import {connect} from 'react-redux'

import {loginUser} from '../actions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
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
    this.props.loginUser(loginInfo)
  }

  render () {
    return (
      <div className='login-page'>
        <input name='username' onChange={this.handleChange} placeholder='Username' />
        <input type='password' name='password' onChange={this.handleChange} placeholder='Password' />
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: loginInfo => dispatch(loginUser(loginInfo))
  }
}

export default connect(null, mapDispatchToProps)(Login)
