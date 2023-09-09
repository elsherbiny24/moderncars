import React from "react";
import "./Premium.css";
import image1 from "../../assests2/h1-img-6.jpg";
import image2 from "../../assests2/h1-img-7.jpg";

const Premium = () => {
    const bg = {
        backgroundColor: "#141A1C",
    };
    const color = {
        color: "rgb(191,163,124)",
    };
    const color2 = {
        color: "#a6a6a6",
    };
    return (
        <div>
            <div className="premium-section" style={bg}>
                <div className="premium-section-content grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
                    <div className="premium-section-content-left grid grid-cols-1 md:mx-0 mx-10 md:grid-cols-2 gap-5">
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                    <div className="premium-section-content-right my-auto mx-10 w-4/5">
                        <div>
                            <h2 className="text-white text-5xl mb-2">Premium Cars Rental</h2>
                            <p style={color} className="md:text-lg md:tracking-wider">ONLY THE BEST</p>
                        </div>
                        <div className="md:text-xl py-4" style={color2}>
                            Praesent elementum facilisis leo vel fringilla est. Vest bulum
                            lectus a urise ultrices eros in cursus turpi uto.
                        </div>
                        <div className="grid grid-cols-1 md:gap-0 gap-4 md:grid-cols-2 justify-space-between">
                            <div>
                                <span className=" num21 relative after:text-4xl md:after:text-6xl  text-7xl md:text-9xl text-white">21</span>
                                <p style={color2} className="md:text-xl tracking-wider">Years of experience</p>
                            </div>
                            <div>
                                <span className=" num157 relative after:text-4xl md:after:text-6xl text-7xl md:text-9xl text-white">157</span>
                                <p style={color2} className="md:text-xl tracking-wider">Satisfied clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;
