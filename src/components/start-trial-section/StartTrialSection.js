import React from 'react'
import StartTrial from '../buttons/StartTrail/StartTrial'
import style from './StartTrialSection.module.css'
const StartTrialSection = () => {
  return (
    <div>
 <div className={style.input_area}>
        <input placeholder='Name' style={{marginRight:"10px"}} />
        <input placeholder='Official email ID'style={{marginRight:"10px"} }/>
       
    <StartTrial/>
      </div>
      <div className={style.input_area}>
        <p>30 Days free trial </p>
        <p className='dot'>  </p>
        <p>Upto 10 users</p>
      </div>
    </div>
  )
}

export default StartTrialSection
