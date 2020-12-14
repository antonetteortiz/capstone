import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateMusic() {
  const [artistName, setArtistName] = useState();
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [label, setLabel] = useState();
  const [producer, setProducer] = useState();
  const [year, setYear] = useState();
  const [tracks, setTrackList] = useState();
  const [artwork, setAlbumArtwork] = useState();
  const params = useParams();

    useEffect(() => {
      let apiUrl = `https://garifunamusic.herokuapp.com/Music/${params.artistName}`;
      fetch(apiUrl)
        .then((data) => {
          let test = data.json();
          console.log(test);
          return test;
        })
        .then((music) => {
          if (music) {
            console.log(music);
            setArtistName(music.artistName);
            setTitle(music.title);
            setGenre(music.genre);
            setLabel(music.label);
            setProducer(music.producer);
            setYear(music.year);
            setTrackList(music.tracks);
            setAlbumArtwork(music.artwork);
          }
        });
      //Passing params in brackets will cause function to run again when any of the values of the array changes.
    }, []);

  const submitToApi = () => {
    console.log("update", params.artistName);
    axios
      .put(`https://garifunamusic.herokuapp.com/Music/${params.artistName}`, {
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
        if (response.status == 200) {
            // change when fdeploying
          window.location.href = "https://antonetteortiz.github.io/capstone/";
        }
        // alert("Seremein (Thanks) for updating to our libary.");
        console.log(response);
      });
  };

  return (
    // Make app so that user needs to enter artist name to submit
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Artist Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={artistName}
          onChange={(event) => setArtistName(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Album Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Genre</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Label</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Producer</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={producer}
          onChange={(event) => setProducer(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Year</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Track List</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={tracks}
          onChange={(event) => setTrackList(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>

      <div className="form-group">
        <label for="exampleInputEmail1">Album Artwork</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={artwork}
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
        type="button"
        className="btn btn-primary"
        onClick={() => submitToApi()}
      >
        Submit
      </button>
    </form>
  );
}

export default UpdateMusic;
