import React from 'react'
import {saveNewCaption} from '../actions'
import {connect} from 'react-redux'

class AddCaption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.addCaption(this.state.text)
  }

  render () {
    return (
      <div className="add-caption">
        <textarea name="text"
          className="text-box"
          placeholder="Insert Caption"
          onChange={this.handleChange}/>
        <button type="submit"
          onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCaption: (captionText) => {
      dispatch(saveNewCaption(this.state, (newCaptionId) => {
        this.props.navigate(`/images/${this.props.imageId}/${newCaptionId}`)
      }))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddCaption)
