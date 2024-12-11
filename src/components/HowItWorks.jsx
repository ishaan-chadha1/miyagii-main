import React from "react";

const HowItWorks = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.3, // Optional for contrast
        }}
      >
        <source src="/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 80px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              margin: "0",
              textAlign: "left",
            }}
          >
            How
            <br />
            <span
              style={{
                color: "#5A87FF",
                textDecoration: "underline",
              }}
            >
              It Works
            </span>
          </h1>
        </div>
        <div style={{ flex: 2, textAlign: "left", paddingLeft: "40px" }}>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", margin: "0 0 20px 0" }}>
            Whether it’s having an easy-to-use verification and timestamping platform for all your
            documents or the sheer simplicity of decentralised data storage, Miyagi does it all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
