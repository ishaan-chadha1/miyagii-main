import Contact from "../components/Contact";
import EsignSubscription from "../components/EsignSubscription";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Esigns from "../components/Esigns";
import Description from "../components/Description";
import EsignBanner from "../components/EsignBanner";
import EsignCard from "../components/EsignCard";
import { useEffect } from "react";

function Esign() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <Header />
      <EsignBanner/>
      <EsignCard/>
      {/* <Description/> */}
      <Esigns/>
      {/* <EsignSubscription /> */}
      <div className="w-full flex justify-center">
      <NavLink to="/esign-pricing">
          <div class="w-full h-40 flex items-center justify-center cursor-pointer">
            <div class="relative inline-flex items-center justify-start py-2 pl-3 pr-10 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white text-black dark:hover:text-gray-200 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-transparent text-black dark:hover:text-gray-200 group">
                Pricing of Our Products
              </span>
            </div>
          </div>
        </NavLink>
      </div>

      <Contact />
    </>
  );
}

export default Esign;
