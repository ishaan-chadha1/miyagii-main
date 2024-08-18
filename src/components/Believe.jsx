import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Believe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    gsap.to(".box10", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: -500,
      y: 200,
      z: 200,
      ease: Power1,
      duration: 1,
    });

    gsap.to(".box11", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: -900,
      z: 200,
      ease: Power1,
      duration: 1.5,
    });

    gsap.to(".box12", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: 600,
      y: 200,
      z: 200,
      ease: Power1,
      duration: 2,
    });
    gsap.to(".box13", {
      scrollTrigger: {
        trigger: ".trigger3",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: 600,
      y: 200,
      z: 200,
      ease: Power1,
      duration: 2.5,
    });
  }, []);

  return (
    <section
      className={`pt-[10vh] pb-[10vh] md:pt-[20vh] md:pb-[20vh] trigger3 w-full max-h-[100vh] relative mx-auto `}
      ref={ref}
    >
      <motion.img
        className="box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] rotate-[-40.33]"
        src={box2}
        alt="box"
      />
      <motion.img
        className="box box12 absolute top-[-5vh] right-[0px] xl:top-[7vh] rotate-[-40.33]"
        src={box4}
        alt="box"
      />

      <motion.img
        className="box box13 absolute bottom-[-25vh] right-[10vw] rotate-[-40.33]  hidden xl:inline-block"
        src={box3}
        alt="box"
      />
      {inView && (
        <motion.div
          className={` w-7xl mx-auto ${styles.paddingX} flex flex-col gap-10 lg:w-[80vw]`}
          initial={{
            opacity: 0,
           
          }}
          animate={{
            opacity: 1,
          
          }}
          transition={{ duration: 1, delay:0.5 }}
        >
<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 text-center leading-relaxed mb-6">
  If you believe in 
  <span className="text-[#5379FE] font-semibold"> Data Ownership</span>, 
  <span className="text-[#5379FE] font-semibold"> Tech Craftsmanship</span>, and 
  <span className="text-[#5379FE] font-semibold"> Bringing the Power Back to the People</span>, 
  we recommend you try out 
  <span className="text-[#5379FE] font-semibold"> Miyagi</span>.
</h2>

<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 text-center leading-relaxed mb-6">
  We hope that with your help, 
  <span className="text-[#5379FE] font-semibold"> Miyagi</span> can propel the world towards a future where issues 
  relating to 
  <span className="text-[#5379FE] font-semibold"> Data Ownership</span> are no longer a concern.
</h2>

<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 text-center leading-relaxed">
  <span className="text-[#5379FE] font-semibold">Together</span>, we shall make a 
  <span className="text-[#5379FE] font-semibold"> Difference</span>.
</h2>

        </motion.div>
      )}
    </section>
  );
}

export default Believe;
