import React from "react";

const AnimatedBackground = ({ children }) => {
  return (
    <div style={styles.background}>
      <div style={styles.oval1}></div>
      <div style={styles.oval2}></div>
      <div style={styles.overlay}>{children}</div>
    </div>
  );
};

const styles = {
  background: {
    width: "100%",
    height: "100vh",
    background: "black",
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
    justifyContent: "space-between",
    padding: "0 5rem",
    zIndex: 2, // Content above background
  },
  oval1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(93, 56, 185, 0.7), transparent 60%)",
    borderRadius: "50%",
    top: "-200px",
    left: "0", // Start at the left edge
    animation: "moveOval1 8s ease-in-out infinite",
    zIndex: 1, // Behind content
  },
  oval2: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(80, 0, 200, 0.6), transparent 60%)",
    borderRadius: "50%",
    bottom: "-250px",
    right: "0", // Start at the right edge
    animation: "moveOval2 8s ease-in-out infinite",
    zIndex: 1, // Behind content
  },
};

// Updated animations for full-screen movement
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes moveOval1 {
    0% { transform: translateX(0); } /* Start at the left edge */
    50% { transform: translateX(100vw); } /* Move fully to the right */
    100% { transform: translateX(0); } /* Return to the left */
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  @keyframes moveOval2 {
    0% { transform: translateX(0); } /* Start at the right edge */
    50% { transform: translateX(-100vw); } /* Move fully to the left */
    100% { transform: translateX(0); } /* Return to the right */
  }
`,
  styleSheet.cssRules.length
);

export default AnimatedBackground;
