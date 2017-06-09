import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'> <a href='/'><img className='site-logo' src='/images/captions-logo.jpg' /></a></div>
          <div className='col-md-6'>
            <div id='navbar' className='navbar-collapse collapse navbar-right'>
              <ul className='nav navbar-nav'>
                <li><a href='/register'>Register</a></li>
                <li><a href='/signin'>Sign in</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
