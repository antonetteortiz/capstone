import React from "react";
import "./HomePage.css";
import AltNav from "../TrialNav/Navbar/AltNavbar.js"
import Navbar from "../Navbar/Navbar";
import Slide1 from "../../images/Yurumein-2017_28.jpg";
import Slide2 from "../../images/garifunagirls1.png";
import Slide3 from "../../images/hudut.jpg";
import Slide4 from "../../images/jankunu.jpg";
import Slide5 from "../../images/dangriga1.png";
import Slide6 from "../../images/soup.jpg";
import History from "../../images/history.png";
import Food from "../../images/food.jpg";
import Language from "../../images/yurumeilanguage.jpg";
import Music from "../../images/music.jpg";
import Forum from "../../images/forum.png";

function HomePage() {
  return (
    <div>
      <AltNav />

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
              className="bd-placeholder-img carouselImage"
              style={{
                maxWidth: "1920px",
                maxHeight: "565px",
                border: "2px solid black",
                objectFit: "cover",
                width: "100vw",
              }}
              src={Slide1}
              preserveAspectRatio="xMidYMid slice"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img carouselImage"
              style={{
                maxWidth: "100%",
                maxHeight: "565px",
                border: "2px solid black",
                object: "contain",
                width: "100vw",
              }}
              src={Slide2}
              preserveAspectRatio="xMidYMid slice"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img carouselImage"
              style={{
                maxWidth: "100%",
                height: "565px",
                border: "2px solid black",
                object: "contain",
                width: "100vw",
              }}
              src={Slide3}
              preserveAspectRatio="xMidYMid slice"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img carouselImage"
              style={{
                maxWidth: "100%",
                height: "565px",
                border: "2px solid black",
                object: "contain",
                width: "100vw",
              }}
              src={Slide4}
              preserveAspectRatio="xMidYMid slice"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img carouselImage"
              style={{
                maxWidth: "100%",
                height: "565px",
                border: "2px solid black",
                object: "contain",
                width: "100vw",
              }}
              src={Slide5}
              preserveAspectRatio="xMidYMid slice"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              className="bd-placeholder-img carouselImage"
              style={{
                maxWidth: "100%",
                maxHeight: "565px",
                border: "2px solid black",
                object: "contain",
                width: "100vw",
              }}
              src={Slide6}
              preserveAspectRatio="xMidYMid slice"
              alt=""
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
      <div className="featureContainer">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              History of the Garifuna's{" "}
              {/* <span class="text-muted">It’ll blow your mind.</span> */}
            </h2>
            <p className="lead">
              The Afro-Caribbean Garifuna people originated with the arrival of
              West African slaves who washed ashore on the Caribbean island of
              St. Vincent around 1635 while likely on their way to New World
              mines and plantations. Today, the global population of Garifunas
              stands at upwards of 300,000 people, many of whom live in the U.S.
              and Canada. Garifuna communities along the Caribbean Sea live
              mostly in coastal towns and villages in the Central American
              countries of Belize, Guatemala, Honduras and Nicaragua.
            </p>
            <a href="/history" style={{ color: "black" }}>
              <small className="lead">learn more</small>
            </a>
          </div>
          <div class="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={History}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
              alt=""
            />
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Language{" "}
              <span className="text-muted"></span>
            </h2>
            <p className="lead">
              Garifuna is a minority language widely spoken in villages of
              Garifuna people in the western part of the northern coast of
              Central America. It is a member of the Arawakan language family
              but an atypical one since it is spoken outside the Arawakan
              language area, which is otherwise now confined to the northern
              parts of South America, and because it contains an unusually high
              number of loanwords, from both Carib languages and a number of
              European languages because of an extremely tumultuous past
              involving warfare, migration and colonization.
            </p>
            <a href="/language" style={{ color: "black" }}>
              <small className="lead">coming soon</small>
            </a>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Language}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
              alt=""
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Food <span className="text-muted"></span>
            </h2>
            <p className="lead">
              Garifuna food is traditionally based on the staple foods of
              cassava, plantain and banana, combined with fish and other
              seafood. The colors of the Garifuna flag reflect the importance of
              cassava to the Garifuna people, as the yellow stripe represents
              the color of cassava bread; "ereba" in the Garifuna language.
            </p>
            <a href="/food" style={{ color: "black" }}>
              <small className="lead">learn more</small>
            </a>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Food}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
              alt=""
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Music {/* <span class="text-muted">See for yourself.</span> */}
            </h2>
            <p className="lead">
              Garifuna music is an ethnic music and dance with African and
              Arawak elements, originated by an Afro Indigenous group known as
              the Garifuna people, pre to their exile to Central America from
              Saint Vincent And The Grenadines. It represents and belongs to the
              Garifuna community. Garifuna music and dance are closely related.
              The main traditional instruments are drums and maracas.
              <br />
              <br />
              Drums play an important role in Garifuna music. The main drum is
              the Segunda (bass drum). The drums are normally made by hollowing
              out logs and stretching antelope skin over them. There are certain
              types of songs that are associated with work, some with play, some
              with dance and some that are reserved for prayer or ritual use.
              Two main Garifuna genres are punta and paranda.
              <br />
              <br />
              In 2001, Garifuna music, dance, and language was proclaimed as a
              Masterpiece of the Oral and Intangible Heritage of Humanity by
              UNESCO.
            </p>
            <a href="/music" style={{ color: "black" }}>
              <small className="lead">learn more</small>
            </a>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Music}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
              alt=""
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Forum
              {/* <span class="text-muted">Checkmate.</span> */}
            </h2>
            <p className="lead">
              Our community forum is a greate place to learn, share and keep the
              Garifuna culture and traditions alive.
            </p>
            <a href="/forum" style={{ color: "black" }}>
              <small className="lead">coming soon</small>
            </a>
          </div>
          <div class="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={Forum}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
              alt=""
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

export default HomePage;
