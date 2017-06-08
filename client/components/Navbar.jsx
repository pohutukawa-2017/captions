import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='site-name'><a href='/'><h1>Captions</h1></a></div>
      <div className='site-menu'>
        <ul className='menu'>
          <li><a href='/register'>Register</a></li>
          <li><a href='/signin'>Sign in</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
