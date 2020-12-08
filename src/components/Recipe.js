import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
// import Link from "@material-ui/core/Link";
import Navbar from "./Navbar"

function Recipe(props) {
    // const remove = (recipeName) => {
    // let encodedRecipeName = encodeURI(recipeName);
    // axios
    //   .delete(
    //     `https://garifunamusic.herokuapp.com/Music/${encodedRecipeName}`,
    //     {
    //       recipeName,
    //     }
    //   )
    //   .then(function (response) {
    //     alert("Artist has been deleted!");
    //     console.log(response);
    //   });
//   return 
//   (
    // <Typography variant="body2" color="textSecondary" align="center">
    //   {"Copyright © "}
    //   <Link color="inherit" href="https://material-ui.com/">
    //     Your Website
    //   </Link>{" "}
    //   {new Date().getFullYear()}
    //   {"."}
    // </Typography>
//   );
// }
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background:
      "url(https://d1ralsognjng37.cloudfront.net/5c8070fb-fc4a-477b-8734-b6bbe66d5532.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const classes = useStyles();





let recipeList = props.recipeList.map((recipe, i) =>{
    
return (
  <React.Fragment>
    <CssBaseline />

    <main>
      {/* Hero unit */}

      {/* <Container className={classes.cardGrid} maxWidth="md"> */}
        {/* End hero unit */}
        {/* <Grid container spacing={4}> */}
          {cards.map((props) => (
            <Grid item key={props} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={recipe.photo}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.name}
                  </Typography>
                  <Typography>{recipe.description}</Typography>
                </CardContent>
                <CardActions>
                  <Link to="">
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </Link>

                  <Link to="">
                    <Button size="small" color="primary">
                      Like
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        {/* </Grid> */}
      {/* </Container> */}
    </main>
  </React.Fragment>
);
});

let filteredRecipeList = props.filteredRecipeList.map((recipe, i) => {
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        {/* <Container className={classes.cardGrid} maxWidth="md"> */}
        {/* End hero unit */}
        {/* <Grid container spacing={4}> */}
        {cards.map((props) => (
          <Grid item key={props} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={recipe.photo}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {recipe.name}
                </Typography>
                <Typography>{recipe.description}</Typography>
              </CardContent>
              <CardActions>
                <Link to="">
                  <Button size="small" color="primary">
                    View
                  </Button>
                </Link>

                <Link to="">
                  <Button size="small" color="primary">
                    Like
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* </Grid> */}
        {/* </Container> */}
      </main>
    </React.Fragment>
  );
});

return (
  <div>
    <Navbar />
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        {/* <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          ></Typography> */}
        <Typography variant="h5" align="center" color="black" paragraph>
          Garifuna food is traditionally based on the staple foods of cassava,
          plantain and banana, combined with fish and other seafood. The colors
          of the Garifuna flag reflect the importance of cassava to the Garifuna
          people, as the yellow stripe represents the color of cassava bread;
          “ereba” in the Garifuna language.
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
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Button variant="contained" color="yellow">
                {/* Eventually a form to search recipe by name
                 */}
                SEARCH FORM
              </Button>
            </Grid>
            {/* <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid> */}
          </Grid>
        </div>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {props.recipeList}
          {/* {props.recipeSearch.length > 1 ? filteredRecipeList : recipeList} */}
        </Grid>
      </Container>
    </div>

    {/* <div>// the container with grids</div> */}
  </div>
);
  
}

export default Recipe;