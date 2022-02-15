import { React, Component } from "react";
import { Link } from "react-router-dom";
import "./Assets/Styles/style.css";
import Logo from "./Assets/Images/CompagnyLogo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="container">
          <img src={Logo} alt="logo" id="logo"></img>
          <ul>
            <br></br>
            <li>
              <Link to="/condidat">Informations</Link>
              <Link to="/lestest">Take a Test</Link>
            </li>
          </ul>
          <div id="nomdecompte">Welcome</div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
