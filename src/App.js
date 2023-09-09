import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from "./main-pages/HeroPageLarge/HeroPage.jsx"
import Services from './main-pages/Services/Services';
import SectionVideo from './main-pages/sectionVideo/SectionVideo';
import Booking from './main-pages/Booking/Booking';
import Rent from './main-pages/rent/Rent';
import Premium from './main-pages/premium/Premium';
import Testimonal from './main-pages/testimonal/Testimonal';
import BeforeFooter from './main-pages/BeforeFooter/BeforeFooter';
import Footer from './main-pages/Footer/Footer';
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { useEffect, useState } from 'react';
import { motion, useScroll } from "framer-motion"
import AboutPage from './OtherPages/About/AboutPage';
import BeforeBeforeFooter from './main-pages/BeforeBeforeFooter/BeforeBeforeFooter';
import VehicleFleet from './OtherPages/VehicleFleet/VehicleFleet';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [scroll, setScroll] = useState(false)
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
  }, [])
  return (
    // relative
    <BrowserRouter>
    <div className="App ">
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className={`${scroll ? "showbtn" : "hidebtn"} fixed block mybutton text-3xl text-white z-30 bottom-10 right-10`}>
        <BsFillArrowUpSquareFill />
      </div>
      <Test />
      <Services />
      <SectionVideo />
      <Booking />
      <Rent />
      <Premium />
      <Testimonal />
      <BeforeBeforeFooter />
      <BeforeFooter bgimagetestimonal={"bgimagetestimonal"} TextColorBeforeFooter={"TextColorBeforeFooter"}/>
      <Footer  bgDark={"bgFooterDark"} colorFooterLight={"colorFooterLight"}/>
      
      {/* <AboutPage />
       <VehicleFleet/>  */}
    </div>
    </BrowserRouter>
  );
}

export default App;
