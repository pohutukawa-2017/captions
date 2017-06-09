import React from 'react'

import AddImage from './AddImage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import User from './User'
import Login from './Login'
import NavBar from './NavBar'
import Register from './Register'
import ImageList from './ImageList'
import ImageCaption from './ImageCaption'
import ErrorMessage from './ErrorMessage'
import ImageContainer from './ImageContainer'
import AddCaptionContainer from './AddCaptionContainer'

const App = () => (

  <Router>
    <div className='app'>
      <NavBar />
      <ErrorMessage />
      <Route exact path='/' component={ImageList} />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/users/:id' component={User} />
        <Route path='/register' component={Register} />
        <Route path='/images/add' component={AddImage} />
        <Route exact path='/images/:id' component={ImageContainer} />
        <Route path='/images/:id/add-caption' component={AddCaptionContainer} />
        <Route path='/images/:id/:captionid' component={ImageCaption} />
      </Switch>
    </div>
  </Router>
)

export default App
