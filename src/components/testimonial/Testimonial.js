import React from 'react'
import TestimonialComponent from './TestimonialComponent'
import style from './Testimonial.module.css'

const Testimonial = () => {
    const reviews = [
        {
            comment: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
            photo: './testimonial-images/rohit.jpeg',
            name: "Rohit Mehra",
            pos: "CFO, XYZ",
            bg_color: '#E5EAFB'
        },
        {
            comment: "ExpenseBook has streamlined our travel setup. No more emails, no delays, and no more unknown overruns. Everything is trackable, and the configurability they offer is outstanding.",
            photo: './testimonial-images/alan.jpeg',
            name: "Alan Turing",
            pos: "CFO, ABC",
            bg_color: '#E3F2FA'
        },
        {
            comment: "ExpenseBook has made our travel and expense management seamless. No more manual intervention, everything is automated and well-configured.",
            photo: './testimonial-images/mark.jpeg',
            name: "Mark Smith",
            pos: "CFO, DEF",
            bg_color: "#E4EEFA"
        }
    ]

    return (
        <div>
            <h1>Our customers love us</h1>
            <div className={style.container}>
                {reviews.map((review, index) => (
                    <TestimonialComponent key={index} review={review} />
                ))}
            </div>
        </div>
    )
}

export default Testimonial
