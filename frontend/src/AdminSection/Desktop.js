
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import'./Desktop.css'

import Refreshcond from "../refresh/refreshcond.js";
import Refreshemp from "../refresh/refreshemp.js";
import Refreshveh from "../refresh/refreshveh.js";

import Condidat from './Candidate/Candidate'
import Veh1 from './Ressources/veh1'
import Emp1 from './Staff/Staff.js'
import Nav from './navbar/navbar.js';
import Footer from "../home1/components/Footer.js";

//routing reserver pour l'utilisateur "admin"

export default function DesktopAdmin({authorized}) {
  if(!authorized){
    return <Redirect to='/'/>
  }
  return (
    <Router >
      <div className = 'acceuil_admin'>
        <Nav/>
        <Switch>
          <Route exact path="/employe">
            <Emp1 />
          </Route>
          <Route exact path="/vehicule">
            <Veh1 />
          </Route>
          <Route exact path='/gcondidat' >
            <Condidat />
          </Route>
          <Route path='/vehicule/save'>
            <Refreshveh />
          </Route>
          <Route exact path='/employe/save'>
            <Refreshemp />
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

