import React from 'react'
import './MidSection.css'
import MidComponents from './MidComponents'
const MidSection = () => {
    const arr=[
        {
            heading: "Setup Employee Groups",
            content:"Use any parameter to setup distinct employee groups to implement policies",
            source:'./mid-section-images/img-1.jpeg'       
        },
        {
            heading: "The Definitive Rule Engine",
            content:"Configure ANY policy - and if you can’t configure it, we promise to work on it for free",
            source:'./mid-section-images/img-2.jpeg'       
        },
        {
            heading: "Customized Reports",
            content:"Setup the reports that you want using our seamless reporting engine.",
            source:'./mid-section-images/img-3.jpeg'       
        },
        {
            heading: "Superior Employee Experience",
            content:"Manage all expenses and travel requests easily. Empower your employees with personalized reports.",
            source:'./mid-section-images/img-4.jpeg'       
        },
        {
            heading: "Easy Integrations",
            content:"Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs.",
            source:'./mid-section-images/img-5.jpeg'       
        },
        {
            heading: "Configurable Workflows",
            content:"Configure approvals or rejections. Escalations and reports. At will. Setup new groups.",
            source:'./mid-section-images/img-6.jpeg'       
        },
        {
            heading: "Scan any Bill",
            content:"The world’s best OCR system backs up this product. All data goes in. 99% success.",
            source:'./mid-section-images/img-7.jpeg'       
        },
        {
            heading: "AI-Based Concierge",
            content:"Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7.",
            source:'./mid-section-images/img-8.jpeg'       
        },
        {
            heading: "AI-Assisted Trip Planning",
            content:"Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.",
             source:'./mid-section-images/img-9.jpeg' 
        }
    ]
  return (
    <div className='container'>
      <p className='heading'>Features that suit your needs</p>
      <div className='features'>

    {
        arr.map((elem)=>(
           <MidComponents heading={elem.heading} content= {elem.content} source={elem.source}/>
        ))
    }
      </div>
    </div>
  )
}

export default MidSection
