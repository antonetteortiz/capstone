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
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

function App() {
  // In react hooks this is how we set state
  // The first agrument is the name of the state, second argument is how we manipulate that state
  // Anything passed in useState is the default value of that state
  const [music, setMusic] = useState([]);
  const [artistSearch, setArtistSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  // UseEffect works similarily to componentDidMount
  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Music";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((music) => setMusic(music));

    // Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, [music]);

  // const searchArtist = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   setArtistSearch(e.target.value.toLowerCase());

  //   // console.log("state", artistSearch)

  //   if (artistSearch.length > 1) {
  //     // console.log("!!!", music)
  //     let newArtistArr = music.filter((input) =>
  //       input.artistName.toLowerCase().includes(artistSearch)
  //     );
  //     console.log(newArtistArr);
  //     setFilteredList(newArtistArr);
  //   }

    // let apiUrl = "https://garifunamusic.herokuapp.com/Music";
    // fetch(apiUrl)
    //   .then((data) => data.json())
    //   .then((music) => setMusic(music));
  // };

  const [recipe, setRecipe] = useState([{}]);
  const [recipeSearch, setRecipeSearch] = useState("");
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  useEffect(() => {
    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipe) => setRecipe(recipe))
      .catch((err) => console.log(err));
    //  console.log(recipe);

    // Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, [recipe]);

  const searchRecipe = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setRecipeSearch(e.target.value.toLowerCase());

    // console.log("state", recipeSearch)

    if (recipeSearch.length > 1) {
      // console.log("!!!", recipe)
      let newRecipeArr = recipe.filter((input) =>
        input.recipeName.toLowerCase().includes(recipeSearch)
      );
      console.log(newRecipeArr);
      setFilteredRecipeList(newRecipeArr);
    }

    let apiUrl = "https://yurumeiapi.herokuapp.com/Recipe";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((recipe) => setRecipe(recipe));
  };

  console.log(recipe)

  return (
    <div className="page-container">
      <div className="content-wrap">
        {/* <Navbar />  */}
        {/* <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Garifuna.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          <Link to="/capstone"> Yurumei </Link>
          <Link to="/music"> Music </Link>
          <Link to="/createmusic"> Create Artist </Link>
          <Link to="/signup"> SignUp </Link>
          <Link to="/signin"> SignIn </Link>
        </a>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Enter Artist Name"
            // aria-label="Search"
            value={artistSearch}
            onChange={searchArtist}
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={() => searchArtist()}
          >
            Search
          </button>
        </form>
      </nav> */}

        <Switch>
          <Route exact path="/welcome">
            <LandingPage />
          </Route>

          <Route exact path="/home/">
            <HomePage />
          </Route>

          <Route exact path="/music">
            <Music
              musicList={music}
              filteredList={filteredList}
              artistSearch={artistSearch}
            />
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
                filteredRecipeList={filteredRecipeList}
                recipeSearch={recipeSearch}
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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
