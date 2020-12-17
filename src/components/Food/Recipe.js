import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

function RecipePage(props) {
  const params = useParams();

  
//   console.log(params)
  let recipe = props.recipeList.map((recipe, i) => {
    return (
      <div>
        {recipe.recipeName == params.recipeName 
        ? 
        <div>
          <h1 className="mt-4">{recipe.recipeName}</h1>

          <p className="lead">by {recipe.author}</p>

          <hr />

          <img className="img-fluid rounded" src={recipe.photo} alt="" />

          <hr />

          <h3 className="lead">Ingredients</h3>
          <p>{recipe.ingredients}</p>
        
          <hr />
          
          <h3 className="lead">Directions</h3>
          <h6>{recipe.servings}</h6>

          <p>{recipe.steps}</p>

          <hr />

          <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

        
          <div className="media mb-4">
            {/* <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" /> */}
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>

        
          <div className="media mb-4">
            {/* <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""> */}
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

            <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>

              <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>

          </div>
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
