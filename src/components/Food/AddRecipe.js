import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function CreateMusic() {
  console.log("Create Music")
  const [artistName, setArtistName] = useState();
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [label, setLabel] = useState();
  const [producer, setProducer] = useState();
  const [year, setYear] = useState();
  const [tracks, setTrackList] = useState();
  const [artwork, setAlbumArtwork] = useState();
  const [sucess, setSucess] = useState(false);

  const submitToApi = (e) => {
    e.preventDefault();
    console.log("submitting");
    let artistInputField = document.querySelector("#artistInputField");
    if (artistInputField.value !== "") {
      axios
        .post("https://garifunamusic.herokuapp.com/Music", {
          artistName,
          title,
          genre,
          label,
          producer,
          year,
          tracks,
          artwork,
        })
        .then(function (response) {
          // alert("Seremein (Thanks) for adding to our libary.");
          console.log(response);
          setSucess(true);
        });
    }
  };

  return (
    <div>
      {sucess === false ? (
        <form className="needs-validation">
          <div className="form-group">
            <label for="artistInputField">Artist Name</label>
            <input
              type="text"
              className="form-control"
              id="artistInputField"
              // aria-describedby="emailHelp"
              onChange={(event) => setArtistName(event.target.value)}
              required
            />
            {/* <div className="invalid-feedback">Please create an artist.</div> */}
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Album/Track Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setTitle(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Genre</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option></option>
              <option>Paranda</option>
              <option>Hugu Hugu</option>
              <option>Punta</option>
            </select>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Year</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setYear(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Streaming Link</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setLabel(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Please insert link to streaming site (ie Spotify, SoundCloud,
              AppleMusic etc)
            </small>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Album Artwork</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setAlbumArtwork(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Please paste link to album jpeg/png
            </small>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Add album
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => submitToApi(e)}
          >
            Submit
          </button>
        </form>
      ) : (
        <Redirect to="/capstone" />
      )}
    </div>
  );
}

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

export default CreateMusic;