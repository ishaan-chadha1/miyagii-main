import React from "react";
import MainHeading from "./MainHeading";
import SubText from "./SubText";

const LandingHero = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start", // Align items to the top
        padding: "50px 80px", // Adjust padding for alignment
        boxSizing: "border-box",
      }}
    >
      {/* Left Side - Main Heading */}
      <div
        style={{
          paddingTop:"50px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <MainHeading />
      </div>

      {/* Right Side - Subtext */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end", // Align subtext to the right
          marginTop: "calc(3 * 4rem + 60px)", // Match height of MainHeading
        }}
      >
        <SubText />
      </div>
    </div>
  );
};

export default LandingHero;
