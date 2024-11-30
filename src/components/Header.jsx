import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [dropdownOpen, setDropdownOpen] = useState(null); // To manage dropdown visibility
  const [hoveredButton, setHoveredButton] = useState(null); // Track hovered button

  // Handle dropdown toggling
  const openDropdown = (dropdown) => {
    setDropdownOpen(dropdown);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  // Determine which button the oval should hover over based on the route
  const getActiveButton = () => {
    if (location.pathname === "/") return "login";
    if (location.pathname === "/verify") return "verify";
    return null;
  };

  const activeButton = getActiveButton();

  const renderButton = (text, id, onClick) => (
    <div
      style={{
        ...styles.buttonContainer,
        ...(activeButton === id && hoveredButton !== id ? styles.activeOval : {}),
      }}
      onMouseEnter={() => setHoveredButton(id)}
      onMouseLeave={() => setHoveredButton(null)}
    >
      <motion.button
        style={styles.button}
        whileHover={{
          scale: 1.1,
          color: "#4B0082", // Dark purple text on hover
        }}
        onClick={onClick}
      >
        {text}
      </motion.button>
    </div>
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <h1 style={styles.logo} onClick={() => navigate("/")}>
            MIYAGI
          </h1>
        </div>

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
              whileHover={{
                scale: 1.1,
                color: "#4B0082", // Dark purple text on hover
              }}
            >
              Products
            </motion.button>
            {dropdownOpen === "products" && (
              <motion.div
                style={styles.dropdownContent}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.button
                  style={styles.dropdownItem}
                  whileHover={{
                    color: "#4B0082", // Dark purple text on hover
                  }}
                  onClick={() => navigate("/storage")}
                >
                  Storage
                </motion.button>
                <motion.button
                  style={styles.dropdownItem}
                  whileHover={{
                    color: "#4B0082", // Dark purple text on hover
                  }}
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
              whileHover={{
                scale: 1.1,
                color: "#4B0082", // Dark purple text on hover
              }}
            >
              Subscription
            </motion.button>
            {dropdownOpen === "subscription" && (
              <motion.div
                style={styles.dropdownContent}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.button
                  style={styles.dropdownItem}
                  whileHover={{
                    color: "#4B0082", // Dark purple text on hover
                  }}
                  onClick={() => navigate("/storage-pricing")}
                >
                  Storage Pricing
                </motion.button>
                <motion.button
                  style={styles.dropdownItem}
                  whileHover={{
                    color: "#4B0082", // Dark purple text on hover
                  }}
                  onClick={() => navigate("/verification-pricing")}
                >
                  Verification Pricing
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Render Buttons */}
          {renderButton("Verify Now", "verify", () => navigate("/verify"))}
          {renderButton("Login", "login", () => navigate("/login"))}
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
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#5379FE", // Blue text for the logo
    fontFamily: "'Cabin', sans-serif",
    letterSpacing: "0.05rem",
    cursor: "pointer",
  },
  buttonsOutline: {
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
    color: "#5379FE", // Default blue text
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
    position: "relative",
  },
  buttonContainer: {
    position: "relative",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    transition: "background 0.3s ease", // Smooth oval disappearance on hover
  },
  activeOval: {
    background: "#ADD8E6",  // Blue oval for active button
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
    color: "#5379FE", // Default blue text
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
