import { React, Component } from "react";

import "../Assets/Main/style/navbar.css";
import logo from "../Assets/Main/icons/logo.png";

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
