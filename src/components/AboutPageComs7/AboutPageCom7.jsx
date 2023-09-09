import React from "react";
import image1 from "../../assests2/inner-ab-img-3.jpg";

const AboutPageCom7 = () => {
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
            <div className="premium-section py-20  bg-slider-car">
                <div className="premium-section-content grid  grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="premium-section-content-right my-auto mx-10 w-4/5">
                        <div>
                            <h2 className="text-black text-5xl mb-2">For Your Every Need</h2>
                            <p style={color} className="md:text-lg md:tracking-wider">
                                ONLY THE BEST
                            </p>
                        </div>
                        <div className="md:text-xl py-4 text-zinc-600" >
                            Praesent elementum facilisis leo vel fringilla est. Vest bulum
                            lectus a urise ultrices eros in cursus.
                        </div>
                        <div className="grid grid-cols-1 md:gap-0 gap-4 md:grid-cols-2 justify-space-between">
                            <div>
                                <span className=" num21 relative after:text-4xl md:after:text-6xl  text-7xl md:text-9xl text-black">
                                    21
                                </span>
                                <p className="text-zinc-600 md:text-xl tracking-wider">
                                    Years of experience
                                </p>
                            </div>
                            <div>
                                <span className=" num157 relative after:text-4xl md:after:text-6xl text-7xl md:text-9xl text-black">
                                    157
                                </span>
                                <p className="text-zinc-600 md:text-xl tracking-wider">
                                    Satisfied clients
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="premium-section-content-left grid grid-cols-1 md:mx-0 mx-10 gap-5">
                        <div>
                            <img src={image1} className="h-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageCom7;
