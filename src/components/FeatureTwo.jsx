import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import Tilt from 'react-parallax-tilt';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { featurecardtwo } from "..";

gsap.registerPlugin(ScrollTrigger);

function FeatureCardTwo({ Image, heading, content, index, Image1 }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Tilt>
    <div
      key={index}
      className="activeBox"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inneractiveBox flex flex-col w-[280px] h-[390px] md:h-[455px] rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
        <div className="featured-image w-[100px] h-[100px] bg-blue-500 rounded-[20px]">
          <img
            className={`feature-image ${isHovered ? "hidden" : ""}`}
            src={Image}
            alt=""
          />
          <img
            className={`feature-image1 ${isHovered ? "" : "hidden"}`}
            src={Image1}
            alt=""
          />
        </div>
        
        <div>
          <h1 className=" text-[20px] md:text-[25px] font-normal uppercase">
            {heading}
          </h1>
        </div>
        <div>
          <p className="w-full text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
            {content}
          </p>
        </div>
      </div>
    </div>
    </Tilt>
  );
}

function FeatureTwo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {}, []);

  return (
    <section
      className={`trigger1 w-full xl:min-h-[60vh] relative mx-auto`}
      ref={ref}
    >
      {inView && (
        <div
          className={`pb-[10vh] w-5xl mx-auto ${styles.paddingX} items-start lg:w-[100vw]`}
        >
          <div className="w-full flex flex-wrap justify-center gap-6">
            {featurecardtwo.map((feature, index) => (
              <FeatureCardTwo key={index} index={index} {...feature} />
            ))}
          </div>
        </div>
      )}{" "}
      <div className="w-full flex justify-center">
        <button class="cursor-pointer text-white relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
          Pricing of Our Products
        </button>
      </div>
    </section>
  );
}

export default FeatureTwo;
