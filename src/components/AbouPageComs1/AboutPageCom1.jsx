import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion"
import { CiSearch } from "react-icons/ci";
import image1 from "../../assests2/logo-img-1.png"
import Offcanvas from "react-bootstrap/Offcanvas";
import miacImage from '../../assests2/miac.png'
import { FaCalendarXmark } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import "../../OtherPages/About/AboutPage.css"


const AboutPageCom1 = ({url}) => {
    const handleClose = () => setShow(false);
    const [closeMark, setCloseMark] = useState(false);
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const colorluxedsidebar = {
        color: "rgb(191,163,124)",
        borderColor: "rgb(191,163,124)"
    }

    return (
        <section>
            <div>
                <div className="lg:flex hidden bg-black py-1 px-20 w-full">
                    <div className="flex items-center text-white ml-auto gap-5 ul-right-animate">
                        <div className="text-sm gap-3 items-center lg:flex hidden">
                            <span className="text-sm">
                                <IoCall />
                            </span>
                            <span className="text-sm tracking-widest">+ 20 0127 909 8049</span>
                        </div>
                        <div className='text-sm text-zinc-200'>|</div>
                        <div className="flex text-sm gap-3 items-center">
                            <span>
                                <FaLocationDot />
                            </span>
                            <div className="tracking-widest">
                                <span>75 Egy Benha Degwa</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-white  text-black top-0 py-6 px-20 left-0 w-full">
                    <div className="flex justify-between items-center">
                        <motion.ul className="ul-animation flex items-center duration-300 space-x-12"
                        >
                            <img src={image1} alt="" className='w-40' />
                            <li className={`cursor-pointer relative list-disc duration-300 `}>
                                HOME
                            </li>
                            <li className="homeLi relative cursor-pointer hover:list-disc duration-300">
                                PAGES
                                <ul
                                    className={`homeUl bg-black w-64 px-7 space-y-5 text-gray-600 py-6  absolute top-8 left-0 `}
                                >
                                    <li>About Us</li>
                                    <li>What We Offer</li>
                                    <li>Our Derives</li>
                                    <li>Our Services</li>
                                    <li>Pricing Plans</li>
                                    <li>Pricing Packages</li>
                                    <li>FAQ Page</li>
                                    <li>Contact Us</li>
                                </ul>
                            </li>
                            <li className="cursor-pointer hover:list-disc duration-300">
                                VEHICLE FLEET
                            </li>
                            <li className="cursor-pointer hover:list-disc duration-300">
                                BLOG
                            </li>
                            <li className="cursor-pointer hover:list-disc duration-300">
                                SHOP
                            </li>
                        </motion.ul>
                        <ul className="flex items-center space-x-8 ul-right-animate">
                            <li
                                onClick={() => setSearch(true)}
                                className="text-xl cursor-pointer"
                            >
                                <CiSearch />
                            </li>

                            <li
                                variant="primary"
                                onClick={handleShow}
                                onMouseLeave={() => setMenu(false)}
                                onMouseEnter={() => setMenu(true)}
                                className={`flex flex-col gap-1 cursor-pointer `}
                            >
                                <span className="flex items-center space-x-1">
                                    <span
                                        className={`menu-1 ${menu ? "w-10" : "w-3"
                                            } duration-300 rounded-xl h-0.5 bg-black block`}
                                    ></span>
                                    <span
                                        className={`menu-1 ${menu ? "w-0" : "w-6"
                                            } duration-300  rounded-xl h-0.5 bg-black block`}
                                    ></span>
                                </span>
                                <span
                                    className={`menu-2 w-10 ${menu ? "w-6" : "w-10"
                                        } rounded-xl h-0.5 bg-black block`}
                                ></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Offcanvas className='' show={show} onHide={handleClose}>
                        <div className="flex items-start flex-col w-full mt-36 ml-2 h-full ">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <div>
                                        <span style={colorluxedsidebar}>LUXEDRIVE</span>
                                        <span onClick={() => handleClose()} className="absolute top-16 hover:text-red-700 duration-200 text-3xl right-10 text-gray-400 cursor-pointer"><FaCalendarXmark /></span>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <p className="text-xl text-gray-400">
                                    In nulla posuere sollicitudin aliqu amultri ces sagittis orci a
                                    scelerisu arcu felis bibendum ut tristiu en.
                                </p>
                                <div className="flex flex-col gap-1 text-lg text-gray-600">
                                    <span>Mon - Sat 9:00- 23:00</span>
                                    <span>Sunday - closed</span>
                                </div>
                                <div className="flex items-center gap-7 mt-20">
                                    <img className="w-12" src={miacImage} alt="sad" />
                                    <span className="text-gray-400">+20 01279098049</span>
                                </div>

                            </Offcanvas.Body>
                        </div>
                    </Offcanvas>
                </div>
                <div
                    className={`${search ? "flex" : "hidden"
                        } fixed overflow-hidden left-0 top-0 bg-gray-800 w-screen h-screen z-20 opacity-90 items-center justify-center `}
                >
                    <div className="bg-gray-200 px-3 items-center focus:bg-gray-300 w-2/5 flex rounded focus:shadow-lg focus:shadow-gray-600">
                        <input
                            type="search"
                            name=""
                            className="bg-transparent text-3xl w-11/12 outline-none border-none px-5 py-2 rounded-lg  border-2  text-gray-800 "
                            id=""
                        />
                        <span
                            onClick={() => setCloseMark(true)}
                            className="text-3xl cursor-pointer w-fit bg-transparent"
                        >
                            <FcSearch />
                        </span>
                    </div>
                    <span
                        onClick={() => setSearch(false)}
                        className="absolute top-20 text-5xl text-white hover:text-gray-400 duration-250 cursor-pointer z-10 right-20"
                    >
                        <FaCalendarXmark />
                    </span>
                </div>
            </div>

            <motion.div initial={{
                height: "520px",
                // backgroundImage: 'url(../../assests2/inner-ab-img-1.jpg)'
            }}
                className={`${url}`}
            >

            </motion.div>
        </section>
    )
}

export default AboutPageCom1