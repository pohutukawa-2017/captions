import React from 'react'

function CaptionList (props){
  console.log(props)
  return (
    <div className="captionList">
      <ul>
        {props.captions.map(((item, key) => {
          return(
            <li key={key}>{item.caption_text}</li>
          )
        }))}
      </ul>
    </div>
  )
}

export default CaptionList