import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
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
