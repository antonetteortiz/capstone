import React, { Component } from "react";
import { NavItem } from "react-bootstrap";
import { MenuItems } from "./MenuItems";
import "./AltNavbar.css";
import logo from "../../../images/yurume.png";
import { Button } from "../Button";

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">

        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <h1 className="navbar-logo">
          <img src={logo} className="mainlogo"/>
          YURUMEI
        </h1>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {/* map over data in the menu item array */}
        {MenuItems.map((item, index) =>{
            return (
                 <li key={index}>
                    <a className={item.cName} href={item.url}>
                        {item.title}
                    </a>
                </li>
            )
        })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default  Navbar;
