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
    {/* <Description /> */}
    {/* <Upload/> */}
    <div className="w-full flex justify-center">
    <button class="cursor-pointer text-white relative text-[14px] w-[10em] h-[3em] text-center bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-30% to-blue-700 to-90% bg-[length:400%] rounded-md z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[2px] before:-bottom-[2px] before:-left-[2px] before:-right-[2px] before:bg-gradient-to-r before:from-blue-500 before:from-10% before:via-blue-600 before:via-30% before:to-blue-700 before:bg-[length:400%] before:-z-10 before:rounded-md before:hover:blur-sm before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:100%] active:bg-blue-800 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
    Pricing of Products
</button>
</div>
    <Contact/>
    </div>
   
    </> );
}

export default Verfiaction;