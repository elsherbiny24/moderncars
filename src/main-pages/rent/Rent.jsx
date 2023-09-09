import React from 'react'
import "./Rent.css"
import image1 from "../../assests2/h1-team-img-1.jpg"
import image2 from "../../assests2/h1-team-img-2.jpg"
import image3 from "../../assests2/h1-team-img-3.jpg"
import { BiSolidPhone } from "react-icons/bi"


const Rent = () => {
    const borderColor = {
        borderColor: "rgb(191,163,124)"
    }
    const bg = {
        backgroundColor: "#0C1315"
    }
    const color = {
        color: "rgb(191,163,124)",
    };
    return (
        <div className='rent-section' style={bg}>
            <div className="rent-section-image flex flex-col items-end justify-center">
                <div className='mx-6 md:mx-20 text-white z-20 space-y-6'>
                    <div className='flex flex-col'>
                        <h2 className='text-4xl md:text-5xl tracking-wide'>Do You Need To Rent A Car?</h2>
                        <h2 className='text-4xl md:text-5xl tracking-wide text-end'>See Our Offers</h2>
                    </div>
                    <div className='text-end'>
                        <button style={borderColor} className='px-12 py-3 text-xl border-1 '>+ View More</button>
                    </div>
                </div>
            </div>
            <div className="rent-section-content py-20">
                <div className="container">
                    <div className='border-b border-gray-700 py-4 space-y-4'>
                        <h2 className='text-4xl md:text-5xl text-white'>Our Proffesional Chauffeurs</h2>
                        <p style={color}>MEET OUR TEAM</p>
                    </div>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-4 gap-4 px-8 py-8'>
                    <li className='md:flex hidden'></li>
                    <li>
                        <img src={image1} alt="" />
                        <div className='py-4 space-y-2'>
                            <span className='text-2xl text-white'>
                                Marco Watkivi
                            </span>
                            <div className='flex items-center gap-2'>
                                <span style={color} className='text-xl '><BiSolidPhone /></span>
                                <span style={color}>+20 102 775 2397</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={image2} alt="" />
                        <div className='py-4 space-y-2'>
                            <span className='text-2xl text-white'>
                                Marily Sulli
                            </span>
                            <div className='flex items-center gap-2'>
                                <span style={color} className='text-xl '><BiSolidPhone /></span>
                                <span style={color}>+20 102 775 2397</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={image3} alt="" />
                        <div className='py-4 space-y-2'>
                            <span className='text-2xl text-white'>
                                Zakary Tapun
                            </span>
                            <div className='flex items-center gap-2'>
                                <span style={color} className='text-xl '><BiSolidPhone /></span>
                                <span style={color}>+20 102 775 2397</span>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Rent