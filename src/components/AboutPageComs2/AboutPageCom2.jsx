import React from "react";
import "../../OtherPages/About/AboutPage.css"
import image1 from "../../assests2/h1-img-8.jpg"


const AboutPageCom2 = () => {
    const color = {
        color: "rgb(191,163,124)",
    };
    const color2 = {
        color: "#a6a6a6",
    };
    return (
        <section className="py-28">
            <div>
                <div className="container">
                    <div className=" border-b border-zinc-300 py-3">
                        <h2 className="text-4xl tracking-wider">
                            We Value Our Clients And Want
                            <br />
                            Them To Have A Nice Experience
                        </h2>
                        <p style={color}>FINEST TRANSPORT</p>
                    </div>
                    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-10 gap-4  md:gap-10">
                        <li className="col-span-1 lg:flex hidden"></li>
                        <li className="col-span-2">
                            <h3 className="text-2xl">Clean & Comfortable</h3>
                            <p className="text-lg tracking-wider text-zinc-600">
                                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
                            </p>
                        </li>
                        <li className="col-span-2">
                            <h4>Best Price Is Assured</h4>
                            <p className="text-lg tracking-wider text-zinc-600">
                                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
                            </p>
                        </li>
                        <li className="col-span-1 lg:flex hidden"></li>
                        <li className="col-span-2">
                            <h4>Smooth Car Transport</h4>
                            <p className="text-lg tracking-wider text-zinc-600">
                                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
                            </p>
                        </li>
                        <li className="col-span-2">
                            <h4>Diverse Selection</h4>
                            <p className="text-lg tracking-wider text-zinc-600">
                                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={image1} alt="" className="ImageHeight"/>
                </div>
            </div>
        </section>
    );
};

export default AboutPageCom2;
