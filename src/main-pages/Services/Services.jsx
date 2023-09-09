import React, { useEffect } from "react";
import "./Services.css";
import miacImage from "../../assests2/miac.png";
import image1 from "../../assests2/services-car1.jpg";
import image2 from "../../assests2/services-car2.jpg";
import image3 from "../../assests2/services-car3.jpg";
import image4 from "../../assests2/services-car4.jpg";
import image5 from "../../assests2/services-car5.jpg";
import image6 from "../../assests2/services-car6.jpg";
import {RiStarSFill} from "react-icons/ri"
import "animate.css";
const Services = () => {
    const color = {
        color: "rgb(191,163,124)",
    };
    const color2 = {
        color: "#a6a6a6",
    };
    return (
        <div>
            <div className="services-sec">
                <div className="container">
                    <div className="services-sec-content grid py-20 grid-cols-1 gap-y-12 lg:grid-cols-2">
                        <h2 className="text-white my-auto text-4xl tracking-wider">
                            What We Provide Is The Luxury Transport And Most Comfortable
                            Experience
                        </h2>
                        <div className="services-sec-content-left my-auto ">
                            <p className="text-gray-400 text-lg ">
                                Vivamus arcu felis bibendum ut tristique et egestas. Ultricies
                                leo intege in malesuada nunc vel risus commodo. Sapien nec
                                sagittis aliquam male bibendum arcu vitae. In ornare quam
                                viverra orci sagittis eu volutpat odio facilisis. Fringilla est
                                ullamcorper eget nulla facilisi nul.
                            </p>
                            <div className="flex items-center gap-3 md:gap-7">
                                <img className="w-12" src={miacImage} alt="sad" />
                                <span className="text-gray-400">
                                    <span style={color}>CALL CENTER: </span>
                                    <span style={color}> +20 1027752397</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="services-sec-images grid gap-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                        <div className="services-div1 cursor-pointer ">
                            <span className="services-overlay-shown relative">
                                <img src={image1} alt="img" />
                                <div className="absolute services-overlay gap-3 flex pl-10 justify-center flex-col left-0  top-0 w-full h-full">
                                    <h2 className="text-5xl text-white">4x4</h2>
                                    <div style={color2}>
                                        <span className="text-2xl">from</span>
                                        <span className="services-number text-5xl" style={color}>
                                            180
                                        </span>
                                        <span style={color} className="text-2xl">
                                            /hour
                                        </span>
                                    </div>
                                    <p
                                        style={color2}
                                        className="text-2xl "
                                    >
                                        Lorem ipsum dolor sit do amet, consectetur, adipiscing elit,
                                        sed
                                    </p>
                                </div>
                            </span>
                            <div className="flex flex-col pb-8 pt-3 justify-center items-center">
                                <h4 className="text-white">Aston Martin DB11 AMR</h4>
                                <ul className="flex items-center">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services-div1 cursor-pointer ">
                            <span className="services-overlay-shown relative">
                                <img src={image2} alt="img" />
                                <div className="absolute services-overlay gap-3 flex pl-10 justify-center flex-col left-0  top-0 w-full h-full">
                                    <h2 className="text-5xl text-white">Sport</h2>
                                    <div style={color2}>
                                        <span className="text-2xl">from</span>
                                        <span className="services-number text-5xl" style={color}>
                                            180
                                        </span>
                                        <span style={color} className="text-2xl">
                                            /hour
                                        </span>
                                    </div>
                                    <p
                                        style={color2}
                                        className="text-2xl "
                                    >
                                        Lorem ipsum dolor sit do amet, consectetur, adipiscing elit,
                                        sed
                                    </p>
                                </div>
                            </span>
                            <div className="flex flex-col pb-8 pt-3 justify-center items-center">
                                <h4 className="text-white">Ford F-150 Raptor</h4>
                                <ul className="flex items-center">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services-div1 cursor-pointer ">
                            <span className="services-overlay-shown relative">
                                <img src={image3} alt="img" />
                                <div className="absolute services-overlay gap-3 flex pl-10 justify-center flex-col left-0  top-0 w-full h-full">
                                    <h2 className="text-5xl text-white">Limusine</h2>
                                    <div style={color2}>
                                        <span className="text-2xl">from</span>
                                        <span className="services-number text-5xl" style={color}>
                                            180
                                        </span>
                                        <span style={color} className="text-2xl">
                                            /hour
                                        </span>
                                    </div>
                                    <p
                                        style={color2}
                                        className="text-2xl "
                                    >
                                        Lorem ipsum dolor sit do amet, consectetur, adipiscing elit,
                                        sed
                                    </p>
                                </div>
                            </span>
                            <div className="flex flex-col pb-8 pt-3 justify-center items-center">
                                <h4 className="text-white">Bmw M 3 Coupe</h4>
                                <ul className="flex items-center">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services-div1 cursor-pointer ">
                            <span className="services-overlay-shown relative">
                                <img src={image4} alt="img" />
                                <div className="absolute services-overlay gap-3 flex pl-10 justify-center flex-col left-0  top-0 w-full h-full">
                                    <h2 className="text-5xl text-white">Limusine</h2>
                                    <div style={color2}>
                                        <span className="text-2xl">from</span>
                                        <span className="services-number text-5xl" style={color}>
                                            180
                                        </span>
                                        <span style={color} className="text-2xl">
                                            /hour
                                        </span>
                                    </div>
                                    <p
                                        style={color2}
                                        className="text-2xl "
                                    >
                                        Lorem ipsum dolor sit do amet, consectetur, adipiscing elit,
                                        sed
                                    </p>
                                </div>
                            </span>
                            <div className="flex flex-col pb-8 pt-3 justify-center items-center">
                                <h4 className="text-white">Bmw X2 M35i DriveX</h4>
                                <ul className="flex items-center">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services-div1 cursor-pointer ">
                            <span className="services-overlay-shown relative">
                                <img src={image5} alt="img" />
                                <div className="absolute services-overlay gap-3 flex pl-10 justify-center flex-col left-0  top-0 w-full h-full">
                                    <h2 className="text-5xl text-white">4x4</h2>
                                    <div style={color2}>
                                        <span className="text-2xl">from</span>
                                        <span className="services-number text-5xl" style={color}>
                                            180
                                        </span>
                                        <span style={color} className="text-2xl">
                                            /hour
                                        </span>
                                    </div>
                                    <p
                                        style={color2}
                                        className="text-2xl "
                                    >
                                        Lorem ipsum dolor sit do amet, consectetur, adipiscing elit,
                                        sed
                                    </p>
                                </div>
                            </span>
                            <div className="flex flex-col pb-8 pt-3 justify-center items-center">
                                <h4 className="text-white">Mercedes G Class</h4>
                                <ul className="flex items-center">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services-div1 cursor-pointer ">
                            <span className="services-overlay-shown relative">
                                <img src={image6} alt="img" />
                                <div className="absolute services-overlay gap-3 flex pl-10 justify-center flex-col left-0  top-0 w-full h-full">
                                    <h2 className="text-5xl text-white">Sport</h2>
                                    <div style={color2}>
                                        <span className="text-2xl">from</span>
                                        <span className="services-number text-5xl" style={color}>
                                            180
                                        </span>
                                        <span style={color} className="text-2xl">
                                            /hour
                                        </span>
                                    </div>
                                    <p
                                        style={color2}
                                        className="text-2xl "
                                    >
                                        Lorem ipsum dolor sit do amet, consectetur, adipiscing elit,
                                        sed
                                    </p>
                                </div>
                            </span>
                            <div className="flex flex-col pb-8 pt-3 justify-center items-center">
                                <h4 className="text-white">Ford Raptor 135 X</h4>
                                <ul className="flex items-center">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
