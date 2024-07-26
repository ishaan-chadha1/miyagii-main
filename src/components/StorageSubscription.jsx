import { styles } from "../styles";
import { Image1 } from "../assets";
import { motion } from "framer-motion";
import { box1, box8, box13 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import StorageCards from "./StoragePlans";
import StoragePlans from "./StoragePlans";

gsap.registerPlugin(ScrollTrigger);

function StorageSubscription() {
  useEffect(() => {
    gsap.to(".box14", {
      scrollTrigger: {
        trigger: ".trigger5",
        start: "top top",
        scrub: 1,
      },
      x: -500,
      y: 200,
      ease: Power1,
      duration: 2,
    });

    gsap.to(".box15", {
      scrollTrigger: {
        trigger: ".trigger5",
        start: "top top",
        scrub: 1,
      },
      x: 300,
      y: 200,
      ease: Power1,
      duration: 2,
    });

    gsap.to(".box16", {
      scrollTrigger: {
        trigger: ".trigger5",
        start: "top top",
        scrub: 1,
      },
      x: 600,
      y: 200,
      ease: Power1,
      duration: 2,
    });
  }, []);

  return (
    <section
      className={`trigger5 w-full relative md:pt-[100px] pb-[100px] min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]`}
    >
      <motion.img
        className="box box14 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box15 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box8}
        alt="box"
      />
      <motion.img
        className="box box16 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block"
        src={box13}
        alt="box"
      />
        <StoragePlans /> 
      
    </section>
  );
}

export default StorageSubscription;
