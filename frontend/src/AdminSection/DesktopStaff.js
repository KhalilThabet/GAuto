import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../Assets/AdminSection/Desktop.css";
import Reload from "../Routing/Reload.js";
import Candidat from "./Candidate/Candidate";
import Veh1 from "./Ressources/veh1";
import Navemp from "./navbar/navbaremp.js";
import Footer from "../Main/Footer.js";

//routing reserver pour l'utilisateur "employee"
export default function Acceuilemp({ authorized }) {
  if (!authorized) {
    return <Redirect to="/" />;
  }
  return (
    <Router>
      <div className="acceuil_admin">
        <Navemp />
        <Switch>
          <Route path="/vehicule">
            <Veh1 />
          </Route>
          <Route path="/gcondidat">
            <Candidat />
          </Route>
          <Route path="/vehicule/save">
            <Reload Path='/vehicule'/>
          </Route>
          <Route path="/gcondidat/save">
            <Reload Path='/gcondidat'/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
