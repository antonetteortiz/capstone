import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/Navbar/Navbar"

function CreateRecipe() {
  console.log("Create Recipe")
  const [recipeName, setRecipeName] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();
  const [servings, setServings] = useState();
  const [ingredients, setIngredients] = useState();
  const [steps, setSteps] = useState();
  const [author, setAuthor] = useState();
  const [success, setSuccess] = useState(false);

  const submitToApi = (e) => {
    e.preventDefault();
    console.log("submitting");
    let recipeInputField = document.querySelector("#recipeInputField");
    if (recipeInputField.value !== "") {
      axios
        .post("https://yurumeiapi.herokuapp.com/Recipe", {
          recipeName,
          description,
          photo,
          servings,
          ingredients,
          steps,
          author
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
        <form className="needs-validation" style={{width: "1200px", margin: "0 auto", padding: "70px 0px"}}>
          <div className="form-group">
            <label for="recipeInputField">Recipe</label>
            <input
              type="text"
              className="form-control"
              id="recipeInputField"
              onChange={(event) => setRecipeName(event.target.value)}
              required
            />
            {/* <div className="invalid-feedback">Please create an artist.</div> */}
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Recipe Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setDescription(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
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
              Please enter link to recipe photo (jpeg/png)
            </small>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Servings</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(event) => setServings(event.target.value)}
            >
              <option></option>
              <option>1 serving</option>
              <option>2 servings</option>
              <option>3 servings</option>
              <option>4 servings</option>
              <option>5 servings</option>
              <option>6 servings</option>
              <option>7 servings</option>
              <option>8 servings</option>
              <option>9 servings</option>
              <option>10 servings</option>
            </select>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Ingredients</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => setIngredients(event.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Directions</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => setSteps(event.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Author</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Add recipe
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
        <Redirect to="/food" />
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

export default CreateRecipe;