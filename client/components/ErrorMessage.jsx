import React from 'react'
import {connect} from 'react-redux'

const ErrorMessage = (props) => {
  return (
    <div>
      <p className='error'>{props.message}</p>
      <p className='error'>{props.authMessage}</p>
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
