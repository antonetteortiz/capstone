import React from "react";
import Navbar from "../Navbar/Navbar";
import Map from "../../images/map.gif";

function History(props) {
    console.log(props)
  let heroesList = props.heroesList.map((heroes, i) => {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src={heroes.photo}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt=""
            />
            <h2>{heroes.heroName}</h2>
            <h5>{heroes.birthdate}</h5>
            <p>{heroes.notableAccomplishments}</p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div>
        <h1>History of the Garifuna's</h1>
      </div>
      <div>
        <main className="briefHistory">
          <img className="map" src={Map} />
          <p>
            The West African transplants were either ship-wrecked or escaped
            from the Caribbean islands of Barbados, St. Lucia and Grenada,
            depending on the source. They intermarried with local populations of
            Arawaks and Carib Indians (Caribs), immigrants from South America,
            to become known as Garifunas or Black Caribs. (Click on the image to
            view the full-size map.)
            <br />
            <br />
            For a time, the Afro-Caribbean Garifunas lived peacefully alongside
            French settlers who reached St. Vincent later in the 17th century,
            until being exiled by British troops in 1796 and eventually shipped
            off to Roatan, one of the Honduras Bay Islands in the Caribbean Sea.
            After successfully developing a healthy crop of cassava, a mainstay
            of traditional Garifuna diets, on Roatan, Garifunas branched out to
            the Caribbean mainland to establish fishing villages in Belize,
            Guatemala, Honduras and Nicaragua. According to one source, the
            Spanish agreed to transfer the Garifunas from Roatan to Trujillo,
            Colon on the coastal mainland of Honduras, effectively consolidating
            their claim on Roatan and the other Honduras Bay Islands and gaining
            better access to a workforce of Garifuna laborers.
          </p>
        </main>
      </div>
      <div>
          {heroesList}
      </div>
    </div>
  );
}

export default History;
