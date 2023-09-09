import React, { useEffect, useState } from "react";
import "./HeroPage.css";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaCalendarXmark } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { FaRegCircleXmark } from "react-icons/fa6";
import Offcanvas from "react-bootstrap/Offcanvas";
import miacImage from '../../assests2/miac.png'
import { motion } from "framer-motion"


const Test = () => {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [closeMark, setCloseMark] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const colorluxedsidebar = {
        color: "rgb(191,163,124)",
        borderColor: "rgb(191,163,124)"
    }
    return (
        <>
            <section className="hero">
                <ul className="slideshow">
                    <li>
                        <span>Image 01</span>
                        <div></div>
                    </li>
                    <li>
                        <span>Image 02</span>
                        <div></div>
                    </li>
                    <li>
                        <span>Image 03</span>
                        <div></div>
                    </li>
                    <li>
                        <span>Image 04</span>
                        <div></div>
                    </li>
                </ul>
            </section>
            <div className="absolute top-0 left-0 w-full px-10 md:px-20 text-white py-6 border-b border-b-gray-400">
                <div className="flex  justify-between items-center">
                    <h2 className="text-3xl ul-animation font-thin">LUXEDRIVE</h2>
                    <div
                        variant="primary"
                        onClick={handleShow}
                        onMouseLeave={() => setMenu(false)}
                        onMouseEnter={() => setMenu(true)}
                        className={`lg:hidden flex flex-col gap-1 cursor-pointer`}
                    >
                        <span className="flex items-center space-x-1">
                            <span
                                className={`menu-1 ${menu ? "w-10" : "w-3"
                                    } duration-300 rounded-xl h-0.5 bg-white block`}
                            ></span>
                            <span
                                className={`menu-1 ${menu ? "w-0" : "w-6"
                                    } duration-300  rounded-xl h-0.5 bg-white block`}
                            ></span>
                        </span>
                        <span
                            className={`menu-2 w-10 ${menu ? "w-6" : "w-10"
                                } rounded-xl h-0.5 bg-white block`}
                        ></span>
                    </div>
                    <div className="lg:flex hidden gap-5 ul-right-animate">
                        <div className="flex text-lg gap-3 items-center">
                            <span className="text-lg">
                                <IoCall />
                            </span>
                            <span className="text-lg">+20 1027752397</span>
                        </div>
                        <div className="flex text-lg gap-3 items-center">
                            <span>
                                <FaLocationDot />
                            </span>
                            <div className="">
                                <span>75 Egy Benha Degwa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="absolute  text-white top-24 px-20 left-0 w-full">
                <div className="flex justify-between items-center">
                    <motion.ul className="ul-animation hidden lg:flex items-center duration-300 space-x-12"
                        
                    >
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
                                        } duration-300 rounded-xl h-0.5 bg-white block`}
                                ></span>
                                <span
                                    className={`menu-1 ${menu ? "w-0" : "w-6"
                                        } duration-300  rounded-xl h-0.5 bg-white block`}
                                ></span>
                            </span>
                            <span
                                className={`menu-2 w-10 ${menu ? "w-6" : "w-10"
                                    } rounded-xl h-0.5 bg-white block`}
                            ></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col ul-animation w-full absolute text-white top-80 lg:top-2/4 px-10 lg:px-20">
                <h2 className=" text-4xl w-full md:text-5xl">Need to Rent a Luxury Car?</h2>
                <h2 className="text-4xl md:text-5xl">Send a Request</h2>
                <p className="mt-10 lg:flex hidden">Complete the form below and we'll contact you as soon as possible</p>
            </div>
            <div className="grid grid-cols-1 ul-bottom-animation lg:grid-cols-5 w-full space-x-2 lg:space-y-0  space-y-3 items-center absolute bottom-5 lg:bottom-20 px-10 lg:px-20">
                <div className="">
                    <input placeholder="Choose location" type="text" className="text-gray-300 py-2 placeholder:text-gray-300 text-xl w-full bg-transparent outline-none border-b border-b-gray-300" />
                </div>
                <div className="">
                    <input type="date" value="2017-06-01" min="2017-04-01" max="2017-04-30" className=" text-gray-300 py-2 placeholder:text-gray-300 text-xl w-full bg-transparent outline-none border-b border-b-gray-300" />
                </div>
                <div className="">
                    <input value="13:30" type="time" className="text-gray-300 py-2 placeholder:text-gray-300 text-xl w-full bg-transparent outline-none border-b border-b-gray-300" />
                </div>
                <div className="">
                    <input placeholder="Drop off location" type="text" className="text-gray-300 py-2 placeholder:text-gray-300 text-xl w-full bg-transparent outline-none border-b border-b-gray-300" />
                </div>
                <div className="">
                    <button onClick={() => window.location = "./HeroPage.jsx"} className="lg:w-3/4 w-2/5  py-2 text-xl text-white space-x-3 border-1 border-orange-500">
                        <span >+</span>
                        <span>Send</span>
                    </button>
                </div>
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
            <div
                className={`z-30 ${closeMark ? "flex" : "hidden"
                    } fixed h-screen w-screen  items-center justify-center bg-gray-400 left-0 top-0`}
            >
                <div className="bg-white relative flex items-center justify-center rounded-lg w-2/4 h-2/4 ">
                    <p className="text-xl  text-gray-700">
                        Sorry, your request is incomprehensible.Please Search again or call
                        us.
                    </p>
                    <span
                        onClick={() => setCloseMark(false)}
                        className="absolute right-8 hover:text-red-800 duration-100 cursor-pointer text-3xl text-gray-700 top-8"
                    >
                        <FaRegCircleXmark />
                    </span>
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
                                <span className="text-gray-400">+20 1027752397</span>
                            </div>

                        </Offcanvas.Body>
                    </div>
                </Offcanvas>
            </div>
        </>
    );
};

export default Test;
