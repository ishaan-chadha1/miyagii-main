import React, { useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";

const Verify = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to store uploaded files

  const handleFileDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <AnimatedBackground>
      <Header />
      <main style={styles.mainContainer}>
        {/* Welcome Section */}
        <h1 style={styles.welcomeText}>Welcome</h1>
        
        {/* Drag and Drop Section */}
        <div
          style={styles.dragDropContainer}
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          <div style={styles.uploadIcon}>
            <span style={styles.uploadArrow}>↑</span>
          </div>
          <p style={styles.dragDropText}>Drag and Drop</p>
          <input
            type="file"
            multiple
            style={styles.fileInput}
            onChange={handleFileSelect}
          />
        </div>

        {/* Uploaded Files List */}
        <div style={styles.uploadedFilesContainer}>
          {uploadedFiles.length > 0 && (
            <h2 style={styles.uploadedFilesHeading}>Uploaded Files:</h2>
          )}
          <ul style={styles.fileList}>
            {uploadedFiles.map((file, index) => (
              <li key={index} style={styles.fileItem}>
                {file.name}
              </li>
            ))}
          </ul>
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
    position: "relative",
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
  fileInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  uploadedFilesContainer: {
    marginTop: "2rem",
    textAlign: "center",
    color: "#fff",
  },
  uploadedFilesHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  fileList: {
    listStyleType: "none",
    padding: 0,
    color: "#fff",
    fontSize: "1rem",
  },
  fileItem: {
    marginBottom: "0.5rem",
  },
};

export default Verify;
