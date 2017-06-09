import React from 'react'

import AddImage from './AddImage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './Navbar'
import ImageList from './ImageList'
import AddCaptionContainer from './AddCaptionContainer'
import ImageCaption from './ImageCaption'
import ImageContainer from './ImageContainer'
import Login from './Login'
import Register from './Register'

const App = () => (

  <Router>
    <div className='app'>
      <NavBar />
      <Route exact path='/' component={ImageList} />
      <Switch>
        <Route path='/images/add' component={AddImage} />
        <Route exact path='/images/:id' component={ImageContainer} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/images/:id/add-caption' component={AddCaptionContainer} />
        <Route path='/images/:id/:captionid' component={ImageCaption} />
      </Switch>
    </div>
  </Router>
)

export default App
