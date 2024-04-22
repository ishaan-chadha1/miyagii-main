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
    <button class="cursor-pointer text-white relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-30% to-blue-700 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-blue-500 before:from-10% before:via-blue-600 before:via-30% before:to-blue-700 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-blue-800 focus:ring-blue-800">
        Pricing of Products
    </button>
</div>
    <Contact/>
    </div>
   
    </> );
}

export default Verfiaction;