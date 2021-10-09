import {React,  Component } from 'react';

import '../style/navbar.css';
import logo from './icon/logo.png'


//<Link to="/">Gestion condidat</Link> 
//<Link to="/ab">Gestion vehicule</Link> 
//<Link to="/users">Gestion Employes</Link>


class Navbarhome extends Component
{

    
    render(){
        return(
        
            <div className='navbar'>
               <nav className='container'>
                   <img src={logo} id='logo' alt="logo"></img>

                    
              </nav>
            </div>
          
        )
    }
}
export default Navbarhome