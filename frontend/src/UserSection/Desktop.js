import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



import Navbarcond from './navbarcond.js'
import Espacecour from './espacecour.js'
import Bodyinfo from './bodyinfo.js'
import Footer from "../home1/components/Footer.js";
import './style.css'


export default function Acceuilcand({authorized,idcon}) {
  if(!authorized){
    return <Redirect to='/'/>
  }
  return (
    <Router>
      <div className='acceuil_candidat'>
        <Navbarcond/>

       
        <Switch>
          <Route path="/lestest">
            <Espacecour />
          </Route>
          <Route path="/condidat">
            <Bodyinfo cinpersonnel={idcon}/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

