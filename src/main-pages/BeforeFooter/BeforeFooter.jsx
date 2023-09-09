import React from 'react'
import "./BeforeFooter.css"
import { MdOutlineLocationOn } from "react-icons/md"
import image1 from "../../assests2/content-bottom-icon-001.png"
import image2 from "../../assests2/h1-icon-img-1.2.png"
import image3 from "../../assests2/content-bottom-icon-003.png"


const BeforeFooter = ({bgimagetestimonal,TextColorBeforeFooter}) => {
    const color = {
        color: "rgb(191,163,124)",
    };
    return (
        <section className={`${bgimagetestimonal} `}>
            <div className={`flex lg:flex-row flex-col items-start lg:items-center lg:gap-44 space-y-6 lg:space-y-0  container py-10 lg:py-20`}>
                <div className='flex items-center gap-3'>
                    <div className='text-5xl' style={color}>
                        <img src={image1} className='lg:w-8 w-6' alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className={`${TextColorBeforeFooter} m-0 text-xl `} >11 Rue de la Mutualité,</p>
                        <p className={`${TextColorBeforeFooter} m-0 text-xl `} >92400 EGYPT</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='text-5xl' style={color}>
                        <img src={image2} className='w-8 lg:w-14' alt="" />
                    </div>
                    <div className={`flex flex-col ${TextColorBeforeFooter} items-start `}>
                        <a href='tel:+201027752397' className={`m-0 text-xl text-decoration-none ${TextColorBeforeFooter} `} >Phone: +20 102 775 2397</a>
                        <a href='tarekelsherbiny2002@icloud.com' className={`m-0 text-xl text-decoration-none ${TextColorBeforeFooter}`}>Email:Tarek ELsherbiny@gmail.com</a>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='text-5xl' style={color}>
                        <img src={image3} className='w-8 lg:w-14' alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className={`${TextColorBeforeFooter} m-0 text-xl `} >Mon-Sat 09:00-23:00;</p>
                        <p className={`${TextColorBeforeFooter} m-0 text-xl `} >Friday is closed.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeforeFooter