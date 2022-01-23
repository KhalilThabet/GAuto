import {React,  Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './icon/logo.png'

class Navemp extends Component
{

    
    render(){
        return(
        
            <div className='navbar'>
               <nav className='container'>
                   <img src={logo} id='logo' alt='logo' ></img>

                    <ul>
                        <br></br>
                       <li>
                         <Link to="/gcondidat" >Gestion condidat</Link> 
                         <Link to="/vehicule" >Gestion vehicule</Link> 
                      </li>
                 </ul>
              </nav>
            </div>
          
        )
    }
}
export default Navemp