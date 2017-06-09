import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logOut} from '../actions'

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
          <Link to='/'> <img src='/images/captions-logo.jpg' /> </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            {props.auth.isAuthenticated && (<li><a href='/images/add'>Add image</a></li>)}
            {!props.auth.isAuthenticated && (<li><a href='/login'>Add image</a></li>)}
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            {!props.auth.isAuthenticated && (<li><a href='/register'>Register</a></li>)}
            {!props.auth.isAuthenticated && (<li><a href='/login'>Sign in</a></li>)}
            {props.auth.isAuthenticated && (
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'> {'Hi, ' + props.auth.user.username}</a>
                <ul className='dropdown-menu'>
                  <li><Link to={`/users/${props.auth.user.id}`}>Profile</Link></li>
                  <li><Link to='#' onClick={props.logOut}> Logout </Link></li>
                </ul>
              </li>
            )}
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

function mapDispatchToProps (dispatch) {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
