import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Music from "./components/Music/Music";
import CreateMusic from "./components/Music/CreateMusic";
import UpdateMusic from "./components/Music/UpdateMusic";
import Food from "./components/Food/Food";
import Recipe from "./components/Food/Recipe";
import AddRecipe from "./components/Food/AddRecipe";
import HomePage from "./components/Home/HomePage";
import History from "./components/History/History";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

function App() {
  // In react hooks this is how we set state
  // The first agrument is the name of the state, second argument is how we manipulate that state
  // Anything passed in useState is the default value of that state
  
  const [heroes, setHeroes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  // UseEffect works similarily to componentDidMount
  
// Fetching data from recipe API

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipe) => setRecipe(recipe))
      .catch((err) => console.log(err));
    //  console.log(recipe);

    // Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, []);

  const searchRecipe = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setRecipeSearch(e.target.value.toLowerCase());
    if (recipeSearch.length > 1) {
      let newRecipeArr = recipe.filter((input) =>
        input.recipeName.toLowerCase().includes(recipeSearch)
      );
      // console.log(newRecipeArr);
      setFilteredRecipeList(newRecipeArr);
    }
  };
  // console.log(recipe)

  // Fetching data from heroes API

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Heroes";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((heroes) => setHeroes(heroes))
      .catch((err) => console.log(err));
    //  console.log(heroes);

  }, []);



  return (
    <div className="page-container">
      <div className="content-wrap">

        <Switch>
          <Route exact path="/welcome">
            <LandingPage />
          </Route>

          <Route exact path="/home/">
            <HomePage />
          </Route>

          <Route exact path="/music">
            <Music />
          </Route>

          <Route path="/createmusic">
            <CreateMusic />
          </Route>

          <Route
            // exact
            path="/updatemusic/:artistName"
            render={() => {
              return <UpdateMusic music={music} />;
            }}
          />

          <Route exact path="/food">
            <div className="recipe-box">
              <Food
                recipeList={recipe}
              />
            </div>
          </Route>

          <Route exact path="/recipe/:name">
            <div className="recipe-box">
              <Recipe
                recipeList={recipe}
                filteredRecipeList={filteredRecipeList}
                recipeSearch={recipeSearch}
              />
            </div>
          </Route> 

          <Route path="/addrecipe">
            <AddRecipe />
          </Route>

          <Route path="/history">
            <History 
              heroesList={heroes}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
