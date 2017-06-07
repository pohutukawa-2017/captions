import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ImageList from './ImageList'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Route exact path='/' component={ImageList} />
      </div>
    </Router>
  )
}

export default App
