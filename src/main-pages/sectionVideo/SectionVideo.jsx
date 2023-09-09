import React from "react";
import image1 from "../../assests2/h1-img-2.jpg";
import "./SectionVideo.css"

const SectionVideo = () => {
    const bgColor = {
        backgroundColor: "#0C1315",
    };
    const color = {
        color: "rgb(191,163,124)",
    };
    const mainColor={
        color:"#A6A6A6"
    }
    return (
        <div >
            <div style={bgColor} className={`py-16`}>
                <div className="container">
                    <div className="sec-video-first-content py-3 border-b border-b-gray-600">
                        <h2 className={`md:text-5xl text-4xl tracking-wider text-white`}>
                            Ride To Destinations <br /> With Maximum Comfort
                        </h2>
                        <p style={color}>FINEST TRANSPORT</p>
                    </div>
                    <ul className="grid md:grid-cols-2 grid-cols-1 md:w-4/5 mx-auto gap-3 md:gap-5 pl-0 lg:pl-24 py-10">
                        <li>
                            <h3 className="text-white">No Delays</h3>
                            <p style={mainColor} className="text-xl">
                                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-white">High Quality</h3>
                            <p style={mainColor} className="text-xl">
                                Tortor condimentum lacinia quis vel eros donec odio.
                                Feugiat fermentum in posuere urna. Faucibus turpis in eun mi
                                bibendum.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-white">Premium Support</h3>
                            <p style={mainColor} className="text-xl">
                                Tortor condimentum lacinia quis vel eros donec odio.
                                Feugiat fermentum in posuere urna. Faucibus turpis in eun mi
                                bibendum.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-white">A Diverse Selection</h3>
                            <p style={mainColor} className="text-xl">
                                Tortor condimentum lacinia quis vel eros donec odio.
                                Feugiat fermentum in posuere urna. Faucibus turpis in eun mi
                                bibendum.
                            </p>
                        </li>
                    </ul>
                    <div className="relative video">
                        <img src={image1} alt="" />
                        <span className="absolute hover:w-56 text-2xl duration-200 bottom-1/4 border-1 rounded-full h-32 md:w-44 w-32 md:h-44 text-center flex justify-center items-center cursor-pointer text-gray-700 md:text-white  left-1/4">
                            VIDEO
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionVideo;
