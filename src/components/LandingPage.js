  import React from "react";
  import { Link } from "react-router-dom"
  import "./LandingPage.css";
  import { Button } from "react-bootstrap";

  function LandingPage() {

    return (
      <div>
        <div className="landingpage">
          <div className="logo-container">
              <div>
          <Link to="/home">
            <Button variant="outline-warning" size="lg" className="button"
            style={{display: "table-cell", verticalAlign: "middle", textAlign: "center"}}>
              ENTER
            </Button>
          </Link>
        
        </div>
          </div>
        </div>
</div>
    );
  }

  export default LandingPage;