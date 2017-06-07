import React from 'react'
import CaptionListItem from './CaptionListItem'

function CaptionList (props){
  console.log(props)
  return (
    <div className="caption-list">
    
        {props.captions.map(((item, key) => {
          return(
            <div>
              <CaptionListItem caption={item.caption_text} />
            </div>
      
          )
        }))}
      
    </div>
  )
}

export default CaptionList