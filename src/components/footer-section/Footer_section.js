import React from 'react'
import style from './Footer_section.module.css'
import StartTrial from '../buttons/StartTrail/StartTrial'
import logo from'../Navbar/nav_images/logo.jpeg'
const Footer_section = () => {
  return (
    <div>
    <div className={style.container}>
      <div>
        <h1>Manage your travel and expenses the smart way!</h1>
        
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
    </div>
    <div className={style.contact}>
    <img  className={style.logo_img} src={logo }></img>
    <div className={style.contact_details}>
        <p> <span ><img src={require('./footer_section-images/addrs.jpeg')}></img></span> Address</p>
        <p ><span ><img src={require('./footer_section-images/phone.jpeg')}></img></span> +91 1234567890</p>
        <div className={style.social_media}>
            Social Media
            <img src={require('./footer_section-images/linkdein.jpeg')}></img>
            <img src={require('./footer_section-images/youtube.jpeg')}></img>
            <img src={require('./footer_section-images/insta.jpeg')}></img>
        </div>
    </div>
    </div>
    <div className={style.line} > </div>
    <div className={style.last_section}>
    <div className={style.tags}>
        <p>Blogs</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Integrations</p>
    </div>
    <div className={style.copyright}>
        <p>Copyright © 2024 • ExpenseBook</p>
    </div>
    </div>
    </div>
  )
}

export default Footer_section
