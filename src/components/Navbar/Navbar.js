import React, { useState } from 'react'
import StartTrial from '../buttons/StartTrail/StartTrial'
import './Navbar.css'
const Navbar = () => {
  const[navbutton,setnavbutton]=useState(true);
  return (
    <div className='nav-bar'>
      <div className='logo'>
     <img src={require('./nav_images/logo.jpeg')}></img> 

      </div>
       <button className='toggle-btn' onClick={(()=>(setnavbutton(!navbutton)))}><img src={require('./nav_images/side-bar.jpeg')}></img></button>
      {

        (navbutton)&&(  <div className='side-section'>
       <p className='text-style'>Blogs</p>
       <p className='text-style'>Features</p>
       <p className='text-style'>Pricing</p>
       <p className='text-style'>Integrations</p>
       
        <StartTrial/>

      </div>)

      }
     

    </div>
  )
}

export default Navbar
