import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { Navbar } from "react-bootstrap";
// import Link from "@material-ui/core/Link";
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
      margin: "0 auto",
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
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },

    recipeCard: {
      margin: "auto 0",
      marginTop: "30px",
      backgroundColor: "#FFD800",
      align: "center",
    },
    header: {
      height: "500px",

      // border: "1px solid red",
      // width: "100vw",
    },
  }));

  const cards = [1];

  const classes = useStyles();

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
          <img style={{ width: "475px", height: "356px" }} src={recipe.photo} />
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

  let filteredRecipeList = props.filteredRecipeList.map((recipe, i) => {
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
          <img style={{ width: "475px", height: "356px" }} src={recipe.photo} />
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
                    // value={recipeSearch}
                    // onChange={searchRecipe}
                  />

                  <button
                    className="btn my-2 my-lg-0"
                    style={{
                      border: "1px solid black",
                      backgroundColor: "#FFD800",
                    }}
                    type="submit"
                    // onClick={() => searchRecipe()}
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
                      // onClick={() => searchRecipe()}
                    >
                      Add Recipe
                    </button>
                  </Link>
                </form>

                {/* <Button variant="contained" color="yellow">
                  Eventually a form to search recipe by name
                  
                  SEARCH FORM
                </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* <Grid
          container
          spacing={5}
          alignItems="center"
          className={classes.recipeCard}
        >
          {props.recipeSearch.length > 1 ? filteredRecipeList : recipeList}
        </Grid> */}
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
        {props.recipeSearch.length > 1 ? filteredRecipeList : recipeList}
      </div>

      {/* <div>// the container with grids</div> */}
    </div>
  );
}

export default Food;
