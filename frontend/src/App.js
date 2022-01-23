import React ,{useState} from 'react';
import {Route ,Switch} from 'react-router-dom';
import Home from './home1/components/First_page.js'; 
import './App.css';
import Acceuiladmin from './AdminSection/Desktop';
import Acceuilcand from './UserSection/Desktop';
import Acceuilemp from './AdminSection/DesktopStaff'
import 'semantic-ui-css/semantic.min.css'
//routing 
//on declare les variables genrales pour faire des liaisons entre le components
//le variable permession assure le blockage d acces a une page a travers le URL
//fonction handelauthorzied permet de change la permession et donner l acces pour utiliser le component donnee
// le role de variable idc c est faire liaison entre l page home est l espace condidat 

export default function App() {

  const [permessioncond, setpermmessioncond] = useState(false)  
  const [permessionadmin, setpermmessionadmin] = useState(false)
  const handelauthorizedcondidat = function () {
    setpermmessioncond(true);
  }
  const handelauthorizedadmin = function () {
    setpermmessionadmin(true);
  }
  const[idc,setidc]=useState('');
  const changecin = function (e) {
    setidc(e);
  }
  return (
      <Switch>
        <Route exact path='/' component={() => <Home funcondidat={handelauthorizedcondidat} funadmin={handelauthorizedadmin} idcondidat={changecin} />} />
        <Route exact path='/condidat' component={() => <Acceuilcand authorized={permessioncond} idcon={idc}/>} />
        <Route exact path='/admin' component={() => <Acceuiladmin authorized={permessionadmin} />} />
        <Route exact path='/emp' component={() => <Acceuilemp authorized={permessionadmin} />} />

      </Switch>
  );

}


;




/*setinfo(changeinfo={
  immatricule:{valeur.immatricule} ,modele:{valeur.modele}, marque:{valeur.marque},
  vig:'' ,assurence:'val.assurence', visite:'val.visite', de:'val.dernierentretien',
 })*/
