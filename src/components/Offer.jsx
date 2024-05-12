import { styles } from "../styles";
import { Offer4, Offer5, Offer6, box1, box9 } from "../assets";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

function Offer() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      gsap.to(".desktopContentSection", {
        scrollTrigger: {
          trigger: ".gallery",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          endTrigger: ".last",
          scrub: true,
        },
        y: "-350%",
        ease: Power1.easeOut,
      });
    });

    const updateActiveBox = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 3.4;
      const boxIndex = Math.floor(scrollPosition / window.innerHeight) - 4;
      setActiveBox(Math.max(1, Math.min(boxIndex, 3)));  // Keep activeBox between 1 and 3
    };

    window.addEventListener("scroll", updateActiveBox);

    gsap.to(".box8", {
      scrollTrigger: {
        trigger: ".trigger2",
        start: "top top",
        scrub: true,
      },
      x: -500,
      y: 200,
      z: 200,
      ease: "power1.out",
      duration: 1.5,
    });

    gsap.to(".box9", {
      scrollTrigger: {
        trigger: ".trigger2",
        start: "top top",
        scrub: true,
      },
      x: 300,
      y: 200,
      z: 200,
      ease: "power1.out",
      duration: 1.5,
    });

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateActiveBox);
    };
  }, []);

  if (!isLargeScreen) {
    return null;
  }

  return (
    <section className={`trigger2 w-full relative min-h-[100vh] mx-auto`}>
      <motion.img
        className="box box8 absolute top-[10vh] left-[0px] rotate-[-40.33] hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box9 absolute top-[60vh] right-[0px] rotate-[-40.33]"
        src={box9}
        alt="box"
      />

      <div className="mt-[50px] md:mt-[100px]">
        <h1
          className={`${styles.heroHeadText} text-white uppercase text-center`}
        >
          <span className="text-black">
            What does {"<"}
            <span className="text-[#5379FE]">MIYAGI</span>
            {">"} have to offer?
          </span>
        </h1>
      </div>

      <div
        className={`mt-[50px] md:mt-[100px] xl:mt-[100px] w-full mx-auto xl:pl-[10rem] xl:pr-[10rem] pb-[0rem]`}
      >
        <div className="gallery">
          <div className="right">
            <div className="desktopPhotos">
              <div className="desktopPhoto red">
                <div
                  className={`border-2 mt-4 p-4 leading-6 tracking-wide ${
                    activeBox === 1 ? "active-box" : ""
                  } rounded-[20px]`}
                >
                  <h1 className="text-[#5379FE] text-[22px] mb-4">
                    Sign Documents
                  </h1>
                  <p className="text-[#807E87] text-[0.95rem]">
                    Are you tired of the hassles and uncertainties of
                    traditional document signing methods? Say goodbye to the
                    days of printing, scanning, and mailing documents. Welcome
                    to the future of secure, efficient, and tamper-proof
                    document signing with Blockchain technology!
                  </p>
                </div>

                <div
                  className={`border-2 mt-8 p-4 leading-6 tracking-wide ${
                    activeBox === 2 ? "active-box" : ""
                  } rounded-[20px]`}
                >
                  <h1 className="text-[#5379FE] text-[22px] mb-4">
                    Store Data
                  </h1>
                  <p className="text-[#807E87] text-[0.95rem]">
                    Discover the pinnacle of data security and trust in
                    decentralized storage, harnessed by Blockchain. Bid adieu to
                    centralized vulnerabilities and reclaim dominion over your
                    prized information.
                  </p>
                </div>

                <div
                  className={`border-2 mt-8 p-4 leading-6 tracking-wide ${
                    activeBox === 3 ? "active-box" : ""
                  } rounded-[20px]`}
                >
                  <h1 className="text-[#5379FE] text-[22px] mb-4">
                    Verify Documents
                  </h1>
                  <p className="text-[#807E87] text-[0.95rem]">
                    Tired of relying on traditional, easily forgeable
                    verification methods? Enter a new era of unassailable trust
                    and transparency with Blockchain-powered document
                    verification. Ensure authenticity and trust while bidding
                    farewell to counterfeiting concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <motion.div className="desktopContent" ref={ref}>
              {inView && (
                <motion.div className="desktopContentSection">
                  {activeBox === 1 && (
                    <motion.img
                    src={Offer6}
                    alt=""
                    className="img img1 rounded-[20px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 2.5, delay: 0 }}  // Increased duration for the first card
                  />
                  )}
                </motion.div>
              )}
              {inView && (
                <motion.div className="desktopContentSection">
                  {activeBox === 2 && (
                    <motion.img
                      src={Offer4}
                      alt=""
                      className="img img2 rounded-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  )}
                </motion.div>
              )}
              {inView && (
                <motion.div className="desktopContentSection last">
                  {activeBox === 3 && (
                    <motion.img
                      src={Offer5}
                      alt=""
                      className="img img3 last rounded-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
