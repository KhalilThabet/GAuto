import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



import Navbar from './Navbar.js'
import CourseSection from './CourseSection'
import Informations from './Informations'
import Footer from "../home1/components/Footer.js";
import './style.css'


export default function Acceuilcand({authorized,IdCandidate}) {
  if(!authorized){
    return <Redirect to='/'/>
  }
  return (
    <Router>
      <div className='acceuil_candidat'>
        <Navbar/>
        <Switch>
          <Route path="/lestest">
            <CourseSection />
          </Route>
          <Route path="/condidat">
            <Informations PersonnelCIN={IdCandidate}/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

