import { React, Component } from "react";
import { Link } from "react-router-dom";
import "../../Assets/AdminSection/Navbar/navbar.css";
import logo from "../../Assets/AdminSection/Navbar/icon/logo.png";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="container">
          <img src={logo} id="logo" alt="logo"></img>

          <ul>
            <br></br>
            <li>
              <Link to="/gcondidat">Candidate Management</Link>
              <Link to="/vehicule">Vehicules Management</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
