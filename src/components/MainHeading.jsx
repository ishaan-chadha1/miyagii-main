import React from "react";

const MainHeading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start", // Left alignment
        textAlign: "left", // Text alignment
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "400",
          lineHeight: "1.1",
          margin: "0 0 30px 0", // Space between lines
        }}
      >
        Decentralise.
      </h1>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "400",
          lineHeight: "1.1",
          margin: "0 0 30px 0",
        }}
      >
        Simplify.
      </h1>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "400",
          lineHeight: "1.1",
          margin: "0",
        }}
      >
        Digitilise.
      </h1>
    </div>
  );
};

export default MainHeading;
