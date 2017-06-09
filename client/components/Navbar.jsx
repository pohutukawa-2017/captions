import React from 'react'
import {connect} from 'react-redux'

const Navbar = (props) => {
  return (
    <div className='navbar-container'>
      <div className='site-name'> <a href='/'><h1>Captions</h1></a></div>
      <div className='site-menu'>
        <ul className='menu'>
          {!props.auth.isAuthenticated && (<li><a href='/register'>Register</a></li>)}
          {!props.auth.isAuthenticated && (<li><a href='/login'>Sign in</a></li>)}
          {props.auth.isAuthenticated && (<li>Hi {props.auth.user.username}!</li>)}
        </ul>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar)
