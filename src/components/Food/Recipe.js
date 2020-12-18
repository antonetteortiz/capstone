import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./Recipe.css"

function RecipePage(props) {
  const params = useParams();

  
//   console.log(params)
  let recipe = props.recipeList.map((recipe, i) => {
    return (
      <div>
        {recipe.recipeName == params.recipeName ? (
          <div className="recipe" style={{ margin: "60px"}}>
            <h1 className="mt-4">{recipe.recipeName}</h1>

            <p className="lead">by {recipe.author}</p>

            <hr />

            <img
              className="img-fluid rounded"
              src={recipe.photo}
              alt=""
              style={{ height: "550px", paddingBottom: "20px" }}
            />

            <hr />

            <h2 className="lead" style={{ paddingTop: "20px" }}>
              Ingredients
            </h2>

            <p style={{ paddingTop: "20px" }}>{recipe.ingredients.map((ingredient, j) => { 
              return (
              <p>{ingredient}</p>
              )
            })}</p>

            <hr />

            <h3 className="lead" style={{ paddingTop: "20px" }}>
              Directions
            </h3>
            <h6 style={{ paddingTop: "20px" }}>{recipe.servings}</h6>

            <p style={{ paddingTop: "20px" }}>{recipe.steps.map((steps, l) => {
              return (
                <p>- {steps}</p>
              )
            })}</p>

            <hr />

            <div className="card my-4 recipeComment">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">

                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn commentButton">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      {recipe}
    </div>
  );
}

export default RecipePage;
