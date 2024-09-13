import React from 'react'
import style from './TestimonialComponent.module.css'
const TestimonialComponent = ({review}) => {
    const background ={
        backgroundColor: `${review.bg_color}`
    }
  return (
    <div className={style.box} style={background}>
      <p className={style.comment}>{review.comment}</p>
      <div className={style.identity  }>
        <img src={require(`${review.photo}`)}></img>
        <div>
       <p>{review.name} </p> 
        <p className={style.pos}>{review.pos}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialComponent
