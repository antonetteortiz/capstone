import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../Navbar/Navbar";

function Food(props) {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      background:
        "url(https://d1ralsognjng37.cloudfront.net/5c8070fb-fc4a-477b-8734-b6bbe66d5532.jpeg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      // opacity: "0.5",
      // padding: theme.spacing(8, 0, 6),
      height: "55vh",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardContainer: {
      display: "flex",
      width: "100%",
      backgroundColor: "#FFD800",
      flexDirection: "row",
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "150%",
      // margin: "0 auto",
      width: "30%",
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      border: "1px solid black",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      height: "150px",
    },

    recipeCard: {
      margin: "auto 0",
      marginTop: "30px",
      backgroundColor: "#FFD800",
      align: "center",
    },
    header: {
      height: "500px",
    },
  }));

  const classes = useStyles();

// Recipe Search
const [recipe, setRecipe] = useState([{}]);
const [recipeSearch, setRecipeSearch] = useState("");
const [filteredRecipeList, setFilteredRecipeList] = useState([]);

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
    }; 
}

// Place data from API in cards
  let recipeList = props.recipeList.map((recipe, i) => {
    return (
      // card container
      <div
        style={{
          backgroundColor: "black",
          color: "#ffd800",
          width: "475px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* image container */}
        <div>
          <img style={{ width: "475px", height: "356px" }} src={recipe.photo} alt="" />
        </div>
        {/* image container END */}

        {/* name/description */}
        <div style={{ paddingTop: "20px" }}>
          <h4>{recipe.recipeName}</h4>
          <div style={{ borderTop: "1px solid #FFD800"}}>
            <p style={{paddingTop: "10px"}}>{recipe.description}</p>
          </div>
        </div>

        {/* action container */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <button
            style={{
              outline: "none",
              border: "none",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          >
            Like
          </button>
          <button style={{ outline: "none", border: "none" }}>View</button>
        </div>
        {/* action container END */}
      </div>
    );
  });

  let recipeListFiltered = props.filteredRecipeList.map((recipe, i) => {
    return (
      // card container
      <div
        style={{
          backgroundColor: "black",
          color: "#ffd800",
          width: "475px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* image container */}
        <div>
          <img style={{ width: "475px", height: "356px" }} src={recipe.photo} alt=""/>
        </div>
        {/* image container END */}

        {/* name/description */}
        <div style={{ paddingTop: "20px" }}>
          <h4>{recipe.name}</h4>
          <p>{recipe.description}</p>
        </div>

        {/* action container */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <button
            style={{
              outline: "none",
              border: "none",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          >
            Like
          </button>
          <button style={{ outline: "none", border: "none" }}>View</button>
        </div>
        {/* action container END */}
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Navbar />
      <div className={classes.heroContent}>
        <Container maxWidth="sm" className={classes.header}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h5" align="center" color="black" paragraph>
            Garifuna food is traditionally based on the staple foods of cassava,
            plantain and banana, combined with fish and other seafood. The
            colors of the Garifuna flag reflect the importance of cassava to the
            Garifuna people, as the yellow stripe represents the color of
            cassava bread; “ereba” in the Garifuna language.
            {/* Cassava is not only made into flatbread, but also into sweet
              deserts such as cassava pudding (also known as plastic cake due to
              its rubbery consistency), and sweetened drinks like sahou. It is
              also sometimes included in stews. Plantain and banana are used
              both ripe and unripe (green) in Garifuna food. The word “hudut” is
              commonly used to refer to the popular fish and coconut milk stew
              served with mashed plantain. In actual fact is the word for the
              plantain alone. The plantain served with the fish is a combination
              of around three parts green plantain to one part ripe plantain.
              Both are boiled and then pounded together in a wooden “mata” until
              the consistency of a moist dough. Mashed plantain is served with
              other Garifuna dishes such as “Tikini” and “Tapado”. */}
          </Typography>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Enter Name of Dish"
                    style={{ border: "1px solid black" }}
                    // aria-label="Search"
                    value={recipeSearch}
                    onChange={searchRecipe}
                  />

                  <button
                    className="btn my-2 my-lg-0"
                    style={{
                      border: "1px solid black",
                      backgroundColor: "#FFD800",
                    }}
                    type="submit"
                    onClick={() => searchRecipe()}
                  >
                    Search
                  </button>

                  <Link to="/addrecipe">
                    <button
                      className="btn my-2 my-lg-0 form-inline"
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#FFD800",
                        marginLeft: "10px",
                      }}
                      type="submit"
                    >
                      Add Recipe
                    </button>
                  </Link>
                </form>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div
        style={{
          width: "100vw",
          margin: "100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
        }}
      >
        {props.recipeSearch.length > 1 ? recipeListFiltered : recipeList}
      </div>
    </div>
  );
}

export default Food;
