  import React from "react";
  import "./LandingPage.css";
  import Music from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/audio/Traditional Garifuna drumming - Paranda with Warasa.mp3";
 

  function LandingPage() {

    return (
      <div>
        <div className="landingpage">
          <a href="/home" className="logo-link">
            <div className="logo-container"></div>
          </a>
          <div className="music">
            <audio autoplay controls src={Music} type="audio/mpeg" />
          </div>
        </div>
      </div>
    );
  }

  export default LandingPage;