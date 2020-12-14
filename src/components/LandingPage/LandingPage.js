import React from "react";
import "./LandingPage.css";
import Music from "../../audio/Traditional Garifuna drumming - Paranda with Warasa.mp3";

function LandingPage() {

  return (
    <div>
      <div className="landingpage">
        <a href="/home" className="logo-link">
          <div className="logo-container"></div>
        </a>
        <div className="music">
          <audio autoPlay={true} controls={true} src={Music} type="audio/mp3" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
