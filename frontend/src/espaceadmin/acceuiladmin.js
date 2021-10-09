
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import'./acceuiladmin.css'

import Refreshcond from "../refresh/refreshcond.js";
import Refreshemp from "../refresh/refreshemp.js";
import Refreshveh from "../refresh/refreshveh.js";

import Condidat from './condidat/condidat.js'
import Veh1 from './vehicule/veh1'
import Emp1 from './employe/emp1.js'
import Nav from './navbar/navbar.js';
import Footer from "../home1/components/Footer.js";

//routing reserver pour l'utilisateur "admin"

export default function Acceuiladmin({authorized}) {
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

