import React from 'react'
import AboutPageCom2 from '../../components/AboutPageComs2/AboutPageCom2'
import AboutPageCom1 from '../../components/AbouPageComs1/AboutPageCom1'
import { AboutPageCom3 } from '../../components/AbouPageComs3/AboutPageCom3'
import AboutPageCom4 from '../../components/AboutPageComs4/AboutPageCom4'
import AboutPageCom5 from '../../components/AboutPageComs5/AboutPageCom5'
import AboutPageCom6 from '../../components/AboutPageComs6/AboutCom6'
import AboutPageCom7 from '../../components/AboutPageComs7/AboutPageCom7'
import BeforeFooter from '../../main-pages/BeforeFooter/BeforeFooter'
import Footer from '../../main-pages/Footer/Footer'
const AboutPage = () => {
    return (
        <div>
            <AboutPageCom1 url="bg-about-image"/>
            <AboutPageCom2/>
            <AboutPageCom3/>
            <AboutPageCom4/>
            <AboutPageCom5/>
            <AboutPageCom6/>
            <AboutPageCom7/>
            <BeforeFooter bgimagetestimonal={"bgimagetestimonalLight"} TextColorBeforeFooter={"TextColorBeforeFooter2"}/>
            <Footer bgDark={"bgFooterLight"}/>
        </div>
    )
}

export default AboutPage