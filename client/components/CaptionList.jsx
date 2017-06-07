import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function CaptionList (props) {
  console.log(props)
  return (
    <div className='captionList'>
      <ul>
        {props.captions.map((item, key) => {
          return (
            <li key={key}>{item.caption_text}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default CaptionList
