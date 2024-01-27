import Contact from "../components/Contact";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Upload from "../components/Upload";

function VerificationPricing() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <Header />
      <div className="mt-[10rem] md:mt-[0rem]">
        <Upload />
        {/* <div className="w-full flex justify-center">
          <NavLink to="/subscription">
            <button className="p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin">
              pricing of the products
            </button>
          </NavLink>
        </div> */}
        <Contact />
      </div>
    </>
  );
}

export default VerificationPricing;
