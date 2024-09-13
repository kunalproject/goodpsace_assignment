import React from 'react'
import './MidComponents.css'
const MidComponents = ({source, heading,content}) => {
  return (
    <div className='section'>
      <div className='head'>
        <img src={require(`${source}`)} ></img>
        <span >{`${heading}`}</span>
        
      </div>
      <div className='content'>{content}</div>
    </div>
  )
}

export default MidComponents

