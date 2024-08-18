import Contact from "../components/Contact";
import Description from "../components/Description";
import Header from "../components/Header";
import SubscriptionBanner from "../components/SubscriptionBanner";
import Upload from "../components/Upload";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";

function Verfiaction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="mt-[10rem] md:mt-[0rem]">
        <SubscriptionBanner />
        {/* <Description /> */}
        {/* <Upload/> */}
        {/* <div
          className={`mt-[40px] md:mt-[70px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto flex flex-row items-start`}
        >
          <div className="mx-auto flex flex-col gap-[1rem]">
            <div
              className={`text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize`}
            >
              Miyagi Labs pioneers secure and tamper-proof blockchain-based
              E-signatures, ensuring authenticity and trust in the digital
              document signing process.
            </div>
            <div
              className={`text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize`}
            >
              Miyagi Labs distinguishes itself through a cost-effective and
              premium blockchain-based E-signature solution, leveraging the
              inherent advantages over centralized servers. Our platform
              delivers cutting-edge E-signature capabilities that are both
              affordable and of the highest quality, disrupting the traditional
              cost dynamics associated with premium services.
            </div>
            <div className="text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize">
              Miyagi Labs stands as a beacon of innovation, offering businesses
              a cost-effective yet premium alternative to traditional
              E-signature solutions, with the added advantage of
              decentralization and enhanced security over centralized
              counterparts.
            </div>
          </div>
        </div> */}
        <div className="w-full flex justify-center mt-20">
          <button class="cursor-pointer text-white relative text-[14px] w-[10em] h-[3em] text-center bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-30% to-blue-700 to-90% bg-[length:400%] rounded-md z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[2px] before:-bottom-[2px] before:-left-[2px] before:-right-[2px] before:bg-gradient-to-r before:from-blue-500 before:from-10% before:via-blue-600 before:via-30% before:to-blue-700 before:bg-[length:400%] before:-z-10 before:rounded-md before:hover:blur-sm before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:100%] active:bg-blue-800 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Pricing of Products
          </button>
        </div>
        <Contact />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Verfiaction;
