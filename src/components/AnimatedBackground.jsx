import React from "react";

const AnimatedBackground = ({ children }) => {
  return (
    <div style={styles.background}>
      {/* Oval 1 */}
      <div id="oval1" style={styles.oval1}></div>

      {/* Oval 2 */}
      <div id="oval2" style={styles.oval2}></div>

      {/* Overlay */}
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    padding: "1rem",
  },
  oval1: {
    position: "absolute",
    width: "600px", // Increased size
    height: "600px",
    background: "radial-gradient(circle, rgba(93, 56, 185, 0.7), transparent 60%)",
    borderRadius: "50%",
    top: "-200px",
    left: "5%",
    animation: "moveOval1 10s ease-in-out infinite",
    zIndex: 1,
  },
  oval2: {
    position: "absolute",
    width: "500px", // Increased size
    height: "500px",
    background: "radial-gradient(circle, rgba(80, 0, 200, 0.6), transparent 60%)",
    borderRadius: "50%",
    bottom: "-200px",
    right: "5%",
    animation: "moveOval2 12s ease-in-out infinite",
    zIndex: 1,
  },
};

// Adding keyframes dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes moveOval1 {
    0% { transform: translate(-20vw, 0) scale(1); }
    50% { transform: translate(20vw, 20vh) scale(0.5); } /* Reduce to half size */
    100% { transform: translate(-20vw, 0) scale(1); }
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  @keyframes moveOval2 {
    0% { transform: translate(20vw, 0) scale(1); }
    50% { transform: translate(-20vw, -20vh) scale(0.5); } /* Reduce to half size */
    100% { transform: translate(20vw, 0) scale(1); }
  }
`,
  styleSheet.cssRules.length
);

export default AnimatedBackground;
