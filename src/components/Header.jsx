import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { Icon } from "@iconify/react";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: "-5%"
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.75
      }
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center shadow-sm rounded-3xl bg-white md:max-w-[80vw] mx-auto p-4 border-2">
        <Link to="/" className="" onClick={() => { window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="max-w-[100px] md:max-w-[150px] object-contain" />
        </Link>

        <ul className="navbar list-none hidden lg:flex flex-row gap-10">
          <li className="hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative">
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li className="hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative products-dropdown">
            <div className="flex flex-row justify-between">
              Products <span className="mx-auto"><Icon icon="iconamoon:arrow-down-2-thin" width="26" className="flex" /></span>
            </div>
            <div className="dropdown-content absolute" ref={ref}>
              {inView && (
                <>
                  <NavLink to="/storage">
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" className="p-4 bg-[#fff] border-t-2 border-r-2 border-l-2 rounded-tl-lg rounded-tr-lg text-black hover:bg-blue-500 hover:text-white">
                      <span>Storage</span>
                    </motion.div>
                  </NavLink>
                  {/* <NavLink to="/verification">
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" className="p-4 bg-[#fff] border-r-2 border-l-2 text-black hover:bg-blue-500 hover:text-white">
                      
                      <span>Esign</span>
                    </motion.div>
                  </NavLink> */}
                  <NavLink to="/verification">
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" className="p-4 bg-[#fff] border-b-2 border-r-2 border-l-2 rounded-bl-lg rounded-br-lg text-black hover:bg-blue-500 hover:text-white">
                    <span>Verification</span>
                    </motion.div>
                  </NavLink>
                </>
              )}
            </div>
          </li>
          <li className="hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative products-dropdown">
            <div className="flex flex-row justify-between">
              Subscription <span className="mx-auto"><Icon icon="iconamoon:arrow-down-2-thin" width="26" className="flex" /></span>
            </div>
            <div className="dropdown-content absolute" ref={ref1}>
              {inView1 && (
                <>
                  <NavLink to="/storage-pricing">
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" className="p-4 bg-[#fff] border-t-2 border-r-2 border-l-2 rounded-tl-lg rounded-tr-lg text-black hover:bg-blue-500 hover:text-white">
                      <span>Storage</span>
                    </motion.div>
                  </NavLink>
                  <NavLink to="/verification-pricing">
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" className="p-4 bg-[#fff] border-r-2 border-l-2 text-black hover:bg-blue-500 hover:text-white">
                      <span>Verification</span>
                    </motion.div>
                  </NavLink>
                  <NavLink to="/esign-pricing">
                  <motion.div variants={dropdownVariants} initial="hidden" animate="visible" className="p-4 bg-[#fff] border-b-2 border-r-2 border-l-2 rounded-bl-lg rounded-br-lg text-black hover:bg-blue-500 hover:text-white">
  <span>Esign </span>
</motion.div>
                  </NavLink>
                </>
              )}
            </div>
          </li>
          <li className="hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative">
            <NavLink to="/philosophy">Philosophy</NavLink>
          </li>
          {/* Additional menu items if any */}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <NavLink to="/" exact activeClassName="active">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/storage">
                  <li>Storage</li>
                </NavLink>
                <NavLink to="/philosophy">
                  <li>Philosophy</li>
                </NavLink>
                {/* Additional mobile navigation items */}
              </ul>
            </div>
          </nav>
        </div>
        <motion.div
          className="text-black hidden lg:inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17}}
        >
          <button
      className="min-w-[140px] font-poppins font-medium cursor-pointer text-[16px] rounded-xl border-2 p-2 text-white bg-[#5379FE] hover:w-[120px] hover:scale-95"
      onClick={() => navigate('/login')}
    >Login
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
