import React from "react";
import image from "../../assests2/inner-ab-img-2.jpg";
import "../../OtherPages/About/AboutPage.css"



const AboutPageCom4 = () => {
    const borderColor = {
        borderColor: "rgb(191,163,124)",
        
    }
    const color={
        color:"rgb(191,163,124)"
    }
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="h-full bg-slider-car">
                    <div className="mx-auto h-full my-28 w-11/12 space-y-6">
                        <div>
                            <h2 className="text-4xl tracking-wider" >
                                We Care About Your
                                <br />
                                Comfort And Safety
                            </h2>
                            <p style={color} className="tracking-wider">BEST DRIVERS</p>
                        </div>
                        <div className="w-3/4 text-lg tracking-wide ">
                            Turpis tincidunt id aliquet risus feugiat in ante metus dictum.
                            Netus et sed malesuada fames ac turpis. Netus et sed males ada fames
                            ac turpis egesta doi tempus urna. Amet nulla facilisi morbi temp do.
                        </div>
                        <div>
                            <button style={borderColor} className=" relative px-8 py-2.5 border-1 flex items-center gap-4">
                                <div className=" Plus relative">
                                    <span className="xPlus absolute left-0 -translate-y-2/4 top-0  bg-black block"></span>
                                    <span className="yPlus absolute left-1.5 top-0 -translate-y-2/4  bg-black block"></span>
                                </div>
                                {/* <div className="relative DotDiv">
                                <span className="Dot absolute left-3 -translate-y-2/4 top-0 w-1.5 h-1.5 bg-black rounded-full"></span>
                            </div> */}
                                <div className="text-lg uppercase tracking-wider font-thin">
                                    VIEW MORE
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageCom4;
