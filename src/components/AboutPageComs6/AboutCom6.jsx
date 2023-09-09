import React from 'react'
import image1 from "../../assests2/inner-faq-img-1.2.jpg"
import image2 from "../../assests2/inner-faq-img-2.jpg"
import image3 from "../../assests2/inner-faq-img-3.jpg"

const AboutPageCom6 = () => {
    return (
        <div>
            <div className="container grid overflow-hidden md:grid-cols-4 pt-12 pb-28 gap-4 h-full">
                <div className='md:col-span-2 span-col-4'>
                    <img src={image1} className='w-full' alt="" />
                </div>
                <div className='md:col-span-1 sm:col-span-2 col-span-1'>
                    <img src={image2} className='w-full h-full' alt="" />
                </div>
                <div className='md:col-span-1 sm:col-span-2 col-span-1'>
                    <img src={image3} className='w-full h-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutPageCom6