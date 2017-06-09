import React from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import {logOut} from '../actions'

const Navbar = (props) => {
  return (
    <div className='navbar-container'>
      <div className='site-name'> <a href='/'><h1>Captions</h1></a></div>
      <div className='site-menu'>
        <ul className='menu'>
          {!props.auth.isAuthenticated && (<li><a href='/register'>Register</a></li>)}
          {!props.auth.isAuthenticated && (<li><a href='/login'>Sign in</a></li>)}
          {props.auth.isAuthenticated && (<li>{'Hi '}
            <Dropdown text={props.auth.user.username}>
              <Dropdown.Menu>
                <Link to={`/users/${props.auth.user.id}`}><Dropdown.Item text='Profile' /></Link>
                <Dropdown.Item text='Logout' onClick={props.logOut} />
              </Dropdown.Menu>
            </Dropdown>
          </li>)}
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

function mapDispatchToProps (dispatch) {
  return {
    logOut: dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
