import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./Music.css";
import Navbar from "../Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Drumming from "../../audio/Traditional Garifuna drumming - Paranda with Warasa.mp3"

function Music(props) {
  const [music, setMusic] = useState([]);
  const [artistSearch, setArtistSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Music";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((music) => setMusic(music));

    // Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, []);
  
  
  const searchArtist = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setArtistSearch(e.target.value.toLowerCase());

    // console.log("state", artistSearch)

    if (artistSearch.length > 1) {
      // console.log("!!!", music)
      let newArtistArr = music.filter((input) =>
        input.artistName.toLowerCase().includes(artistSearch)
      );
      console.log(newArtistArr);
      setFilteredList(newArtistArr);
    }

  };


  let musicList = music.map((album, i) => {
    return (
      <div className="col mb-4 mainBody">
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={album.artwork} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{album.title}</h5>
            <h6 className="card-text">{album.artistName}</h6>
            <a href={album.link} target="_blank">
              <p>Listen here</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  let filteredMusicList = filteredList.map((album, i) => {
    return (
      <div className="col mb-4 mainBody">
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={album.artwork} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{album.title}</h5>
            <p className="card-text">{album.artistName}</p>
            <a href={album.link}>
              <p style={{ color: "black" }}>Listen here</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="music-container m-4">
        <div className="gariInfo">
          <h1 classname="m-4">Garifuna Music</h1>
          <div className="info">
            <img
              className="img-fluid band float-right"
              src="https://www.womex.com/virtual/image/artist/the_garifuna_big_61532.jpg"
              alt="..."
              align="top"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="lead">
                "Garifuna music is an ethnic music and dance with African and
                Arawak elements, originated by an Afro Indigenous group known as
                the Garifuna people, pre to their exile to Central
                America from Saint Vincent And The Grenadines. It represents and
                belongs to the Garifuna community. Garifuna music and dance are
                closely related. The main traditional instruments are drums
                and maracas. Drums play an important role in Garifuna music. The
                main drum is the Segunda (bass drum). The drums are normally
                made by hollowing out logs and stretching antelope skin over
                them. There are certain types of songs that are associated with
                work, some with play, some with dance and some that are reserved
                for prayer or ritual use. Two main Garifuna genres
                are punta and paranda. In 2001, Garifuna music, dance, and
                language was proclaimed as a Masterpiece of the Oral and
                Intangible Heritage of Humanity by UNESCO." - Source Wikipedia
              </p>

              {/* <form className="form" style={{display: "flex", justifyContent: "center",}}>
              <input
                type="text"
                placeholder="Enter Artist Name"
                style={{ border: "1px solid black" }}
                value={artistSearch}
                onChange={searchArtist}
              />

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                style={{
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: "#ffd800",
                }}
                type="submit"
                onClick={() => searchArtist()}
              >
                Search
              </button>

            <Link to="/createmusic">
              <button
                className="btn my-2 my-lg-0 form-inline"
                style={{
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: "#ffd800",
                }}
                type="submit"
              >
                Add Artist
              </button>
            </Link>
            </form> */}
            </div>
          </div>
        </div>
        <hr />
        <h1>Garifuna Artist</h1>
        <div style={{marginBottom: "2%"}}>
          <Grid container spacing={2} style={{marginBottom: "20px"}}>
            <Grid item className="d-flex">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Enter Artist Name"
                  style={{ border: "1px solid black" }}
                  value={artistSearch}
                  onChange={searchArtist}
                />

                <button
                  className="btn my-2 my-lg-0 "
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#FFD800",
                  }}
                  type="submit"
                  onClick={() => searchArtist()}
                >
                  Search
                </button>
              </form>

              <Link to="/createmusic">
                <button
                  className="btn my-2 my-lg-0  "
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#FFD800",
                    marginLeft: "10px",
                  }}
                  type="submit"
                >
                  Add Artist
                </button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="row row-cols-3 row-cols-md-3">
          {artistSearch.length > 1 ? filteredMusicList : musicList}
        </div>
      </div>
    </div>
  );
}

export default Music;
