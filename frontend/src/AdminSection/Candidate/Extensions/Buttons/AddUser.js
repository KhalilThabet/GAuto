import {React,useState } from 'react';
import Popup from '../popup.js';
import Ajoutecan from './ajoutecan.js';
import icon from './icon/plus.png';
import '../stylecompocondidat.css'

/* le code css de button est ecrit dans stylecompocondidat.css
 dans un bloc special a partir de ligne 49 */


 
function Buttonajouter() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <button onClick={togglePopup} id='plus'><img src={icon} id="re" alt="icon"></img></button>
    
    {isOpen && <Popup
      content={<>
      <div id='styleformaj'>
        <b>les informations du condidat</b>
        <p id='st' ><Ajoutecan/></p>
        
        </div>
        
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Buttonajouter;