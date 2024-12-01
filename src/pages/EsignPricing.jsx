import Contact from "../components/Contact";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import EsignSubscription from "../components/EsignSubscription";

function EsignPricing() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <Header />
      <div className="mt-[10rem] md:mt-[0rem]">
        <EsignSubscription />
      </div>
    </>
  );
}

export default EsignPricing;
