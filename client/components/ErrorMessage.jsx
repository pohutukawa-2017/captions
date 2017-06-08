import React from 'react'
import {connect} from 'react-redux'

const ErrorMessage = (props) => {
  return (
    <p>{props.message}</p>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.auth.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
