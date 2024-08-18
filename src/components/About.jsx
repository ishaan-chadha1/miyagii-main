import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import PhilosophyCarousel from "./PhilosophyCarousel";

import GlideCarousel from "../components/GlideCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";
import AboutThree from "./AboutThree";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {}, []);

  return (
    <section
    className="about w-full min-h-[70vh] pt-[0vh] pb-[10vh] flex flex-col gap-[3rem] relative mx-auto"
    ref={ref}
  >
    {/* PhilosophyCarousel already renders, uncomment below if needed */}
    {/* <div className={` mx-auto ${styles.paddingX}`}>
      <h1 className={`${styles.heroHead2Text}  text-white text-center`}>
        <span className="text-black">why miyagi ?</span>
      </h1>
    </div> */}

    <PhilosophyCarousel />

    {inView && (
      <motion.div
        className={`w-7xl mx-auto ${styles.paddingX} items-start lg:w-[80vw]`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
      </motion.div>
    )}
     <AboutThree/>
  </section>
  );
}

export default About;
