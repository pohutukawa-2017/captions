import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='site-name'>
        <h1>Captions</h1>
      </div>
      <div className='site-menu'>
        <ul className='menu'>
          <li><a href='/register'>Register</a></li>
          <li><a href='/login'>Sign in</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
