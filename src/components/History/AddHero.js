import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/Navbar/Navbar";

function AddHero() {
  console.log("Add a Garifuna Hero");
  const [heroName, setheroName] = useState();
  const [birthdate, setBirthdate] = useState();
  const [photo, setPhoto] = useState();
  const [notableAccomplishments, setNotableAccomplishments] = useState();
  const [description, setDescription] = useState();
  const [success, setSuccess] = useState(false);

  const submitToApi = (e) => {
    e.preventDefault();
    // console.log("submitting");
    let heroInputField = document.querySelector("#heroInputField");
    if (heroInputField.value !== "") {
      axios
        .post("https://yurumeiapi.herokuapp.com/Hero", {
          heroName,
          birthdate,
          photo,
          notableAccomplishments,
          description,
        })
        .then(function (response) {
          // alert("Seremein (Thanks) for adding to our libary.");
          console.log(response);
          setSuccess(true);
        });
    }
  };

  return (
    <div>
      <NavBar />
      {success === false ? (
        <form
          className="needs-validation"
          style={{ width: "1200px", margin: "0 auto", padding: "70px 0px" }}
        >
          <div className="form-group">
            <label for="heroInputField">Hero</label>
            <input
              type="text"
              className="form-control"
              id="heroInputField"
              onChange={(event) => setheroName(event.target.value)}
              required
            />
            {/* <div className="invalid-feedback">Please create an artist.</div> */}
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">
              Date of Birth - Date of Death
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setBirthdate(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Please use Month Date, Year format (ie July, 19 1887){" "}
            </small>
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Photo</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setPhoto(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Please enter link to a photo of hero (jpeg/png)
            </small>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">notableAccomplishments</label>
            
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(event) =>
                setNotableAccomplishments(event.target.value)}
              > </textarea>
            
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Summary of contribution to the Garifuna Community</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Add hero
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
        <Redirect to="/history" />
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

export default AddHero;
