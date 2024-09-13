import React from 'react'
import style from './IntegrationsComponent.module.css'
const IntegrationComponent = ({source ,heading,content_1,content_2,bg_color}) => {
    const background ={
        backgroundColor: `${bg_color}`
    }
  return (
    <div className={style.box} style={background}>
        <div className={style.container}>
            <img src={require(`${source}`)}></img>
            <p>{heading}</p>
        </div>
        <div className={style.heading}>
            <p>{content_1}</p>
            
            <p>{content_2}</p>
        </div>

      
    </div>
  )
}

export default IntegrationComponent
