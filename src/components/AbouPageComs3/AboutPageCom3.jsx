import React, { Component } from "react";
import Slider from "react-slick";
import image4 from "../../assests2/Vihecle-list-image-04.jpg"
import image1 from "../../assests2/Vihecle-list-image-03.jpg"
import image2 from "../../assests2/Vihecle-list-image-02.jpg"
import image3 from "../../assests2/Vihecle-list-image-01.jpg"
import { RiStarSFill } from "react-icons/ri"
import "../../OtherPages/About/AboutPage.css"


export const AboutPageCom3 = () => {

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
                    initialSlide: 1,
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
    return (
        <div className="pb-40">
            <div className="container">
                <h2 className="text-5xl tracking-wider"> Luxury Limousine for Maximum<br className="md:flex hidden"/>Satisfaction. Enjoy. </h2>
                <p style={color} className="tracking-wider">ENJOY THE RIDE</p>
            </div>
            <div className=" container mt-20">
                <Slider {...settings} className="mx-auto">
                    <div className="bg-slider-car px-8 py-20 mk">
                        <div className="">
                            <img src={image1} className="h-auto max-w-full px-10" alt="" />
                            <div className="my-4">
                                <h3 className="">Range Rover Evoque</h3>
                                <ul className="flex items-center m-0 p-0">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                            <div className="text-xl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit.
                            </div>
                            <div className="my-3">
                                <div className="text-5xl aboutCom3Num w-fit relative">
                                    120
                                </div>
                            </div>
                            <div className="">
                                <button className="border btn-slider-about mt-5 px-12 tracking-widest uppercase py-3 relative slider-btn-before"> More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slider-car px-8 py-20 mk">
                        <div className="">
                            <img src={image2} className="h-auto max-w-full px-10" alt="" />
                            <div className="my-4">
                                <h3 className="">Porche Taycan Sport</h3>
                                <ul className="flex items-center m-0 p-0">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                            <div className="text-xl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit.
                            </div>
                            <div className="my-3">
                                <div className="text-5xl aboutCom3Num w-fit relative">
                                    180
                                </div>
                            </div>
                            <div className="">
                                <button className="border btn-slider-about mt-5 px-12 tracking-widest uppercase py-3 relative slider-btn-before"> More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slider-car px-8 py-20 mk">
                        <div className="">
                            <img src={image3} className="h-auto max-w-full px-10" alt="" />
                            <div className="my-4">
                                <h3 className="">Rolls Royce Ghost 3</h3>
                                <ul className="flex items-center m-0 p-0">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                            <div className="text-xl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit.
                            </div>
                            <div className="my-3">
                                <div className="text-5xl aboutCom3Num w-fit relative">
                                    140
                                </div>
                            </div>
                            <div className="">
                                <button className="border btn-slider-about mt-5 px-12 tracking-widest uppercase py-3 relative slider-btn-before"> More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slider-car px-8 py-20 mk">
                        <div className="">
                            <img src={image4} className="h-auto max-w-full px-10" alt="" />
                            <div className="my-4">
                                <h3 className="">Ferrari 365 Daytona</h3>
                                <ul className="flex items-center m-0 p-0">
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                    <li style={color} className="text-xl"><RiStarSFill /></li>
                                </ul>
                            </div>
                            <div className="text-xl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit.
                            </div>
                            <div className="my-3">
                                <div className="text-5xl aboutCom3Num w-fit relative">
                                    140
                                </div>
                            </div>
                            <div className="">
                                <button className="border btn-slider-about mt-5 px-12 tracking-widest uppercase py-3 relative slider-btn-before"> More Details</button>
                            </div>
                        </div>
                    </div>
                </Slider >
            </div>
        </div>
    );
};
