import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Map from "../../images/map.gif";
import AltNav from "../TrialNav/Navbar/AltNavbar.js";
import "./History.css";

function History(props) {
  console.log(props);
  
  let heroesList = props.heroesList.map((heroes, i) => {
    return (
      <div className="img-card">
        <img
          class="bd-placeholder-img rounded-circle img-fluid "
          src={heroes.photo}
          alt=""
        />

        <h2 className="lead text-center mt-2">
          <b>{heroes.heroName}</b>
        </h2>

        <p className="lead text-center">
          <i>{heroes.birthdate}</i>
        </p>

        <p className="lead text-center">{heroes.notableAccomplishments}</p>
        <p className="lead text-center" style={{ paddingBottom: "0px 60px" }}>
          <a href="/language" style={{ color: "black" }}>
            <small className="lead">learn more</small>
          </a>
        </p>
      </div>
    );
  });

  return (
    <div>
      <AltNav />
      <div className="m-4 history-container">
        <div>
          <h1 className="m-4">History of the Garifuna's</h1>
        </div>
        <div>
          <main className="briefHistory">
            <img
              className="img-fluid map float-left"
              src={Map}
              align="top"
              alt=""
            />

            <p className="lead">
              <b>Garifuna</b> is both a language (a dialect) and a group of
              people. The Garinagu – the plural form of Garifuna – are
              indigenous, mixed-race descendants of West African, Island Carib,
              and Arawak people. In 1635, escaped and shipwrecked Africans found
              refuge on the island of Saint Vincent and intermarried with the
              Island Caribs and the Arawaks, resulting in the Garifuna people.
            </p>
            <p className="lead">
              For a time, the Afro-Caribbean Garifunas lived peacefully
              alongside French settlers who reached St. Vincent later in the
              17th century, until being exiled by British troops in 1796 and
              eventually shipped off to Roatan, one of the Honduras Bay Islands
              in the Caribbean Sea. After successfully developing a healthy crop
              of cassava, a mainstay of traditional Garifuna diets, on Roatan,
              Garifunas branched out to the Caribbean mainland to establish
              fishing villages in Belize, Guatemala, Honduras and Nicaragua.
              According to one source, the Spanish agreed to transfer the
              Garifunas from Roatan to Trujillo, Colon on the coastal mainland
              of Honduras, effectively consolidating their claim on Roatan and
              the other Honduras Bay Islands and gaining better access to a
              workforce of Garifuna laborers.
            </p>

            <p className="lead">
              Today, the global population of Garifunas stands at upwards of
              300,000 people, many of whom live in the U.S. and Canada. Garifuna
              communities along the Caribbean Sea live mostly in coastal towns
              and villages in the Central American countries of Belize,
              Guatemala, Honduras and Nicaragua.
            </p>
          </main>
        </div>

        <div>
          <hr />
          <h2 className="mt-4">Garifuna Heroes</h2>
          <p className="lead">
            Heroic and inspiring Garinagu who have fought for the Garifuna's and
            their culture.
          </p>
          <div className="heroes-container">{heroesList}</div>
          <div>
            <Link to="/addhero">
              <button
                className="btn my-2 my-lg-0 form-inline "
                style={{
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: "#ffd800",
                  margin: "0 auto"
                }}
                type="submit"
              >
                Add a hero
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
