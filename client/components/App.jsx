import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import ImageList from './imageList'
import ImageCaption from './ImageCaption'
import ImageContainer from './ImageContainer'
import AddCaptionContainer from './AddCaptionContainer'

const App = () => (
  <Router>
    <div className='app'>
      <Navbar />
      <Route exact path='/' component={ImageList} />
      <Switch>
        <Route exact path="/images/:id" component={ImageContainer} />
        <Route path="/images/:id/add-caption" component={AddCaptionContainer} />
        <Route path='/images/:id/:captionid' component={ImageCaption} />
      </Switch>
    </div>
  </Router>
)

export default App
