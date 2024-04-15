import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    gsap.to(".box1", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: -500,
      y: 200,

      ease: Power1,
      duration: 2,
    });

    gsap.to(".box2", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: -500,
      y: 200,

      ease: Power1,
      duration: 2,
    });

    gsap.to(".box3", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: 600,
      y: 200,

      ease: Power1,
      duration: 2,
    });

    gsap.to(".box4", {
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        scrub: 1,
      },
      x: 200,
      y: 200,

      ease: Power1,
      duration: 2,
    });
  }, []);

  return (
    <section
      className={`trigger background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto `}
    >
      <motion.img
        className="box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box2 absolute top-[75vh] left-[200.47px] hidden md:inline-block md:top-[75vh] md:left-[200.47px] rotate-[-40.33]"
        src={box2}
        alt="box"
      />

      <motion.img
        className="box box3 absolute top-[80vh] right-[0px] md:hidden  xl:inline-block  xl:top-[80vh] xl:right-[300.47px] rotate-[-40.33]"
        src={box3}
        alt="box"
      />

      <motion.img
        className="box box4 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]"
        src={box4}
        alt="box4"
      />

      <div className={` mx-auto ${styles.paddingX}`}>
        
          <h1
            className={`${styles.heroHead2Text}  text-white uppercase text-center`}
          >
            <span className="text-black">
              {"<"}Why <span className="text-[#5379FE]">MIYAGI</span>
              {">"}
            </span>
          </h1>
        
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[2rem]">
          <div className="text-center text-[2.3rem]">
          Unlike data storage providers who blatantly harvest
your data “Legally” by barricading access to their
application unless you accept sabotaging T&C’s
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
