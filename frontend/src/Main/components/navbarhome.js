import { React, Component } from "react";

import "../Assets/style/navbar.css";
import logo from "../Assets/icons/logo.png";

class Navbarhome extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="container">
          <img src={logo} id="logo" alt="logo"></img>
        </nav>
      </div>
    );
  }
}
export default Navbarhome;
