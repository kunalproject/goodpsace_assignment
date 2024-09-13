import React from 'react'
import './Header.css'
import StartTrial from '../buttons/StartTrail/StartTrial'
const Header = () => {
  return (
    <div className='container'>
      <div className='heading'>
        <p className='heading-1'>The World’s Most Configurable</p>
        <p className='heading-2'>Travel & Expense Management Software</p>
        <p className='heading-3'>
            Configure any rule. Enable a world class mobile experience for your users. Get seamless <br></br>reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel <br></br> expenses. Open APIs to connect with external systems.
        </p>
        
      </div>
      <div className='input-area'>
        <input placeholder='Name' style={{marginRight:"10px"}} />
        <input placeholder='Official email ID'style={{marginRight:"10px"} }/>
       
    <StartTrial/>
      </div>
      <div className='condition'>
        <p>30 Days free trial </p>
        <p className='dot'>  </p>
        <p>Upto 10 users</p>
      </div>
       <div className='hotjar'>
        <p>USED BY OVER 50 ENTERPRISES</p>
        <img src={require('./header-images/hotjar.jpeg')} width={998}/>
       </div>
      
    </div>


  )
}

export default Header
