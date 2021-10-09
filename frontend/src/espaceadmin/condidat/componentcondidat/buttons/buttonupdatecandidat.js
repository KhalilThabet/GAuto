import {React,useState } from 'react';
import Popup from '../bouttonajouter/popup.js';
import Updatecan from './updatecan';
import iconmodifier from './modifierinfoperson.png';
import '../stylecompocondidat.css'
/* le code css de button est ecrit dans stylecompocondidat.css
 dans un bloc special a partir de ligne 49 */


 
function Buttonupdatecandidat({cin2 , nom2 , prenom2 , num2 , ad2 , mdp2 }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <button onClick={togglePopup} ><img src={iconmodifier} id="re" alt="icon" ></img></button>
    
    {isOpen && <Popup
      content={<>
      <div id='styleformaj'>
        <b>modifier les informations du condidat</b>
        <p id='st' ><Updatecan cin1={cin2} nom1={nom2} prenom1 ={prenom2} num1={num2} ad1={ad2}  mdp1={mdp2}/></p>
        </div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Buttonupdatecandidat;