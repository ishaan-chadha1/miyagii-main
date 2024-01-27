import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
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
        <NavLink to="/storage-pricing">
          <div class="w-full h-40 flex items-center justify-center cursor-pointer">
            <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
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
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                Pricing of Our Products
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default FeatureTwo;
