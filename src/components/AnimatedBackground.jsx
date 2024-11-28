// components/AnimatedBackground.js
import React from "react";

const AnimatedBackground = ({ children }) => {
  return (
    <div style={styles.background}>
      <div style={styles.overlay}>{children}</div>
    </div>
  );
};

const styles = {
  background: {
    width: "100%",
    height: "100vh",
    background: `
      radial-gradient(circle at 30% 30%, rgba(63, 81, 181, 0.8), transparent),
      radial-gradient(circle at 70% 70%, rgba(136, 14, 79, 0.8), transparent),
      linear-gradient(135deg, #0f0c29, #302b63, #24243e)
    `,
    backgroundSize: "300% 300%",
    animation: "gradientShift 8s ease infinite",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Align logo and form horizontally
    padding: "0 5rem",
  },
};

// Add the global animation style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,
  styleSheet.cssRules.length
);

export default AnimatedBackground;
