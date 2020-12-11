  import React from "react";
  import { Link } from "react-router-dom"
  import "./LandingPage.css";
  import { Button } from "react-bootstrap";

  function LandingPage() {

    return (
      <div>
        <div className="landingpage">
          <a href="/home" className="logo-link">
            <div className="logo-container">
              <div></div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  export default LandingPage;