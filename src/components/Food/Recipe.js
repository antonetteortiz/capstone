import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

function RecipePage(props) {
  const params = useParams();

  
//   console.log(params)
  let recipe = props.recipeList.map((recipe, i) => {
    return (
      <div>
        {recipe.name == params.name 
        ? 
          <div className="recipe">
            <h1>{recipe.name}</h1>
            <h3>{recipe.description}</h3>
            <div className="foodImage">
              <img src={recipe.photo} className="card-img-top" alt="..." />
            </div>
            <div className="direction">
              <h3>Ingredients</h3>
              <div>{recipe.ingredients}</div>
              <h3>Directions</h3>
              <div>{recipe.steps}</div>
            </div>
          </div>
         : null}
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
