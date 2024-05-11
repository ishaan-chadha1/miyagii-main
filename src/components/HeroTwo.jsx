import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function HeroTwo() {
  const [currentWord, setCurrentWord] = useState("");
  const [displayedWord, setDisplayedWord] = useState("");
  const miyagiWords = ["MIYAGI", "ミヤギ", "미야기", "Мияги", "米亚基", "مياجي"];
  let wordIndex = 0;

  useEffect(() => {
    const updateWord = () => {
      const word = miyagiWords[wordIndex];
      setCurrentWord(word);
      setDisplayedWord(""); // Reset displayed word
      let displayIndex = 0;

      const intervalId = setInterval(() => {
        setDisplayedWord(word.substring(0, displayIndex + 1)); // Incrementally display the word
        displayIndex++;
        if (displayIndex === word.length) {
          clearInterval(intervalId);
          // Wait before transitioning to the next word
          setTimeout(() => {
            wordIndex = (wordIndex + 1) % miyagiWords.length;
            updateWord(); // Update to the next word
          }, 2000); // Time before changing the word
        }
      }, 150); // Speed of letter animation
    };

    updateWord();
    return () => {
      // Cleanup function to clear intervals when component unmounts or updates
      clearInterval(intervalId);
    };
  }, []);

  // Existing GSAP animations for boxes
  useEffect(() => {
    gsap.to(".box1", { scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 }, x: -500, y: 200, ease: Power1, duration: 2 });
    gsap.to(".box2", { scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 }, x: -500, y: 200, ease: Power1, duration: 2 });
    gsap.to(".box3", { scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 }, x: 600, y: 200, ease: Power1, duration: 2 });
    gsap.to(".box4", { scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 }, x: 200, y: 200, ease: Power1, duration: 2 });
  }, []);

  return (
    <section className={`trigger background relative w-full max-h-[100vh] md:min-h-[100vh] mx-auto `}>
      <motion.img className="box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]" src={box1} alt="box" />
      <motion.img className="box box2 absolute top-[75vh] left-[200.47px] hidden md:inline-block md:top-[75vh] md:left-[200.47px] rotate-[-40.33]" src={box2} alt="box" />
      <motion.img className="box box3 absolute top-[80vh] right-[0px] md:hidden xl:inline-block xl:top-[80vh] xl:right-[300.47px] rotate-[-40.33]" src={box3} alt="box" />
      <motion.img className="box box4 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]" src={box4} alt="box4" />

      <div className={`pt-[300px] mx-auto ${styles.paddingX}`}>
        <div>
          <h1 className={`${styles.heroHead2Text} text-white uppercase text-center`}>
            <span className="text-black">
              {"<"}With <span className="text-[#5379FE]">{displayedWord}</span> your<br />
              documents are safe{">"}
            </span>
          </h1>
        </div>
      </div>

      <div className={`verify-button-display mt-[100px] max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start`}>
        <div className="verify-button mx-auto flex flex-row gap-[1.5rem]">
          <motion.button className="min-w-[160px] min-h-[50px] font-poppins font-medium cursor-pointer text-[16px] rounded-3xl border-2 p-2 text-white bg-[#5379FE]" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            Verify
          </motion.button>
          <motion.button className="min-w-[160px] min-h-[50px] font-poppins font-medium cursor-pointer text-[16px] rounded-3xl border-2 p-2 text-black bg-white" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            Decentralize
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default HeroTwo;
