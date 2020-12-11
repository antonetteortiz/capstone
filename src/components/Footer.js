import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-4">
              <h4>YURUMEI</h4>
              <ul className="list-unstyled">
                <li>HISTORY</li>
                <li>LANGUAGE</li>
                <li>RECIPES</li>
                <li>MUSIC</li>
                <li>FORUM</li>
                <li>SIGN UP</li>
                <li>LOGIN</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-4">
              <h4>CONTACT US</h4>
              {/* ADD FORM FOR CONTACT US */}
              <ul className="list-unstyled">
                <li>Phone</li>
                <li>Number</li>
                <li>Location</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-4">
              <h4>FOLLOW US</h4>
              <ul className="list-unstyled">
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>TWITTER</li>
              </ul>
            </div>
          </div>

          

          <div className="row border-line">
            <p className="col-12">
              &copy;{new Date().getFullYear()} YURUMEI | ALL RIGHTS RESERVED |
              TERMS OF SERVICE | PRIVACY
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
