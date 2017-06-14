import React from 'react'
import CaptionListItem from './CaptionListItem'

function CaptionList (props) {
  function handleClick () {
    const imageId = props.routerProps.match.params.id
    props.routerProps.history.push(`/images/${imageId}/add-caption`)
  }
  return (
    <div className='row'>
      <div className='col-md-2'></div>
    <div className='caption-list col-md-8'>
      <button className='btn btn-primary new-caption' onClick={handleClick}>New Caption</button>
      {props.captions.map((item, key) => {
        return (
          <div className='caption' key={key}>
            <CaptionListItem imageId={item.imageId} id={item.id} caption={item.captionText} authorId={item.userId} />
          </div>
        )
      })}
    <div className='col-md-2'></div>
    </div>
    </div>
  )
}

export default CaptionList
