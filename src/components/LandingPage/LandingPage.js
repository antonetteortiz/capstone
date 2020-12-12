import React, { useEffect } from "react";
import "./LandingPage.css";
import Music from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/audio/Traditional Garifuna drumming - Paranda with Warasa.mp3";

function LandingPage() {
  // useEffect(() => {
  //   window.addEventListener("DOMContentLoaded", (e) => {
  //     document.querySelector("audio").play();

  //   })
  // }, []);

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
