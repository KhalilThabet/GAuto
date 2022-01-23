import {React,  Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import logo from './logo.png'





class Navbarcond extends Component
{
    
    render(){
        return(
        
            <div className='navbar'>
               <nav className='container'>
               <img src={logo} alt="logo" id='logo' ></img>
                    <ul><br></br>
                       <li>
                           <Link to='/condidat'>information personnel</Link> 
                           <Link to='/lestest'>cours</Link> 
                      </li>
                    </ul>
                    <div id="nomdecompte">Bienvenu </div>
              </nav>
            </div>
          
        )
    }
}
export default Navbarcond