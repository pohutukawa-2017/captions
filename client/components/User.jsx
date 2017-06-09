import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getUser} from '../actions'
import ErrorMessage from './ErrorMessage'

class User extends React.Component {
  componentDidMount () {
    const userId = Number(this.props.match.params.id)
    if (this.props.user.id !== userId) {
      this.props.getUser(userId, `/users/${userId}`)
    }
  }

  render () {
    return (
      <div className='user-page'>
        <div className='user-form'>
          <h2>{this.props.user.username}</h2>
          <p><img className='user-image' src={this.props.user.profilePic} /></p>
          <h3>Images</h3>
          <div className='user-image-container'>
            {this.props.user.images.map((image) => {
              return (
                <div key={image.id} className='image-wrapper'>
                  <div className='image-thumbnail-container'>
                    <Link to={`/images/${image.id}`}>
                      <img src={image.path} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='error-message'>
            <ErrorMessage />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUser: (userId, route, callback) => dispatch(getUser(userId, route, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
