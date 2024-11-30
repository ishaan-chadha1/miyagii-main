import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header"; // Reuse the Header component

const Verify = () => {
  return (
    <AnimatedBackground>
      <Header />
      <main style={styles.mainContainer}>
        {/* Welcome Section */}
        <h1 style={styles.welcomeText}>Welcome</h1>
        
        {/* Drag and Drop Section */}
        <div style={styles.dragDropContainer}>
          <div style={styles.uploadIcon}>
            <span style={styles.uploadArrow}>↑</span>
          </div>
          <p style={styles.dragDropText}>Drag and Drop</p>
        </div>
      </main>
    </AnimatedBackground>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full height for the main section
    textAlign: "center",
    paddingTop: "5rem", // Adjust for header height
  },
  welcomeText: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "2rem",
  },
  dragDropContainer: {
    background: "rgba(255, 255, 255, 0.1)", // Transparent background
    borderRadius: "12px",
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    width: "300px",
    height: "200px",
    gap: "1rem",
  },
  uploadIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.2)", // Slightly transparent circle
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  uploadArrow: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  dragDropText: {
    fontSize: "1.2rem",
    color: "#fff",
    textAlign: "center",
  },
};

export default Verify;
