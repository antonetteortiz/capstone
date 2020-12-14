import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();


const [open, setOpen] = useState(false);
const [anchor, setAnchor] = useState('left');

const handleDrawer = () => {
  setAnchor('left')
  setOpen(true);
};

const handleAccount = () => {
  setAnchor('bottom')
  setOpen(true)
}

// const style = {
//   background: "#FFD800",
//   color: "black"
// };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "#FFD800", color: "black" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "black" }}
            >
              YURUMEI
            </Link>
          </Typography>
          <Button color="inherit" onClick={handleAccount}>
            Sign Up
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        style={{ background: "transparent" }}
      >
        <div style={{ height: "100%", padding: "20px" }}>
          {anchor === "left" ? (
            <div>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Home</h4>
              </Link>
              <Link
                to="/history"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>History</h4>
              </Link>

              <Link
                to="/language"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Language</h4>
              </Link>

              <Link
                to="/food"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Recipes</h4>
              </Link>

              <Link
                to="/music"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Music</h4>
              </Link>

              <Link
                to="/forum"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Forum</h4>
              </Link>
            </div>
          ) : (
            <div>
              <h2>Sign Up information here</h2>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}
