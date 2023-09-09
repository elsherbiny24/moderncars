import React from "react";
import image1 from "../../assests2/h1-img-3.jpg";
import image2 from "../../assests2/h1-img-4.jpg";

const Booking = () => {
    const bg = {
        backgroundColor: "#141A1C",
    };
    const color = {
        color: "rgb(191,163,124)",
    };
    const color2 = {
        color: "#a6a6a6",
    };
    const border={
        borderColor:"rgb(191,163,124)"
    }
    return (
        <div>
            <div className="Booking-section" style={bg}>
                <div className="booking-section-content py-20 gap-5 grid grid-cols-1 md:grid-cols-2">
                    <div className="booking-section-content-left w-5/6 m-auto">
                        <div>
                            <h2 className="text-4xl text-white">
                                We Care Of Your Safety
                                <br />
                                And Convenience
                            </h2>
                            <p style={color} className="py-2">PREMIUM DRIVERS</p>
                        </div>
                        <div>
                            <p style={color2} className="text-lg py-3 ">
                                Facilisi cras fermentum odio eu feugiat. In fermentum et
                                sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus
                                iaculis urna id. Aenean euismod elementum nisi quis eleifend quam
                                adipiscing vitae dipiscing.
                            </p>
                        </div>
                        <div>
                            <button style={border} className="px-10 py-3 text-white border-1 text-xl">+ Book Now</button>
                        </div>
                    </div>
                    <div className="booking-section-content-right grid grid-cols-1 container md:grid-cols-2  gap-10">
                        <span>
                            <img src={image1} alt="" />
                        </span>
                        <span>
                            <img src={image2} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
