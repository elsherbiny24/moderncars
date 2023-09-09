import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Testimonal.css";
import { RiStarSFill } from "react-icons/ri";
import image1 from "../../assests2/h1-img-8.jpg"
import image2 from "../../assests2/h1-img-9.png"
import image3 from "../../assests2/h1-img-10.png"
import image4 from "../../assests2/h1-img-11.png"
import { BsCheck } from "react-icons/bs"
import { motion } from "framer-motion"


const Testimonal = () => {
    const color2 = {
        color: "#a6a6a6",
    };
    const bg = {
        backgroundColor: "#0C1315",
    };
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const color = {
        color: "rgb(191,163,124)",
    };
    const BorderColor = {
        borderColor: "rgb(191,163,124)",

    };
    return (
        <div>
            <div className="testimonal-section py-24" style={bg}>
                <div className="md:px-14 px-4">
                    <h2 className=" text-white text-3xl md:text-5xl tracking-wider">
                        We trive to meet the needs
                        <br className="md:flex hidden" />
                        of our clients and we value their
                        <br className="md:flex hidden" />
                        opinions about our work
                    </h2>
                    <div className="mt-20 mx-0 md:mx-8">
                        <Slider {...settings}>
                            <div className=" slick-border px-3 md:px-8">
                                <div className="pb-4">
                                    <h3 className="text-white">Clean & Comfortable</h3>
                                    <ul className="flex pl-0">
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg lg:w-5/6" style={color2}>
                                    Habitant morbi tristique senectus et du amon ut venenatis
                                    tellus in metus vulpute ate augue interdum velit euismod in
                                    pel lent sque mauris pharetra.
                                </p>
                                <p style={color}>GLORIA , FOLES , CHICAGO</p>
                            </div>
                            <div className=" slick-border px-3 md:px-8">
                                <div className="pb-4">
                                    <h3 className="text-white">Best Price Assured</h3>
                                    <ul className="flex pl-0">
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg lg:w-5/6" style={color2}>
                                    Pretium fusce id velit ut consectetur ada pisa ing elit
                                    pellentesque habitant morbi senectus.ada pisa ing elit
                                    pellentesque habitant morbi tristiqe .
                                </p>
                                <p style={color}>GLORIA , FOLES , CHICAGO</p>
                            </div>
                            <div className=" slick-border px-3 md:px-8">
                                <div className="pb-4">
                                    <h3 className="text-white">Smooth Car Transparent</h3>
                                    <ul className="flex pl-0">
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg lg:w-5/6" style={color2}>
                                    In hac habitasse platea dictu imst vesti ulumon rhoncus est
                                    pellentesqu ini ultriceso in iaculis nunc sed augue lac
                                    imperdiet dui accumsan sit a.
                                </p>
                                <p style={color}>GLORIA , FOLES , CHICAGO</p>
                            </div>
                            <div className=" slick-border px-3 md:px-8">
                                <div className="pb-4">
                                    <h3 className="text-white">Clean & Comfortable</h3>
                                    <ul className="flex pl-0">
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li style={color} className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                        <li className="text-xl">
                                            <RiStarSFill />
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg lg:w-5/6" style={color2}>
                                    Habitant morbi tristique senectus et du amon ut venenatis
                                    tellus in metus vulpute ate augue interdum velit euismod in
                                    pel lent sque mauris pharetra.
                                </p>
                                <p style={color}>GLORIA , FOLES , CHICAGO</p>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="pt-28 pb-10">
                    <img src={image1} alt="" />
                </div>
                <div className="px-16">
                    <div className="py-4 border-b border-neutral-700">
                        <h2 className="text-5xl text-white">A High Variety Of Options</h2>
                        <p style={color} className="py-2 text-xl tracking-wide">BEST POSSIBILITIES</p>
                    </div>
                    <div className="grid grid-cols-1 lg:w-4/5 gap-12 lg:ml-auto py-10">
                        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 items-start lg:items-center pt-6 pb-14 border-b border-neutral-700">
                            <div className="flex items-center">
                                <div className="relative w-60">
                                    <motion.img
                                        initial={{
                                            x: -500,
                                            opacity: 0.4
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 2,
                                            delay: 1,
                                            stiffness: 100,
                                        }}
                                        whileInView={{
                                            x: "0",
                                            opacity: 1
                                        }}
                                        src={image3} className="m-0 mr-0" />
                                    <div className="absolute -top-4 right-0 flex flex-col w-full h-full justify-between items-end">
                                        <span className="text-white text-3xl">Premium</span>
                                        <span className="absolute -bottom-8 right-16 text-2xl" style={color2}>from</span>
                                    </div>
                                </div>
                                <div style={color} className="num-before text-7xl ml-5 before:-left-3 after:-right-3 after:-bottom-4 after:text-2xl before:text-2xl">
                                    40
                                </div>
                            </div>
                            <div className="flex flex-col items-start lg:justify-center lg:mx-auto gap-2">
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Leo urna molestie at elem</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Quisque non tellu si</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Pretium lectus quam id li</span>
                                </div>
                            </div>
                            <div className="lg:ml-auto">
                                <button style={BorderColor} className="bg-transparent text-white text-xl border-1 px-5 py-3">+ Book Now</button>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 items-start lg:items-center pt-6 pb-14 border-b border-neutral-700">
                            <div className="flex items-center">
                                <div className="relative w-60">
                                    {/* <img src={image3} alt="" className="m-0 mr-0" /> */}
                                    <motion.img
                                        initial={{
                                            x: -500,
                                            opacity: 0.4
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 2,
                                            delay: 1,
                                            stiffness: 100,
                                        }}
                                        whileInView={{
                                            x: "0",
                                            opacity: 1
                                        }}
                                        src={image3} className="m-0 mr-0" />
                                    <div className="absolute -top-4 right-0 flex flex-col w-full h-full justify-between items-end">
                                        <span className="text-white text-3xl">Super</span>
                                        <span className="absolute -bottom-8 right-8 text-2xl" style={color2}>from</span>
                                    </div>
                                </div>
                                <div style={color} className="num-before text-7xl ml-5 before:-left-3 after:-right-3 after:-bottom-4 after:text-2xl before:text-2xl">
                                    50
                                </div>
                            </div>
                            <div className="flex flex-col items-start lg:mx-auto justify-start gap-2">
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Leo urna molestie at elem</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Quisque non tellu si</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Pretium lectus quam id li</span>
                                </div>
                            </div>
                            <div className="lg:ml-auto">
                                <button style={BorderColor} className="bg-transparent text-white text-xl border-1 px-5 py-3">+ Book Now</button>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 items-start lg:items-center pt-6 pb-14 border-b border-neutral-700">
                            <div className="flex items-center">
                                <div className="relative w-60">
                                    <motion.img
                                        initial={{
                                            x: -500,
                                            opacity: 0.4
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 2,
                                            delay: 1,
                                            stiffness: 100,
                                        }}
                                        whileInView={{
                                            x: "0",
                                            opacity: 1
                                        }}
                                        src={image4} className="m-0 mr-0" />
                                    <div className="absolute -top-4 right-0 flex flex-col w-full h-full justify-between items-end">
                                        <span className="text-white text-3xl">Luxury</span>
                                        <span className="absolute -bottom-6 right-10 text-2xl" style={color2}>from</span>
                                    </div>
                                </div>
                                <div style={color} className="num-before text-7xl ml-5 before:-left-3 after:-right-3 after:-bottom-4 after:text-2xl before:text-2xl">
                                    80
                                </div>
                            </div>
                            <div className="flex flex-col lg:mx-auto items-start justify-start gap-2">
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Leo urna molestie at elem</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Quisque non tellu si</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Pretium lectus quam id li</span>
                                </div>
                            </div>
                            <div className="lg:ml-auto">
                                <button style={BorderColor} className="bg-transparent text-white text-xl border-1 px-5 py-3">+ Book Now</button>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 items-start lg:items-center pt-6 pb-14 border-b border-neutral-700">
                            <div className="flex items-center">
                                <div className="relative w-60">
                                    <motion.img
                                        initial={{
                                            x: -500,
                                            opacity: 0.4
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 2,
                                            delay: 1,
                                            stiffness: 100,
                                        }}
                                        whileInView={{
                                            x: "0",
                                            opacity: 1
                                        }}
                                        src={image4} className="m-0 mr-0" />
                                    <div className="absolute -top-4 right-0 flex flex-col w-full h-full justify-between items-end">
                                        <span className="text-white text-3xl">Business</span>
                                        <span className="absolute -bottom-6 right-14 text-2xl" style={color2}>from</span>
                                    </div>
                                </div>
                                <div style={color} className="num-before text-7xl ml-5 before:-left-3 after:-right-3 after:-bottom-4 after:text-2xl before:text-2xl">
                                    90
                                </div>
                            </div>
                            <div className="flex flex-col lg:mx-auto items-start justify-start gap-2">
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Leo urna molestie at elem</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Quisque non tellu si</span>
                                </div>
                                <div style={color2} className=" flex items-center lg:mx-16 gap-2">
                                    <span className="text-2xl " ><BsCheck /></span>
                                    <span className="text-xl">Pretium lectus quam id li</span>
                                </div>
                            </div>
                            <div className="lg:ml-auto">
                                <button style={BorderColor} className="bg-transparent text-white text-xl border-1 px-5 py-3">+ Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonal;
