import React from "react";
import { Link } from "react-router-dom";
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
import Forum from "../images/forum.png";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel className="carousel">
        {/* <Carousel.Item>
          <img classNameName="d-block w-100 carousel-image" src={Slide1} alt="First slide" />
        </Carousel.Item> */}

        {/* <Carousel.Item>
          <img classNameName="d-block w-100 carousel-image" src={Slide2} alt="Third slide" />
        </Carousel.Item> */}

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={Slide3} alt="Third slide" />
        </Carousel.Item>

        {/* <Carousel.Item>
          <img classNameName="d-block w-100 carousel-image" src={Slide4} alt="Third slide" />
        </Carousel.Item> */}

        {/* <Carousel.Item>
          <img classNameName="d-block w-100 carousel-image" src={Slide5} alt="Third slide" />
        </Carousel.Item> */}

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={Slide6} alt="Third slide" />
        </Carousel.Item>

        {/* <Carousel.Item>
          <img classNameName="d-block w-100 carousel-image" src={Slide7} alt="Third slide" />
        </Carousel.Item> */}
      </Carousel>

      <div className="container">
        <div className="colum">
          <h2>History</h2>
          <div>
            <p>
              The Afro-Caribbean Garifuna people originated with the arrival of
              West African slaves who washed ashore on the Caribbean island of
              St. Vincent around 1635 while likely on their way to New World
              mines and plantations. Today, the global population of Garifunas
              stands at upwards of 300,000 people, many of whom live in the U.S.
              and Canada. Garifuna communities along the Caribbean Sea live
              mostly in coastal towns and villages in the Central American
              countries of Belize, Guatemala, Honduras and Nicaragua.
            </p>
          </div>
          <div>
            <p>learn more</p>
          </div>
        </div>
        <div className="image">
          <img src={History} />
        </div>
      </div>

      <div className="container">
        <div className="colum">
          <h2>Language</h2>
          <div>
            <p>
              Garifuna is a minority language widely spoken in villages of
              Garifuna people in the western part of the northern coast of
              Central America. It is a member of the Arawakan language family
              but an atypical one since it is spoken outside the Arawakan
              language area, which is otherwise now confined to the northern
              parts of South America, and because it contains an unusually high
              number of loanwords, from both Carib languages and a number of
              European languages because of an extremely tumultuous past
              involving warfare, migration and colonization.
              <br />
              <br />
              The language was once confined to the Antillean islands of St.
              Vincent and Dominica, but its speakers, the Garifuna people, were
              deported en masse by the British in 1797 to the north coast of
              Honduras from where the language and Garifuna people has since
              spread along the coast south to Nicaragua and north to Guatemala
              and Belize. Parts of Garifuna vocabulary are split between men's
              speech and women's speech, and some concepts have two words to
              express them, one for women and one for men. Moreover, the terms
              used by men are generally loanwords from Carib while those used by
              women are Arawak. The Garifuna language was declared a Masterpiece
              of the Oral and Intangible Heritage of Humanity in 2008 along with
              Garifuna music and dance.
              <small>Source Wikipedia</small>
            </p>
          </div>
          <div>
            <p>learn more</p>
          </div>
        </div>
        <div className="image">
          <img src={Language} />
        </div>
      </div>

      <div className="container">
        <div className="colum">
          <h2>Food</h2>
          <div>
            <p>
              Garifuna food is traditionally based on the staple foods of
              cassava, plantain and banana, combined with fish and other
              seafood. The colors of the Garifuna flag reflect the importance of
              cassava to the Garifuna people, as the yellow stripe represents
              the color of cassava bread; “ereba” in the Garifuna language.
            </p>
          </div>
          <div>
            <p>view more</p>
          </div>
        </div>
        <div className="image">
          <img src={Food} />
        </div>
      </div>

      <div className="container">
        <div className="colum">
          <h2>Music</h2>
          <div>
            <p>
              Garifuna music is an ethnic music and dance with African and
              Arawak elements, originated by an Afro Indigenous group known as
              the Garifuna people, pre to their exile to Central America from
              Saint Vincent And The Grenadines. It represents and belongs to the
              Garifuna community. Garifuna music and dance are closely related.
              The main traditional instruments are drums and maracas. 
              <br />
              <br />
              Drums play an important role in Garifuna music. The main drum is the
              Segunda (bass drum). The drums are normally made by hollowing out
              logs and stretching antelope skin over them. There are certain
              types of songs that are associated with work, some with play, some
              with dance and some that are reserved for prayer or ritual use.
              Two main Garifuna genres are punta and paranda.
              <br />
              <br />
               In 2001, Garifuna music, dance, and language was proclaimed as a
              Masterpiece of the Oral and Intangible Heritage of Humanity by
              UNESCO.
            </p>
          </div>
          <div>
            <p>view more</p>
          </div>
        </div>
        <div className="image">
          <img src={Music} />
        </div>
      </div>

      <div className="container">
        <div className="colum">
          <h2>Forum</h2>
          <div>
            <p>
              Our community forum is a greate place to learn, share and keep the Garifuna culture and traditions alive. 
            </p>
          </div>
          <div>
            <p>view more</p>
          </div>
        </div>
        <div className="image">
          <img src={Forum} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
