
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import'./acceuiladmin.css'
import Refreshcond from "../refresh/refreshcond.js";
import Refreshveh from "../refresh/refreshveh.js";
import Candidat from './condidat/condidat.js'
import Veh1 from './vehicule/veh1'
import Navemp from './navbar/navbaremp.js';
import Footer from "../home1/components/Footer.js";

//routing reserver pour l'utilisateur "employee"
export default function Acceuilemp({authorized}) {
  if(!authorized){
    return <Redirect to='/'/>
  }
  return (
    <Router >
      <div className = 'acceuil_admin'>
        <Navemp/>
        <Switch>
          <Route exact path="/vehicule">
            <Veh1 />
          </Route>
          <Route exact path="/gcondidat">
            <Candidat />
          </Route>
          <Route exact path='/vehicule/save'>
            <Refreshveh />
          </Route>
          <Route exact path='/gcondidat/save'>
            <Refreshcond />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
