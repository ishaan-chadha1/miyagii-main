import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Believe from "../components/Believe";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Power from "../components/Power";
import Graph from "../components/Graph";
import { useEffect } from "react";
import Comparison from "../components/Comparison";
import PhilosophyCarousel from "../components/PhilosophyCarousel";
import { PhilCards } from "../components/PhilCards";

function Philosophy() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return ( <>
    <Header/>
    <Hero/>
    {/* <Power/> */}
    <About/>
    <Graph />
    {/* <PhilCards /> */}
    <Believe/>
    <Comparison />
    <Location/>
    <Footer/>
    </> );
}

export default Philosophy;