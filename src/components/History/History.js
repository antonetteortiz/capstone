import React from "react";
import Navbar from "../Navbar/Navbar";
import Map from "../../images/map.gif";
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

        <p className="lead">{heroes.notableAccomplishments}</p>
        <p className="lead" style={{ paddingBottom: "0px 60px" }}>
          <a className="btn btn-secondary" href="/home">
            View details &raquo;
          </a>
        </p>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
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
              The West African transplants were either ship-wrecked or escaped
              from the Caribbean islands of Barbados, St. Lucia and Grenada,
              depending on the source. They intermarried with local populations
              of Arawaks and Carib Indians (Caribs), immigrants from South
              America, to become known as Garifunas or Black Caribs. (Click on
              the image to view the full-size map.)
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
          </main>
        </div>

        <div>
          <hr />
          <h2 className="mt-4">Garifuna Heroes</h2>
          <div className="heroes-container">{heroesList}</div>
        </div>
      </div>
    </div>
  );
}

export default History;
