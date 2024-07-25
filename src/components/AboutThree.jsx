import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutThree() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    gsap.to(".box10", {
      scrollTrigger: {
        trigger: ".trigger4",
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
        trigger: ".trigger4",
        start: "top top",
        endTrigger: "bottom bottom",
        scrub: 1,
      },
      x: -800,
      z: 200,
      ease: Power1,
      duration: 1.5,
    });

    gsap.to(".box12", {
      scrollTrigger: {
        trigger: ".trigger4",
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
        trigger: ".trigger4",
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
      className={`trigger4 w-full min-h-[70vh] md:pt-[10vh] pb-[10vh] relative mx-auto `}
      ref={ref}
    >
      <motion.img
        className="box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] md:hidden"
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
      <h2
  style={{
    color: 'black',
    textAlign: 'center',
    fontSize: '25px',
    marginTop: '50px',
    maxWidth: '80%',
    margin: '0 auto'
  }}
>
          Miyagi does not keep a trace of your data. Your assets are securely
          stored decentrally making it immune to exploitation. We forgo the
          notion of negativity in relation to data privacy and give you the
          reins to your assets.
        </h2>
    </section>
  );
}

export default AboutThree;
