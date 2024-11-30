import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null); // To manage dropdown visibility
  const [isLoginHovered, setIsLoginHovered] = useState(false); // To handle Login button hover state

  // Handle dropdown toggling
  const openDropdown = (dropdown) => {
    setDropdownOpen(dropdown);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  // Framer Motion Variants for Dropdown Animation
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: "-5%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.75,
      },
    },
  };

  // Framer Motion Variants for Hover Animation on Items
  const hoverVariants = {
    hover: {
      scale: 1.1,
      color: "#5379FE", // Blue color on hover
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <motion.div
          style={styles.logoContainer}
          variants={hoverVariants}
          // whileHover="hover"
        >
          <h1 style={styles.logo} onClick={() => navigate("/")}>
            MIYAGI
          </h1>
        </motion.div>

        {/* Buttons Outline Container */}
        <div style={styles.buttonsOutline}>
          {/* Products Dropdown */}
          <div
            style={styles.dropdown}
            onMouseEnter={() => openDropdown("products")}
            onMouseLeave={closeDropdown}
          >
            <motion.button
              style={styles.button}
              variants={hoverVariants}
              whileHover="hover"
            >
              Products
            </motion.button>
            {dropdownOpen === "products" && (
              <motion.div
                style={styles.dropdownContent}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.button
                  style={styles.dropdownItem}
                  variants={hoverVariants}
                  whileHover="hover"
                  onClick={() => navigate("/storage")}
                >
                  Storage
                </motion.button>
                <motion.button
                  style={styles.dropdownItem}
                  variants={hoverVariants}
                  whileHover="hover"
                  onClick={() => navigate("/verification")}
                >
                  Verification
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Subscription Dropdown */}
          <div
            style={styles.dropdown}
            onMouseEnter={() => openDropdown("subscription")}
            onMouseLeave={closeDropdown}
          >
            <motion.button
              style={styles.button}
              variants={hoverVariants}
              whileHover="hover"
            >
              Subscription
            </motion.button>
            {dropdownOpen === "subscription" && (
              <motion.div
                style={styles.dropdownContent}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.button
                  style={styles.dropdownItem}
                  variants={hoverVariants}
                  whileHover="hover"
                  onClick={() => navigate("/storage-pricing")}
                >
                  Storage Pricing
                </motion.button>
                <motion.button
                  style={styles.dropdownItem}
                  variants={hoverVariants}
                  whileHover="hover"
                  onClick={() => navigate("/verification-pricing")}
                >
                  Verification Pricing
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Verify Now Button */}
          <motion.button
            style={styles.button}
            variants={hoverVariants}
            whileHover="hover"
            onClick={() => navigate("/verify")}
          >
            Verify Now
          </motion.button>

          {/* Login Button */}
          <div
            style={{
              ...styles.loginContainer,
              ...(isLoginHovered ? { background: "transparent" } : { background: "#5379FE" }), // Oval visible when not hovered
            }}
          >
            <motion.button
              style={styles.loginButton}
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
              whileHover={{
                color: "#5379FE", // Blue text on hover
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "transparent", // Fully transparent background
    padding: "1rem 2rem",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "blue", // Default black text
    fontFamily: "'Cabin', sans-serif",
    letterSpacing: "0.05rem",
    cursor: "pointer",
  },
  buttonsOutline: {
    background: "white",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    border: "2px solid #5379FE", // Blue outline container
    borderRadius: "50px",
    gap: "1.5rem",
    justifyContent: "space-between",
  },
  button: {
    background: "transparent",
    color: "#000", // Default black text
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
    position: "relative",
  },
  loginContainer: {
    position: "relative",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    transition: "background 0.3s ease", // Smooth oval disappearance on hover
  },
  loginButton: {
    position: "relative",
    background: "transparent",
    color: "#fff", // Default white text
    fontSize: "1rem",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
    transition: "color 0.3s ease", // Smooth text color transition
  },
  dropdown: {
    position: "relative",
  },
  dropdownContent: {
    position: "absolute",
    top: "2.5rem",
    left: 0,
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    zIndex: 10,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: "0.5rem 1rem",
    background: "#fff",
    color: "#000", // Default black text
    fontSize: "0.9rem",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    transition: "background 0.2s ease, color 0.2s ease",
  },
};

export default Header;
