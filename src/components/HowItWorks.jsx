import React from "react";
import VideoBackground from "./VideoBackground"; // Ensure the path matches your project structure

const HowItWorks = () => {
  return (
    <VideoBackground src="public/VideoBackground.mp4">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent overlay for text readability
          color: "white",
          padding: "50px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          {/* Left: Heading */}
          <div style={{ flex: 2 }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                lineHeight: "1.2",
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

          {/* Middle: Description */}
          <div style={{ flex: 4, textAlign: "left", paddingLeft: "40px" }}>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", margin: "0" }}>
              Whether it’s having an easy-to-use verification and timestamping platform for all your
              documents or the sheer simplicity of decentralised data storage,
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", margin: "0" }}>
              Miyagi does it all.
            </p>
          </div>

          {/* Right: Button */}
          <button className="relative flex items-center px-6 py-3 text-base font-semibold text-white bg-transparent border-2 border-white rounded-full group hover:bg-white hover:text-black transition-all duration-300 focus:outline-none">
            <span className="relative flex items-center">LEARN MORE</span>
            <div className="ml-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Features Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "20px",
            paddingTop: "15vh",
          }}
        >
          {/* Feature 1 */}
          <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Decentralized Storage and Verifiable Uploads
            </h3>
            <img
              src="public/Asset_Decentralised_003.png"
              alt="Decentralized Storage"
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              Data is encoded and split into smaller chunks and distributed across multiple nodes to
              enhance redundancy and reliability. This ensures that the file is securely stored and
              accessible while maintaining data integrity.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              E-Sign
            </h3>
            <img
              src="/public/Asset_ESIGN.png"
              alt="E-Sign"
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              Experience secure, efficient, and versatile document signing with Miyagi.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Encryption and Decryption
            </h3>
            <img
              src="public/Asset_Encryption.png"
              alt="Encryption"
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              Miyagi uses AES encryption to secure files, accessible only with the correct decryption
              key. To decrypt a file, a corresponding decryption algorithm is utilized to restore the
              file to its original state.
            </p>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default HowItWorks;
