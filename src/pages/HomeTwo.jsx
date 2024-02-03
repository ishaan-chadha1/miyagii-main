import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import Goal from "../components/Goal";
import Header from "../components/Header";
import HeroTwo from "../components/HeroTwo";
import Knowledge from "../components/Knowledge";
import Newsletter from "../components/Newsletter";
import Offer from "../components/Offer";
import OfferTwo from "../components/OfferTwo";
import GlideCarousel from "../components/GlideCarousel";
import { useEffect } from "react";
import Power from "../components/Power";

function HomeTwo() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <div>
        <Header />
        <HeroTwo />

        <Power />
        <Offer className="hidden lg:block" />
        <OfferTwo className="lg:hidden" />
        <Goal />
        <GlideCarousel />
        <Knowledge />
        <AboutTwo />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default HomeTwo;
