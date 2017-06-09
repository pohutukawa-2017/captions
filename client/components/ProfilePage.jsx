import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getProfile} from '../actions'
import ErrorMessage from './ErrorMessage'

class ProfilePage extends React.Component {
  componentDidMount () {
    const userId = Number(this.props.match.params.id)
    if (this.props.profile.id !== userId) {
      this.props.getProfile(userId, `/profile/${userId}`)
    }
  }

  render () {
    return (
      <div className='profile-page'>
        <div className='profile-form'>
          <h2>Profile Page</h2>
          <p>Username: {this.props.profile.username}</p>
          <p><img className='profile-image' src={this.props.profile.profilePic} width="200"/></p>
          <h3>Images</h3>
          <div className='profile-image-container'>
            {this.props.profile.images.map(image => {
              return (
                <div className='image-wrapper'>
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
    profile: state.profile
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getProfile: (profileId, route, callback) => dispatch(getProfile(profileId, route, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
