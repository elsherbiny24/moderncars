import React from "react";
import "./Footer.css";
import image1 from "../../assests2/logo-gold-img-1.png";

const Footer = ({bgDark,colorFooterLight}) => {
    const bg = {
        backgroundColor: "#0C1315",
    };
    const color2 = {
        color: "#a6a6a6",
    };
    return (
        <div>
            <div className={`${bgDark} grid md:grid-cols-4 lg:grid-cols-3 px-7 md:px-20 py-16 border-y border-zinc-700`}>
                <div className="sm:col-span-4 lg:col-span-1">
                    <div className="my-4">
                        <img src={image1} className="w-32" alt="" />
                    </div>
                    <p  className={`${colorFooterLight} text-lg`}>
                        Justo odio dignissimos ducimus qui blanditiis voluptatum deleniti
                        corrupti quos dolores et quas molestias sint occaecati id est
                        laborumesa etdolorum.
                    </p>
                </div>
                <ul className="lg:mx-auto sm:col-span-2 lg:col-span-1 flex p-0 flex-col gap-3">
                    <h2 className={`${colorFooterLight} lg:text-center my-3 tracking-wider text-3xl`}>Quick links</h2>
                    <li className={`${colorFooterLight} tracking-wider text-sm flex items-center gap-1 li-footer cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>HOW WE WORK</div>
                    </li>
                    <li className={`${colorFooterLight} tracking-wider text-sm flex items-center gap-1 li-footer cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>
                            FAQ
                        </div>
                    </li>
                    <li className={`${colorFooterLight} tracking-wider text-sm flex items-center gap-1 li-footer cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>SERVICES</div>
                    </li>
                    <li className={`${colorFooterLight} tracking-wider text-sm flex items-center gap-1 li-footer cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>Contact</div>
                    </li>
                </ul>
                <ul className="lg:mx-auto tracking-wider text-3xl sm:col-span-2 lg:col-span-1 flex p-0 flex-col gap-3">
                    <h2 className={`${colorFooterLight} lg:text-center my-3">Our Services`}>Our Services</h2>
                    <li className={`${colorFooterLight} tracking-wider text-sm li-footer flex items-center  gap-1 cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>CORPORATE TRAVELS</div>
                    </li>
                    <li className={`${colorFooterLight} tracking-wider text-sm li-footer flex items-center  gap-1 cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>SPECIAL EVENTS</div>
                    </li>
                    <li className={`${colorFooterLight} tracking-wider text-sm li-footer flex items-center  gap-1 cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>AIRPORT TRANSPORT</div>
                    </li>
                    <li className={`${colorFooterLight} tracking-wider text-sm li-footer flex items-center  gap-1 cursor-pointer`}>
                        <div className="footer-li-before"></div>
                        <div>WEDDING LIMOUSINE</div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={`${bgDark} py-2.5 px-7 md:px-20 ${colorFooterLight}`}>
                    © 2023 Dev || Tarek, All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
