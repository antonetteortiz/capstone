import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import { Carousel } from "react-bootstrap";
import Slide2 from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/garifunaboys.jpg";
import Slide3 from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/hudut.jpg";

import Slide6 from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/soup.jpg";

import History from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/history.png";
import Food from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/food.jpg";
import Language from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/yurumeilanguage.jpg";
import Music from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/music.jpg";
import Forum from "/Users/antonetteortiz/Desktop/sei40/projects/capstone/src/images/forum.png";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Carousel */}
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="bd-placeholder-img"
              style={{ maxWidth: "100%", maxHeight: "565px" }}
              src={Slide2}
              preserveAspectRatio="xMidYMid slice"
              // focusable="false"
              // role="img"
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              style={{ maxWidth: "100%", height: "565px" }}
              src={Slide3}
              preserveAspectRatio="xMidYMid slice"
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              style={{ maxWidth: "100%", maxHeight: "565px" }}
              src={Slide6}
              preserveAspectRatio="xMidYMid slice"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Features */}

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.{" "}
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 500x500"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it’s that good.{" "}
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 500x500"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 500x500"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  );
}

export default HomePage;
