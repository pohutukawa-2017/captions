import React from 'react'
import {saveNewCaption} from '../actions'
import {connect} from 'react-redux'

class AddCaption extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      //user_id: this.props.userId,
      imageId: this.props.routerProps.match.params.id,
      text: ''
    }
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
    this.props.dispatch(saveNewCaption(this.state, newCaptionId => {
      this.props.routerProps.history.push(`/images/${this.state.imageId}/${newCaptionId}`)
    }))
  }

  render(){
    return(
      <div className="add-caption">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" placeholder="Insert Caption" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddCaption)

