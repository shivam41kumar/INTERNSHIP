import React from "react";
import "./App.css";
import logo1 from "./TSC_Tech_Logo.png";
import logo2 from "./msme-new.png";
import qrCode from "./qr_code.png";
import banner1 from "./banner.jpg";
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={logo1} alt="TheSinghC Technologies Logo" className="logo round-logo" />
        <h1>TheSinghC_Technologies</h1>
        <img src={logo2} alt="MSME Logo" className="logo" />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h3>Unlock Your Potential with Internship Program</h3>
          <p>
            Gain valuable hands-on experience and prepare for a successful career in IT. Join us to explore the future and become a part of our vibrant community.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzjm5kMYjbsPhpJi73GIWzRiBtQEqhkwUpPq8gXL-DboC4kQ/viewform" target="_blank" rel="noopener noreferrer">
      <button className="register-button">Register Now</button>
    </a>
        </div>
        <img  alt="" className="hero-image" />
      </section>

      {/* Internship Details Section */}
      <section className="internship-details">
        <h2>Internship Opportunities Await!</h2>
        <p>
          TheSinghC_Technologies is a leading internship provider in the IT sector. We're committed to bridging the gap between students and the industry. By offering high-quality internships, we help students gain valuable hands-on experience and prepare for successful careers.
        </p>

        <h3>Exclusive Opportunities:</h3>
        <p>
          From each domain of a batch, we'll select top performers for attractive rewards like SWAGS, paid WFH internships, and more. All participants will receive a completion certificate, letter of recommendation, and access to our placement support group.
        </p>
      </section>

      {/* Available Domains Section */}
      <section className="domains-section">
        <h2>Available Domains</h2>
        <ul className="domain-list">
          <li>ML Intern</li>
          <li>Data Analyst Intern</li>
          <li>Python Developer Intern</li>
          <li>Java Developer Intern</li>
          <li>Web Development Intern</li>
          <li>UI/UX Designer Intern</li>
        </ul>

        <div className="qr-code-section">
          <h4>Scan to Register (First 50 Get Special Benefits)</h4>
          <img src={qrCode} alt="QR Code" className="qr_code" />
          <p className="first-50-note">* Limited Offer</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <footer className="App-footer">
        <p>Contact us: +91-8972861122 (WhatsApp Only) | thesinghctech@gmail.com</p>
        <p>&copy; 2024 TheSinghC_Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
