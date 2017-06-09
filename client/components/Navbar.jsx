import React from 'react'
import {connect} from 'react-redux'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        <a href='/'><img src='/images/captions-logo.jpg' /></a>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>

          <ul className='nav navbar-nav navbar-right'>
            <li><a href='/register'>Register</a></li>
            <li><a href='/login'>Sign in</a></li>
            {props.auth.isAuthenticated && (<li>Hi {props.auth.user.username}!</li>)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar)
