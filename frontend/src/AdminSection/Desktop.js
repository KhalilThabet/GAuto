import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "../Assets/AdminSection/Desktop.css";

import Reload from "../Routing/Reload.js";

import Condidat from "./Candidate/Candidate";
import Veh1 from "./Ressources/veh1";
import Emp1 from "./Staff/Staff.js";
import Nav from "./navbar/navbar.js";
import Footer from "../Main/Footer.js";

//routing reserver pour l'utilisateur "admin"

export default function DesktopAdmin({ authorized }) {
  if (!authorized) {
    return <Redirect to="/" />;
  }
  return (
    <Router>
      <div className="acceuil_admin">
        <Nav />
        <Switch>
          <Route exact path="/employe">
            <Emp1 />
          </Route>
          <Route exact path="/vehicule">
            <Veh1 />
          </Route>
          <Route exact path="/gcondidat">
            <Condidat />
          </Route>
          <Route path="/vehicule/save">
            <Reload Path="/vehicule"/>
          </Route>
          <Route path="/employe/save">
            <Reload Path="/employe"/>
          </Route>
          <Route path="/gcondidat/save">
            <Reload Path="/gcondidat"/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
