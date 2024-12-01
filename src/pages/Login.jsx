import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <AnimatedBackground>
      <Header /> {/* Render the Header component */}
      <div style={styles.container}>
        {/* Left Section: Logo */}
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>MIYAGI</h1>
        </div>

        {/* Right Section: Login Form */}
        <div style={styles.loginContainer}>
          <h2 style={styles.title}>Welcome</h2>
          <p style={styles.subtitle}>Securely Log In and Get Started!</p>
          <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Username" />
            <input style={styles.input} type="password" placeholder="Password" />
            <button style={styles.button}>Login</button>
            <button style={styles.googleButton}>Login With Google</button>
          </form>
          <div style={styles.links}>
            <a href="/forgot-password" style={styles.link}>
              Forgot Password?
            </a>
            <a href="/sign-up" style={styles.link}>
              Sign-up Now
            </a>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: "8rem 5rem 5rem", // Increased top padding to move login container down
  },
  logoContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "2rem",
  },
  logo: {
    color: "#fff",
    fontSize: "4rem",
    fontWeight: "bold",
    letterSpacing: "0.2rem",
    textShadow: "0 0 10px rgba(0, 0, 255, 0.5)",
    textAlign: "center",
  },
  loginContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.8)",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "400px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
  },
  title: {
    color: "#fff",
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  subtitle: {
    color: "#aaa",
    fontSize: "1rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    margin: "0.5rem 0",
    padding: "0.8rem",
    border: "1px solid #fff",
    borderRadius: "4px",
    fontSize: "1rem",
    background: "transparent",
    color: "#fff",
  },
  button: {
    margin: "1rem 0",
    padding: "0.8rem",
    background: "#000", // Black background
    color: "#fff", // White text
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  googleButton: {
    margin: "0.5rem 0",
    padding: "0.8rem",
    background: "#000", // Black background
    color: "#0000ff", // Blue text
    border: "1px solid #0000ff", // Blue border for consistency
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
  },
  links: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};

export default LoginPage;
