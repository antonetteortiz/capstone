import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap";
import Slide1 from "../images/groupofdrummers.jpg";
import Slide2 from "../images/garifunaboys.jpg";
import Slide3 from "../images/hudut.jpg";
import Slide4 from "../images/singers.jpg";
import Slide5 from "../images/jancunu.jpg";
import Slide6 from "../images/soup.jpg";
import Slide7 from "../images/drums.jpg";
import History from "../images/history.jpg";
import Food from "../images/food.jpg";
import Language from "../images/language.jpg";
import Music from "../images/music.jpg";
import Forum from "../images/forum.png"
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel className="carousel">
        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide2} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide3} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide4} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide5} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide6} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img classNameName="d-block w-100" src={Slide7} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div classNameName="card-container">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={History} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">History</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="card-container">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Language} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Language</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="card-container">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Food} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Food</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="card-container">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Music} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Music</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="card-container">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={Forum} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Forum</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
