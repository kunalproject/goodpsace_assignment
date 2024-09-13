import React from 'react'
import style from './Integrations.module.css'
import IntegrationComponent from './IntegrationComponent'
const Integrations = () => {
    const arr=[
        {
            source:'./integrations-images/image-3.jpeg',
            heading :"HRMS Systems",
            content_1:"We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.",
            content_2:"We are already deeply integrated with PeopleStrong and others are coming up",
            bg_color:'#F9F2E4'
        },
        {
            source:'./integrations-images/image-2.jpeg',
            heading :"Finance Systems",
            content_1:"Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.",
            content_2:"Open APIs available to connect.",
            bg_color:"#F0F6EF"
        },
        {
            source:'./integrations-images/image-1.jpeg',
            heading :"Single Sign-on Systems",
            content_1:"We can integrate to ensure that your users don’t have to log in multiple times into different logins",
            content_2:"SSO is possible with any system that offers it.",
            bg_color:"#E5EBFB"
        }
    ]
  return (
    <div className={style.container}>
        <p className={style.caption}>intergrations</p>
        <img src={require('./integrations-images/types-img.jpeg') } width={"772px"}></img>
    <div className={style.header}>
        {
            arr.map((elem)=>(
            <IntegrationComponent source ={elem.source} heading={elem.heading} content_1={elem.content_1} content_2={elem.content_2} bg_color={elem.bg_color}/>
            ))
        }
    </div>
    </div>

  )
}

export default Integrations
