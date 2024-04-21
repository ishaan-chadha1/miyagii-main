import Contact from "../components/Contact";
import Description from "../components/Description";
import Header from "../components/Header";
import SubscriptionBanner from "../components/SubscriptionBanner";
import Upload from "../components/Upload";
import { NavLink} from "react-router-dom";
import { useEffect } from "react";


function Verfiaction() {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
    return ( <>
    <Header/>
    <div className="mt-[10rem] md:mt-[0rem]">
      <SubscriptionBanner/>
    <Description />
    {/* <Upload/> */}
    <div className="w-full flex justify-center">
        <button class="cursor-pointer text-white relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
          Pricing of Our Products
        </button>
      </div>
    <Contact/>
    </div>
   
    </> );
}

export default Verfiaction;