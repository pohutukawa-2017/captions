import React from 'react'
import {connect} from 'react-redux'

const ErrorMessage = (props) => {
  return (
    <div className='error'>
      <p>{props.message}</p>
      <p>{props.authMessage}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.error,
    authMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
